import Item from './Item';
import classes from './ItemList.module.css';

function ItemList(props){
    return(
    <ul className={classes.list}>
       {props.items.map(item => <Item key={item.id} id={item.id} 
       image={item.image} name={item.name} price={item.price} email={item.email} description={item.description} />)} 
    </ul>
    );

}

export default ItemList;