import Card from '../ui/Card';
import {useRef,useState} from 'react';
import {useAuth} from '../../contexts/AuthContext';
import classes from './Items.module.css';

function Items(props){
    const [error,setError] = useState('');
    const imageRef = useRef();
    const {currentUser} = useAuth();
    const descriptionRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const genreRef = useRef();
    
    function createHandler(e){
        setError('');
        e.preventDefault();

        const email = currentUser.email;
        const enteredName = nameRef.current.value;
        const enteredImage= imageRef.current.value;
        const enteredPrice= priceRef.current.value;
        const enteredDescription= descriptionRef.current.value;
        const enteredGenre= genreRef.current.value;

        const itemData = {
            name:enteredName,
            image:enteredImage,
            price:enteredPrice,
            description:enteredDescription,
            genre:enteredGenre,
            email:email,
        };

        props.onAddItem(itemData)

    }
    return(
        <Card>
        <div>
           <form onSubmit={createHandler}>
        
               <div className={classes.container}>
               {error && <p>{error}</p>}
               <div className={classes.top}>
               <h1>Login</h1>
               </div>
                   <h3>Name of Item:</h3>
                   <input id="name" type="text" placeholder="Name Of Item" ref={nameRef} required></input>
                   <h3>Image URL:</h3>
                   <input id="image" type="url" placeholder="Image Url" ref={imageRef} required></input>
                   <h3>Price:</h3>
                   <input id="price" type="number" placeholder="Price" ref={priceRef} ></input>
                   <h3>Genre</h3>
                   <input id="genre" type="text" placeholder="Gerne" ref={genreRef} ></input>
                   <h3>Description:</h3>
                   <input id="description" type="text" placeholder="Description" padding-bottom='100px' ref={descriptionRef} ></input>
                   <br />
                   <button className={classes.submit}>Submit</button>
                   <br />
                    <br></br>
               </div>
           </form>
        </div>
        </Card>
    );
}

export default Items;