import Card from '../componenets/ui/Card';
import classes from './Signup.module.css';
import {Link,BrowserRouter} from 'react-router-dom';
import React from 'react';
import {useAuth} from '../contexts/AuthContext';
import {useRef,useState} from 'react';


function ForgotPassword(){
    const emailRef = useRef();
    const {ResetPassword} = useAuth();
    const [error,setError] = useState('');
    const [message,setMessage] = useState('');
    const [loading,setLoading] = useState(false);
    async function handleSubmit(e){
        e.preventDefault()
        try{
            setMessage('')
            setError('')
            setLoading(true)
            await ResetPassword(emailRef.current.value)
            setMessage('Check Your Inbox For Further Instructions')
            window.location.replace("/login")
        }
        catch{
            setError('Failed to sign in')
        }
        setLoading(false)
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
               <h1>Reset Password</h1>
               </div>
               {error && <p>{error}</p>}
               {message && <p>{message}</p>}
            <h3>Email:</h3>
            <input id="email" type="text" placeholder="Email-id" ref={emailRef} required></input>
            <br />
            <button disabled={loading}  className={classes.submit}>Reset Password</button>
            <br></br>
            <BrowserRouter>
            <Link to="/login">Want  to login?Login</Link>
            </BrowserRouter>
               </div>
           </form>
        </div>
        </Card>
        </div>
        </div>
    );
}

/*
*/ 
export default ForgotPassword;