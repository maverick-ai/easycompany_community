import styles from "./Loginpopup.module.css";
import cookie from "cookie";
import {Host,LogInURL} from "./constants";
import {sendReq} from "./requests"
import { useCookies } from "react-cookie"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";



function LoginPopUp(props) {
  const [cookie, setCookie] = useCookies(["token"]);
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
     function login(){
       props.setLogin(true);
     }
  
    return (
      <div className={styles.modal}>
        <div className={styles.modal_content}>
        <FontAwesomeIcon className={styles.close} icon={faTimesCircle}  onClick={login} />
        <form onSubmit={registerUser}>
        <h1>Log In</h1>
        <label htmlFor="email">Email</label>
        <input className={styles.Input} id="email" name="name" type="text" autoComplete="name" required />
        <label htmlFor="pass">Password</label>
        <input className={styles.Input} id="pass" name="pass" type="password" autoComplete="current-password" required />
        <button className={styles.button} type="submit">Login</button>
        </form>
        </div>
      </div>
    )
  }

  export default LoginPopUp;

  