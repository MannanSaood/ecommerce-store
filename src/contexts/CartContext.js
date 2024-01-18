import {createContext,useState} from 'react';

const CartContext = createContext({
    carted:0,
    totalCarted:0,
    addCarted: (CartedItems)=>{},
    removeCarted:(itemId)=>{},
    itemisCarted: (itemId) => {},
})

export function CartContextProvider(props){
    const[carted,setCarted] = useState();

    function addCartedHandler(CartedItems){
        setCarted((prevCarted) =>{
            return prevCarted.concat(CartedItems);
        })
    }
    function removeCartedHandler(itemId){
        setCarted((prevCarted)=>{
            return prevCarted.filter(item => item.id !== itemId)
        })
    }
    function itemCartedHandler(itemId){
        setCarted((prevCarted)=>{
            return prevCarted.filter(item => item.id === itemId)
        })
    }

    const context ={
        carted:carted,
        totalCarted:carted.length,
        addCarted:addCartedHandler,
        removeCarted:removeCartedHandler,
        itemisCarted:itemCartedHandler,
    }
    return(
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    );

}

export default CartContext