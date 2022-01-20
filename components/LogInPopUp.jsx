import cookie from "cookie";
import {Host,LogInURL} from "./constants";
import {sendReq} from "./requests"
function LoginPopUp(props) {
    
    const registerUser = async event => {
      event.preventDefault()
  
      const credentials=JSON.stringify({
        email: event.target.email.value,
        password:event.target.pass.value,
    });
    var cookie = require('cookie');

      const response=await fetch(LogInURL,{method:'POST',headers:{
        'Content-Type': 'application/json',
        'Accept':'*/*',
        'Accept-Encoding':'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Content-Length':credentials.length,
        'Host':Host
      },body:credentials});
  
  
  
      if(response.ok){
        
        const data = await response.json();
        localStorage.setItem("token",data.key);
        setCookie("token", data.key, {
          path: "/",
          maxAge: 2592000,
          sameSite: true,
        })
        props.setLogin(true);
    }

        else {
            alert("Error in Logging user,Try again later.");
        }
    }
  
    return (
      <form onSubmit={registerUser}>
        <label htmlFor="email">Email</label>
        <input id="email" name="name" type="text" autoComplete="name" required />
        <label htmlFor="pass">Password</label>
        <input id="pass" name="pass" type="password" autoComplete="current-password" required />

        <button type="submit">Login</button>
      </form>
    )
  }

  export default LoginPopUp;

  