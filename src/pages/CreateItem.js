import {useHistory} from 'react-router-dom';

import Posts from '../componenets/posts/Posts';
import classes from './Audio.module.css';

function CreateItem(){
    const history=useHistory();

    function addItemHandler(itemData){
        fetch(
        'https://ec-app-231a1-default-rtdb.firebaseio.com/items.json',
        {
            method:'POST',
            body: JSON.stringify(itemData),
            headers:{
                'Content-Type':'application/json'
            }
        }
        ).then(() =>{
            history.replace('/');
        });

    }
    return(
        <div className={classes.container}>
            <h1>Add Item</h1>
            <div className={classes.content}>
            <ul>
            <li>
            <Items onAddItem={addItemHandler}/>
            </li>
            <br></br>
            </ul>
            </div>
        </div>
    );
    
}

export default CreateItem;