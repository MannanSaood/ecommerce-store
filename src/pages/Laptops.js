import classes from './Laptops.module.css';
import {useState,useEffect} from 'react';
import ItemList from '../componenets/Items/ItemList';

function Laptops(){
    const [loading,setLoading] = useState(true);
    const [loadedItem,setLoadedItem] = useState([]);
    let itemGenre=[];
    let itemId=[];
    let result = []

    useEffect(()=>{
        fetch(
            'https://ec-app-231a1-default-rtdb.firebaseio.com/items.json'
        ).then(response =>{
            return response.json()
            
        }).then(data =>{
            let items=[];
            for(const key in data){
                const item={
                    id:key,
                    ...data[key]
                };
                itemGenre.push(item.genre);
                itemId.push(item.id);
                items.push(item);    
            }
            setLoading(false);
            result = items.filter(item => item.genre === "laptops");
            setLoadedItem(result)
        });
    },[]);
    if(loading){
        return(
            <div>Loading</div>
        );
    }
    return(
        <div className={classes.container}>
            <h1>Laptop's</h1>
            <div className={classes.content}>
            <ul>
            <li>
            <ItemList items={loadedItem}/>
            </li>
            <br></br>
            </ul>
            </div>
        </div>
    );
}

export default Laptops;