import styles from "../styles/Login.module.css";
import { useRef,useState } from "react";
import { LogInURL, Host } from "../components/constants";
import cookie from "cookie";
import { useCookies } from "react-cookie"
import { useRouter } from 'next/router';
import LogInForm from "../components/LogInForm";

function Login() {
  const emailInputRef=useRef();
  const passwordInputRef=useRef();
  const router = useRouter();
  const [loginCorrectState,setloginCorrectState]=useState(true)
  const [cookie, setCookie] = useCookies(["token"]);
  
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
      setCookie("token", data.key, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      })
      router.push("/questions");
    }
    else{
      alert("Incorrect email or password");
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