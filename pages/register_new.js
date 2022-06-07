import styles from "../styles/Register.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useRef, forwardRef } from "react";
import { useCookies } from "react-cookie";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RegisterUserURL, Host } from "../components/constants";
import { useRouter } from "next/router";
import { useEffect } from "react";
import publicIp from 'public-ip';
import ToggleSwitchBack from "../components/ToggleSwitchBack"



function Register(req) {
    //NextRequest
    let userDetails = {}
    useEffect(async () => {
        userDetails.os = navigator.oscpu
        userDetails.ip = await publicIp.v4();
        let userAgent = navigator.userAgent;
        let browserName = "";
        if (userAgent.match(/chrome|chromium|crios/i)) {
            browserName = "Chrome";
        } else if (userAgent.match(/firefox|fxios/i)) {
            browserName = "Firefox";
        } else if (userAgent.match(/safari/i)) {
            browserName = "Safari";
        } else if (userAgent.match(/opr\//i)) {
            browserName = "Opera";
        } else if (userAgent.match(/edg/i)) {
            browserName = "Edge";
        } else if (userAgent.match(/trident/i)) {
            browserName = "Trident";
        } else if (userAgent.match(/msie/i)) {
            browserName = "IE";
        }
        userDetails.browser = browserName;

    }, [])


    // console.log(navigator.platform);

    const [cookie, setCookie] = useCookies(["token"]);
    const [message, setMessage] = useState("");
    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const password = useRef();
    const router = useRouter();
    const regex = new RegExp(
        '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
        '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
        "|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
    );


    const [startDate, setStartDate] = useState(new Date());

    const DatePickerInput = forwardRef(({ value, onClick }, ref) => (
        <button
            className={styles.DatePickerCustomStyle}
            onClick={onClick}
            ref={ref}
        >
            {value}
        </button>
    ));

    async function sendRegisterRequest() {
        // console.log(await publicIp.v4());
        const DateOfBirth = `${startDate.getFullYear()}-${startDate.getMonth() + 1
            }-${startDate.getDate()}`;
        if (
            regex.test(email.current.value) &&
            password.current.value !== "" &&
            firstName.current.value !== "" &&
            lastName.current.value !== ""
        ) {
            const userDetail = JSON.stringify({
                email: email.current.value,
                password1: password.current.value,
                password2: password.current.value,
                gender: "M",
                date_of_birth: DateOfBirth,
                first_name: firstName.current.value,
                last_name: lastName.current.value,
                work: "Fighting criminals at night and running Wayne Enterprise in the day",
                university: "League of shadows",
                userdetails: userDetails
            });

            let response = "";
            try {
                response = await fetch(RegisterUserURL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "*/*",
                        "Accept-Encoding": "gzip, deflate, br",
                        Connection: "keep-alive",
                        "Content-Length": userDetail.length,
                        Host: Host,
                    },
                    body: userDetail,
                });

                if (response.status >= 300) {
                    throw (response);
                }
            }
            catch (error) {
                try {
                    const res = await error.json()
                    console.log(res);
                    if (res.non_field_errors)
                        alert(res.non_field_errors);
                    else if (res.password1)
                        alert(res.password1);
                    else if (res.email)
                        alert(res.email);
                    else if (res.first_name)
                        alert(res.first_name);
                    else if (res.last_name)
                        alert(res.last_name);
                    else if (res.date_of_birth)
                        alert(res.date_of_birth);
                    else if (res.gender)
                        alert(res.gender);
                    else if (res.work)
                        alert(res.work);
                    else if (res.university)
                        alert(res.university);
                    else
                        alert("Cannot register user right now, please try again later");
                }
                catch {
                    console.log(error);
                    alert(error);
                }
            }


            if (response.ok) {
                const data = await response.json();
                setCookie("token", data.key, {
                    path: "/",
                    maxAge: 2592000,
                    sameSite: true,
                });
                router.push("/questions");
            } else {
                setMessage("Something went wrong");
            }
        }
        setMessage("Some fields are empty or the email is incorrect");
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
                    <Row style={{ paddingTop: "355px" }}>
                        <ToggleSwitchBack />
                    </Row>
                    <div style={{position:"absolute", bottom:"0" , left:"29%"}}>
                    <img src="/loginNoodle.svg"/>
                    </div>
                    <div style={{position:"absolute", top:"0" , left:"0"}}>
                    <img src="/LoginNoodle2.svg"/>
                    </div>
                    <div style={{position:"absolute", bottom:"0%" , left:"0%"}}>
                    <img src="/loginBall.svg"/>
                    </div>
                    <div style={{position:"absolute", bottom:"35%" , left:"33%"}}>
                    <img src="/ballouter.svg"/>
                    </div>
                    <div style={{position:"absolute", bottom:"36%" , left:"31.2%"}}>
                    <img src="/ball2.svg"/>
                    </div>
                    <div style={{position:"absolute", top:"10%" , left:"36%"}}>
                    <img src="/loginprop.svg"/>
                    </div>
                </div>
            </Col>
            <Col>
                <Container>
                    <Row style={{ marginTop: "110px" }}>
                        <Col lg={{ span: 6, offset: 2 }}>
                            <h1 style={{ fontSize: "55px" }}>Sign <span className={styles.In}>Up</span></h1>
                        </Col>
                    </Row>
                    <Row className={styles.FirstNameRow}>
                        <Col lg={{offset:2}}>
                            <div>
                                <h6>First name</h6>

                                <input
                                    placeholder="Bruce"
                                    ref={firstName}
                                    className={`${styles.firstNameInput}`}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className={styles.LastNameRow}>
                        <Col lg={{offset:2}}>
                            <div>
                                <h6>Last name</h6>
                                <input
                                    placeholder="Wayne"
                                    ref={lastName}
                                    className={`${styles.firstNameInput}`}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row className={styles.LastNameRow}>
                        <Col lg={{offset:2}}>
                            <div>
                                <h6>Date of Birth</h6>
                                <DatePicker
                                    customInput={<DatePickerInput />}
                                    // className={styles.DatePickerCustomStyle}
                                    maxDate={new Date()}
                                    selected={startDate}
                                    onChange={(date) => {
                                        setStartDate(date);
                                    }}
                                    dateFormat="MMMM d, yyyy"
                                    showYearDropdown
                                    showMonthDropdown
                                    yearDropdownItemNumber={100}
                                    // scrollableYearDropdown
                                    dropdownMode="select"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className={styles.emailRow}>
                        <Col lg={{offset:2}}>
                            <div>
                                <h6>Email</h6>
                                <input
                                    type="email"
                                    placeholder="bruce@wayne.com"
                                    ref={email}
                                    className={`${styles.emailInput}`}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className={styles.passwordRow}>
                        <Col lg={{offset:2}}>
                            <div>
                                <h6>Password</h6>
                                <input
                                    placeholder="IamBatman123"
                                    type="password"
                                    ref={password}
                                    className={`${styles.passwordInput}`}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{offset:2}}>
                                <button
                                    onClick={sendRegisterRequest}
                                    className={styles.buttonForm}
                                >
                                    Sign Up
                                </button>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    );
}

export default Register;

