import Card from '../componenets/ui/Card';
import classes from './Profile.module.css';
import React,{useState} from 'react';
import {Link,BrowserRouter} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';


function Profile(){
    const [error,setError] = useState("");
    const {logout,currentUser} = useAuth();
    async function handleLogout(){
        setError('')

        try{
            await logout()
            window.location.replace('/');
        }
        catch{
            setError('Logout Failed')
        }
    }
    return(
        <div className={classes.container}>
            <div className={classes.cont}>
        <Card>
        <div className={classes.top}>
            <h1>Profile</h1>
            </div>
            <div className={classes.content}>
            <p>{error}</p>
            
        <h3>Email:</h3>
        <p>{currentUser.email}</p>
        <br />
        {currentUser.email === "syed.mannan@outlook.com"?<Link to="/createItem"><button button className={classes.submit}>Create Item</button></Link>:<br></br>}
        
        <br />
        <BrowserRouter>
        <Link to="/update-profile"><button className={classes.submit} >Update Profile</button></Link>
        </BrowserRouter>
        <br />
        <button className={classes.submit} onClick={handleLogout}>Logout</button>
        </div>
        </Card>
        </div>
        </div>
    );
}

export default Profile;