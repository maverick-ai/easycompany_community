import { useRef } from "react";
import axios from "axios";
export default function Login() {
    
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const LogInUrl = "http://127.0.0.1:8000/api/login"


    async function performLogin() {
        const credentials = JSON.stringify({
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
        });

        axios.post(LogInUrl,{ crossdomain: true }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Host': '127.0.0.1:8000'
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
            <label for="email" >Email</label>
            <input ref={emailInputRef} type="text" placeholder="Email" id="email"/>
            <label for="password">Password</label>
            <input ref={passwordInputRef} type="password" placeholder="Password" id="password"/>
            <button onClick={performLogin}>Login</button>

        </div>
    )
}