import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from 'firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = e => {
        e.preventDefault(); //Stop The page from refreshing
        // Do the login logic

        auth.signInWitEmailAndPassword(email, password);
    }

    const register = e => {
        e.preventDefault();
    }

    return (
        <div className='login'>
            <Link to = '/'>
                <img
                    className='login__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png" 
                    alt="Logo"
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>Email</h5>
                    <input type="email" name="" id=""/>

                    <h5>Password</h5>
                    <input type="password" name="" id=""/>
                    
                    <button onClick={login} className = 'login__signInButton' type='submit'>Sign In</button>
                </form>

                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
