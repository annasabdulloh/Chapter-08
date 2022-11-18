import * as React from 'react';
import { useState, useEffect } from 'react';
import './login.css';
import { doLoginWithGoogle } from 'react-google-login';
import { GoogleLogin } from 'react-google-login';

async function doLogin(email, password) {
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    return data.token;
}

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState('');
    const [flag, setFlag] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        setIsLoggedIn(!!token);
    }, [token]);

    const handleSubmit = (e) => {
        if(!email || !password) {
            setFlag(true);
        }else {
            setIsLoading(true);
            e.preventDefault();
            doLogin({email, password})
                .then((token) => localStorage.setItem('token', token))
                .catch((err) => console.log(err.message))
                .finally(() => setIsLoading(false));
        }
    };

    const haldleSuccessGoogle = (response) => {
        console.log(response);
        console.log(response.tokenId);
        if(response.tokenId)
        {doLoginWithGoogle(response.tokenId).then((token) => {
            localStorage.setItem("token", token);
            setIsLoggedIn(token);}).catch((err) => console.log(err.message)).finally(() => setIsLoading(false));}}

    // console.log(email, password, token);

    const haldleFailureGoogle = (response) => {
        console.log(response);
        alert(response);
    }

    return(
        <div className="form row col-12 d-flex justify-content-center">
            <div className="form-body">
                <form onSubmit={handleSubmit}>
                    <div className="email">
                        <label className="form__label" for="email">Email </label>
                        <input  type="email" id="email" className="form__input" placeholder="Email"/>
                    </div>
                    <div className="password">
                        <label className="form__label" for="password">Password </label>
                        <input className="form__input" type="password"  id="password" placeholder="Password"/>
                    </div>
                    <div className="container d-flex justify-content-center p-4">
                        <button type="submit" className="btn btn-success">Login</button>
                    </div>
                    <div className='container d-flex justify-content-center p-1'>
                            <GoogleLogin
                                clientId = {process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                buttonText = "Login with Google"
                                onSuccess = {haldleSuccessGoogle}
                                onFailure = {haldleFailureGoogle}
                                cookiePolicy = {'single_host_origin'}
                            />
                    </div>
                </form>
            </div>
        </div>
    )       
}

export default Login;