import styles from "../styles/Login.module.css";
import LogInForm from "../components/LogInForm";
import { useRef,useState } from "react";
import axios from "axios";
import { LogInURL, Host } from "../components/constants";
import cookie from "cookie";
import { useCookies } from "react-cookie"

function Login() {
  const emailInputRef=useRef();
  const passwordInputRef=useRef();
  // const history =useHistory();
  const [loginCorrectState,setloginCorrectState]=useState(true)
  const [cookie, setCookie] = useCookies(["token"]);


  function clickOnRegister(){
    // history.replace('/Registration');
  }

  async function performLogin(){
    const credentials=JSON.stringify({
      email: emailInputRef.current.value,
      password:passwordInputRef.current.value,
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
      setCookie("token", JSON.stringify({token:data.key}), {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      })
      console.log(cookie.parse(document.cookie));
      // history.replace('/');

    }
    else{
      setloginCorrectState(false);
      setTimeout(()=>{
        setloginCorrectState(true)
      },3000);
    }
  }



  return (
    <div>
      <div
        className={styles.divOfLogInPage}
        style={{ display: "block", position: "relative" }}
      >
        <img
          className={styles.LogInImageStyle}
          alt="Scenic Background"
          src={"/logIn.jpg"}
        />
        <LogInForm
          ClickOnRegisterLink={clickOnRegister}
          LogInCorrect={loginCorrectState}
          performLogin={performLogin}
          EmailRef={emailInputRef}
          PasswordRef={passwordInputRef}
        />
      </div>
    </div>
  );
}

export default Login;
