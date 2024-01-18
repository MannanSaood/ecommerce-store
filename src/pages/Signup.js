import Card from '../componenets/ui/Card';
import classes from './Signup.module.css';
import {Link} from 'react-router-dom';
import React from 'react';
import {useAuth} from '../contexts/AuthContext';
import {useRef,useState} from 'react';


function Signup(){
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth();
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            window.location.replace('/login');
        }
        catch{
            setError('Failed to create an account')
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
               <h1>Signup</h1>
               </div>
            <h3>Username:</h3>
            <input id="username" type="text" placeholder="Username" ref={usernameRef} required></input>
            <h3>Email:</h3>
            <input id="email" type="email" placeholder="Email-id" ref={emailRef} required></input>
            <h3>Password:</h3>
            <input id="password" type="password" placeholder="Password" ref={passwordRef} required></input>
            <h3>Confirm Password:</h3>
            <input id="password-confirm" type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required></input>
            <br />
            <button disabled={loading} className={classes.submit}>Signup</button>
            <br />
                    <Link to='/login'>Already Have One? Login Here</Link>
                    <br></br>
               </div>
           </form>
        </div>
        </Card>
        </div>
        </div>
    );
}

export default Signup;
