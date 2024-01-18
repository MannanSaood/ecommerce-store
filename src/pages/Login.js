import Card from '../componenets/ui/Card';
import classes from './Signup.module.css';
import {Link} from 'react-router-dom';
import React from 'react';
import {useAuth} from '../contexts/AuthContext';
import {useRef,useState} from 'react';


function Login(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error,setError] = useState('');
    const [message,setMessage] = useState('');
    const [loading,setLoading] = useState(false);
    async function handleSubmit(e){
        e.preventDefault()
        setMessage('')
        
        if(emailRef.current.value === "syed.mannan@outlook.com"){
            setMessage("Welcome Admin")
        }
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            window.location.replace('/profile');
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
               <h1>Login</h1>
               </div>
               <h3>Email:</h3>
                           <input id="email" type="text" placeholder="Email-id" ref={emailRef} required></input>
                           <h3>Password:</h3>
                           <input id="password" type="password" placeholder="Password" ref={passwordRef} required></input>
                           <br />
                           <button disabled={loading} className={classes.submit}>Login</button>
                           <br />
                            <Link to='/signup'>Dont Have An Account? Signup.</Link>
                            <br></br>
                            <Link to='/reset'>Forgot Pasdword? Reset.</Link>
               </div>
           </form>
        </div>
        </Card>
        </div>
        </div>
    );
}

export default Login;
