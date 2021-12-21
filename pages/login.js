import { useRef } from "react";
import axios from "axios";
import {LogInURL, Host} from "../components/URLs";







function Login() {
    
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);


    async function performLogin() {
        const credentials = JSON.stringify({
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
        });

        axios.post(LogInURL,{ crossdomain: true }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Content-Length':credentials.length,
                'Host': Host
            },
            body: credentials
        })
        .then((response) => {
            // dispatch({type: FOUND_USER, data: response.data[0]})
            localStorage.setItem('token', response.body.token);
            console.log(response.data);
        })
        .catch ((error) => {
            // dispatch({type: ERROR_FINDING_USER})
            console.log(error);
        })
    }

    return (
        <div className= "login-form">
            <h1>Login</h1>
            <label htmlFor="email" >Email</label>
            <input ref={emailInputRef} type="text" placeholder="Email" id="email"/>
            <label htmlFor="password">Password</label>
            <input ref={passwordInputRef} type="password" placeholder="Password" id="password"/>
            <button onClick={performLogin}>Login</button>

        </div>
    )
}


export default Login;