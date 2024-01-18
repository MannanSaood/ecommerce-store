import classes from './Item.module.css';
import Cards from '../ui/Card';
import {useHistory} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';

function Item(props){

    const history=useHistory();
    const {currentUser} = useAuth();
    function addCart(){

        const cartData ={
            name:props.name,
            image:props.image,
            price:props.price,
            description:props.description,
            email:currentUser.email,
        }
        
        fetch(
        'https://ec-app-231a1-default-rtdb.firebaseio.com/userCart.json',
        {
            method:'POST',
            body: JSON.stringify(cartData),
            headers:{
                'Content-Type':'application/json'
            }
        }
        ).then(() =>{
            history.replace('/cart');
        });
    }

    return(
        <div className={classes.align}>
        <Cards>
        <li className={classes.item}>
        <div className={classes.image}>
            <img src= {props.image} alt="" />
        </div>
        <div className={classes.content}>
            <h3>{props.name}</h3>
            <address>${props.price}</address>
            <p>{props.description}</p>
        </div>
        
        <div className={classes.actions}>
            <button className={classes.submit} onClick={addCart}>+</button>
        </div>
        </li>
        
        </Cards>
        </div>
    );
}

export default Item;