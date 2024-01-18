import classes from './TV.module.css';
import {useState,useEffect} from 'react';
import ItemList from '../componenets/Items/ItemList';

function TV(){
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
            result = items.filter(item => item.genre === "tv");
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
            <h1>TV's</h1>
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

export default TV;