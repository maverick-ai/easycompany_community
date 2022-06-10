import styles from "../styles/Login.module.css";
import { useRef, useState } from "react";
import { LogInURL, Host } from "../components/constants";
import cookie from "cookie";
import { useCookies } from "react-cookie"
import { useRouter } from 'next/router';
import LogInForm from "../components/LogInForm";
import { Row, Col, Container } from "react-bootstrap";
import { JSONCookie } from "cookie-parser";
import ToggleSwitchToSignUp from "../components/ToggleSwitch";

function Login() {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const router = useRouter();
    const [loginCorrectState, setloginCorrectState] = useState(true)
    const [cookie, setCookie] = useCookies(["token"]);

    async function performLogin() {
        const credentials = JSON.stringify({
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
        });
        const response = await fetch(LogInURL, {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Content-Length': credentials.length,
                'Host': Host
            }, body: credentials
        });

        if (response.ok) {
            const data = await response.json();
            setCookie("token", data.key, {
                path: "/",
                maxAge: 2592000,
                sameSite: true,
            })
            router.push("/questions");
        }
        else {
            alert("Incorrect email or password");
            setloginCorrectState(false);
            setTimeout(() => {
                setloginCorrectState(true)
            }, 3000);
        }
    }

    return (
        <Row>
            <Col>
                <div className={styles.bkimg}>
                    <div className={styles.cirText}>
                        <svg viewBox="0 0 100 100" width="100" height="100">
                            <defs>
                                <path id="circle"
                                    d="
                                M 50, 50
                                m -37, 0
                                a 37,37 0 1,1 74,0
                                a 37,37 0 1,1 -74,0"/>
                            </defs>
                            <text style={{ fontWeight: "10" }} font-size="17">
                                <textPath xlinkHref="#circle">
                                    LOG IN SIGN UP FOR FREE
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <Row style={{ paddingTop: "250px" }}>
                        <ToggleSwitchToSignUp/>
                    </Row>
                    <div style={{position:"absolute", bottom:"0" , left:"32%"}}>
                    <img style={{width:"65%"}} src="/loginNoodle.svg"/>
                    </div>
                    <div style={{position:"absolute", top:"5%" , left:"0"}}>
                    <img style={{width:"65%"}} src="/LoginNoodle2.svg"/>
                    </div>
                    <div style={{position:"absolute", bottom:"0%" , left:"0%"}}>
                    <img style={{width:"65%"}} src="/loginBall.svg"/>
                    </div>
                    <div style={{position:"absolute", bottom:"35%" , left:"33%"}}>
                    <img style={{width:"65%"}} src="/ballouter.svg"/>
                    </div>
                    <div style={{position:"absolute", bottom:"36%" , left:"31.4%"}}>
                    <img style={{width:"65%"}} src="/ball2.svg"/>
                    </div>
                    <div style={{position:"absolute", top:"10%" , left:"36%"}}>
                    <img style={{width:"65%"}} src="/loginprop.svg"/>
                    </div>
                </div>
            </Col>
            <Col>
                <Container>
                    <Row style={{ marginTop: "150px" }}>
                        <Col lg={{ span: 6, offset: 2 }}>
                            <h1 style={{ fontSize: "45px" }}>Log <span className={styles.In}>In</span></h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ offset: 2 }}>
                            <LogInForm
                                LogInCorrect={loginCorrectState}
                                performLogin={performLogin}
                                EmailRef={emailInputRef}
                                PasswordRef={passwordInputRef}
                            />
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    );
}

export default Login;