import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import APIService from '../APIService'
import './Login.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useCookies(['mytoken']);
    let navigate = useNavigate();
    const [isLogin, setLogin] = useState(true);

    useEffect(() => {
        var user_token = token['mytoken'];
        console.log('Login User token is', user_token);
        console.log('Date type', typeof(token['mytoken']));
        if (String(user_token) === 'undefined') {
            navigate('/');
        } else {
            navigate('/posts');
        }
    }, [token, navigate]);

    const loginBtn = () => {
        if (username.trim().length !== 0 && password.trim().length !== 0) {
            console.log('Username And Password Are Set');
            APIService.LoginUser({ username, password })
                .then(resp => setToken('mytoken', resp.token))
                .catch(error => console.log(error));
        } else {
            console.log('Username And Password Are Not Set');
            navigate('/');
        }
    };

    const registerBtn = () => {
        if (username.trim().length !== 0 && password.trim().length !== 0) {
            console.log('Username and password are set');
            APIService.RegisterUser({ username, password })
                .then(() => loginBtn())
                .catch(error => console.log(error));
        } else {
            navigate('/');
            console.log('Username and password are not set');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Simple Blog</h1>
                {isLogin ? <h3>Please Login Here</h3> : <h3>Please Register Here</h3>}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        value={username}
                        className="form-control"
                        placeholder="Enter Username"
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={password}
                        className="form-control"
                        placeholder="Enter Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    {isLogin ? (
                        <div>
                            <button onClick={loginBtn} className="btn">Login</button>
                            <p>If You Don't Have Account, Please</p>
                            <button onClick={() => setLogin(false)} className="btn">Register</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={registerBtn} className="btn">Register</button>
                            <p>If You Have Account, Please</p>
                            <button onClick={() => setLogin(true)} className="btn">Login</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;