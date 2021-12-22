import styles from "../styles/Login.module.css";
import LogInForm from "../components/LogInForm";
import { useRef } from "react";
import axios from "axios";
import { LogInURL, Host } from "../components/URLs";

function Login() {
  const emailInputRef=useRef();
  const passwordInputRef=useRef();
  const history =useHistory();
  const [loginCorrectState,setloginCorrectState]=useState(true)


  function clickOnRegister(){
    history.replace('/Registration');
  }

  async function performLogin(){
    const credentials=JSON.stringify({
      email: emailInputRef.current.value,
      password:passwordInputRef.current.value,
  });

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
      localStorage.setItem("token",data.key)
      history.replace('/');

    }
    else{
      setloginCorrectState(false);
      setTimeout(()=>{
        setloginCorrectState(true)
      },3000);
    }
  }



  async function performLogin() {
    const credentials = JSON.stringify({
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    });

    axios
      .post(
        LogInURL,
        { crossdomain: true },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive",
            "Content-Length": credentials.length,
            Host: Host,
          },
          body: credentials,
        }
      )
      .then((response) => {
        // dispatch({type: FOUND_USER, data: response.data[0]})
        localStorage.setItem("token", response.body.token);
        console.log(response.data);
      })
      .catch((error) => {
        // dispatch({type: ERROR_FINDING_USER})
        console.log(error);
      });
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
          src={process.env.PUBLIC_URL + "/logIn.jpg"}
        />
        <LogInForm
          ClickOnRegisterLink={clickOnRegister}
          LogInCorrect={loginCorrectState}
          performLogin={performLogin}
          EmailRef={emailInputRef}
          PasswordRef={passwordInputRef}
        />
      </div>

      <div className="login-form">
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input ref={emailInputRef} type="text" placeholder="Email" id="email" />
        <label htmlFor="password">Password</label>
        <input
          ref={passwordInputRef}
          type="password"
          placeholder="Password"
          id="password"
        />
        <button onClick={performLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
