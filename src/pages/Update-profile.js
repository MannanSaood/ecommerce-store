import Card from '../componenets/ui/Card';
import classes from './Update-profile.module.css';
import {Link,BrowserRouter} from 'react-router-dom';
import React from 'react';
import {useAuth} from '../contexts/AuthContext';
import {useRef,useState} from 'react';


function UpdateProfile(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {currentUser,updateEmail,updatePassword} = useAuth();
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        const promises=[]
        setLoading(true)
        setError('')

        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.value))
        }
        if(passwordRef.current.value !== currentUser.password){
            promises.push(updatePassword(passwordRef.value))
        }
        Promise.all(promises).then(() =>{
            window.location.replace('/profile')
        }).catch(() =>{
            setError('Failed to update account')
        }).finally(()=>{
            setLoading(false)
        })
        
    }
    return(
        <div className={classes.content}>
        <div className={classes.cont}>
        <Card>
        <div>

           <form onSubmit={handleSubmit}>
           <div className={classes.container}>
               {error && <p>{error}</p>}
               <div className={classes.top}>
               <h1>Login</h1>
               </div>
               <h3>Email:</h3>
                   <input id="email" type="email" placeholder="Email-id" ref={emailRef} required></input>
                   <h3>Password:</h3>
                   <input id="password" type="password" placeholder="Leave Empty To Not Changing" ref={passwordRef}></input>
                   <h3>Confirm Password:</h3>
                   <input id="password-confirm" type="password" placeholder="Leave Empty To Not Changing" ref={passwordConfirmRef} ></input>
                   <br />
                   <button disabled={loading} className={classes.submit}>Update</button>
                   <br />
                   <BrowserRouter>
                    <Link to='/profile'>Cancel</Link>
                    </BrowserRouter>
                    <br></br>
               </div>
           </form>
        </div>
        </Card>
        </div>
        </div>
    );
}

export default UpdateProfile;