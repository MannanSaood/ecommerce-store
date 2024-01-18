import classes from './Cart.module.css';
import {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import ItemList from '../componenets/Items/ItemList';
import firebase from 'firebase';
import 'firebase/database';
import {auth,database,app} from '../firebase';

function Cart(props){
    const [loading,setLoading] = useState(true);
    const [loadedItem,setLoadedItem] = useState([]);
    let [price,setPrice] = useState('');
    const {currentUser} = useAuth();
    let itemEmail=[];
    let itemPrice=[];
    let itemId=[];
    parseInt(price)
    parseInt(setPrice)
    parseInt(itemPrice)
    let result = []
    const history = useHistory() ;

    useEffect(()=>{
        fetch(
            'https://ec-app-231a1-default-rtdb.firebaseio.com/userCart.json'
        ).then(response =>{
            return response.json()
            
        }).then(data =>{
            let items=[];
            for(const key in data){
                const item={
                    id:key,
                    ...data[key]
                };
                itemEmail.push(item.email);
                itemPrice.push(item.price);
                itemId.push(item.id);
                parseInt(itemPrice)
                items.push(item);
                setPrice(item.price)
                parseInt(setPrice)

              
            }
            setLoading(false);
            result = items.filter(item => item.email === currentUser.email);
            setLoading(false);
            setLoadedItem(result)
        });
    },[]);

    parseInt(price)
    parseInt(setPrice)
    if(loading){
        return(
            <section>
                <p>Loading...</p>
            </section>
        );
    }
    let splice=[];
    function removeFromCart(){
        if(loadedItem.length===1){
        for(let i=0;i<=1;i++){
            if(loadedItem.length===1){
                fetch(
                    'https://ec-app-231a1-default-rtdb.firebaseio.com/userCart/'+loadedItem[0].id+".json",
                    {
                        method:'DELETE',
    
                }).then(() =>{
                        history.replace('/cart');
                    });
            }
        }
    }
    else{
        for(let i=0; i<loadedItem.length;i++){
            splice =loadedItem.splice(loadedItem[i],1)
        if(true){
            fetch(
                'https://ec-app-231a1-default-rtdb.firebaseio.com/userCart/'+loadedItem[i].id+".json",
                {
                    method:'DELETE',

            }).then(() =>{
                history.replace('/cart');
            });
                
            console.log(splice)
        }
        }
    }
        
    }
    let dat =firebase.database()
    console.log(dat)
    for(let i=0 ;i<=loadedItem.length;i++){
        if(i>=1){
        price += price[i]
        }
        else{
            price ="0"
        }
    }
    const cartLength= loadedItem.length;
    if(loadedItem.length===0){
        return(
            <div className={classes.container}>
            <p>There Are No Items.Add items to cart!</p>
            </div>
        );
    }
    else{
    return(
        <div>
            <div className={classes.container}>
            <div className={classes.message}><h3>You Have {cartLength}   Items in Cart</h3></div>
            <h1>Cart</h1>
            <div className={classes.content}>
            <ul>
            <li>
            <ItemList items={loadedItem}/>
            </li>
            <button onClick={removeFromCart}>Remove</button>
            <br></br>
            </ul>
            </div>
        </div>
        </div>
    );
    }
}

export default Cart;