import styles from "../styles/Login.module.scss";
import Styles from "../styles/Register.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState, forwardRef, useEffect } from "react";
import { LogInURL, Host, RegisterUserURL } from "../components/constants";
import Cookies from "react-cookie";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import LogInForm from "../components/LogInForm";
import { Row, Col, Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import publicIp from "public-ip";
import LoginHeader from "../components/loginHeader";
import SignUpHeader from "../components/SignUpHeader";

function Login() {
  let userDetails = {};
  useEffect(async () => {
    userDetails.os = navigator.oscpu;
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
  }, []);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const router = useRouter();
  const [loginCorrectState, setloginCorrectState] = useState(true);
  const [cookie, setCookie] = useCookies(["token"]);
  const [isLogin, setIsLogin] = useState(true);
  const label = ".";

  const [message, setMessage] = useState("");
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const regex = new RegExp(
    '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
      '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
      "|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
  );

  const [startDate, setStartDate] = useState(new Date());
  const [winWidth, setWinWidth] = useState();
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (window.innerWidth <= 1050) {
      setWinWidth(window.innerWidth);
    } else {
      setWinWidth(window.innerWidth);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1050) {
        setWinWidth(window.innerWidth);
      } else {
        setWinWidth(window.innerWidth);
      }
    });
  }, [winWidth]);

  const DatePickerInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className={Styles.DatePickerCustomStyle}
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

  async function performLogin() {
    const credentials = JSON.stringify({
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    });
    const response = await fetch(LogInURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "Content-Length": credentials.length,
        Host: Host,
      },
      body: credentials,
    });

    if (response.ok) {
      const data = await response.json();
      setCookie("token", data.key, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      Cookies = cookie;
      router.push("/questions");
    } else {
      alert("Incorrect email or password");
      setloginCorrectState(false);
      setTimeout(() => {
        setloginCorrectState(true);
      }, 3000);
    }
  }

  async function sendRegisterRequest() {
    // console.log(await publicIp.v4());
    const DateOfBirth = `${startDate.getFullYear()}-${
      startDate.getMonth() + 1
    }-${startDate.getDate()}`;
    if (
      regex.test(email.current.value) &&
      password.current.value !== "" &&
      firstName.current.value !== "" &&
      lastName.current.value !== ""
    ) {
      // const userDetail = JSON.stringify({
      //   email: email.current.value,
      //   password1: password.current.value,
      //   password2: password.current.value,
      //   gender: "M",
      //   date_of_birth: DateOfBirth,
      //   first_name: firstName.current.value,
      //   last_name: lastName.current.value,
      //   work: "Fighting criminals at night and running Wayne Enterprise in the day",
      //   university: "League of shadows",
      //   userdetails: userDetails,
      // });
      const formdata = new FormData();
      formdata.append("email", email.current.value);
      formdata.append("password1", password.current.value);
      formdata.append("password2", password.current.value);
      formdata.append("gender", "M");
      formdata.append("date_of_birth", DateOfBirth);
      formdata.append("first_name", firstName.current.value);
      formdata.append("last_name", lastName.current.value);
      formdata.append(
        "work",
        "Fighting criminals at night and running Wayne Enterprise in the day"
      );
      formdata.append("university", "League of shadows");
      formdata.append("image", image);

      let response = "";
      try {
        response = await fetch(RegisterUserURL, {
          method: "POST",
          headers: {
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive",
            "Content-Length": formdata.length,
            Host: Host,
          },
          body: formdata,
        });

        if (response.status >= 300) {
          throw response;
        }
      } catch (error) {
        try {
          const res = await error.json();
          console.log(res);
          if (res.non_field_errors) alert(res.non_field_errors);
          else if (res.password1) alert(res.password1);
          else if (res.email) alert(res.email);
          else if (res.first_name) alert(res.first_name);
          else if (res.last_name) alert(res.last_name);
          else if (res.date_of_birth) alert(res.date_of_birth);
          else if (res.gender) alert(res.gender);
          else if (res.work) alert(res.work);
          else if (res.university) alert(res.university);          
          else if (res.image) alert(res.image);
          else alert("Cannot register user right now, please try again later");
        } catch {
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
        Cookies = cookie;
        router.push("/questions");
      } else {
        setMessage("Something went wrong");
      }
    }
    setMessage("Some fields are empty or the email is incorrect");
  }

  return (
    <Container fluid={true} className="p-0">
      <Row>
        <Col className={styles.bkimg}>
          <div>
            {winWidth > 1100 && (
              <div className={styles.cirText}>
                <svg viewBox="0 0 100 100" width="100" height="100">
                  <defs>
                    <path
                      id="circle"
                      d="
                                M 50, 50
                                m -37, 0
                                a 37,37 0 1,1 74,0
                                a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text style={{ fontWeight: "10" }} font-size="17">
                    <textPath xlinkHref="#circle">
                      LOG IN SIGN UP FOR FREE
                    </textPath>
                  </text>
                </svg>
              </div>
            )}
            <Row className={styles.Toggletop}>
              <div className={styles.container}>
                {label}
                <div className={styles.toggle_switch}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    name={label}
                    id={label}
                  />
                  <label className={styles.label} htmlFor={label}>
                    <span
                      className={styles.inner}
                      onClick={() => {
                        setIsLogin(!isLogin);
                      }}
                    />
                    <span
                      className={styles.switch}
                      onClick={() => {
                        setIsLogin(!isLogin);
                      }}
                    >
                      <div
                        className={styles.intext}
                        onClick={() => {
                          setIsLogin(!isLogin);
                        }}
                      >
                        {isLogin && (
                          <span className={styles.RegisterLink}>
                            Sign<span className={styles.In2}>up</span>
                          </span>
                        )}
                        {!isLogin && (
                          <span className={styles.LoginLink}>
                            Log<span className={styles.In2}>in</span>
                          </span>
                        )}
                      </div>
                    </span>
                  </label>
                </div>
              </div>
            </Row>
            {winWidth > 1050 && (
              <div style={{marginTop: '125%'}}>
                <div style={{ position: "absolute", bottom: "0", left: "34%" }}>
                  <img style={{ width: "25%" }} src="/LoginLeaf.png" />
                </div>
                <div style={{ position: "absolute", bottom: "0", left: "31%", top: '15%' }}>
                  <img style={{ width: "15%" }} src="/LoginPlaneTop1.png" />
                </div>
                <div style={{ position: "absolute", bottom: "0", left: "36%", top: '10%' }}>
                  <img style={{ width: "17.5%" }} src="/LoginPlaneTop2.png" />
                </div>
                <div style={{ position: "absolute", bottom: "0%", left: "9%" }}>
                  <img style={{ width: "35%" }} src="/LoginBottomPlane.png" />
                </div>
                <div style={{ position: "absolute", bottom: "0%", left: "0%" }}>
                  <img style={{ width: "15%" }} src="/login_globe.png" />
                </div>
                <div
                  style={{ position: "absolute", bottom: "32%", left: "0%" }}
                >
                  <img style={{ width: "17%" }} src="/LoginSuitcase.png" />
                </div>
                <div
                  style={{ position: "absolute", top: "12%", left: "33.35%" }}
                >
                  <img style={{ width: "25%" }} src="/LoginWorld.png" />
                </div>
                <div style={{ position: "absolute", top: "0%", left: "0%" }}>
                  <img style={{ width: "20%" }} src="/LoginLeaf2.png" />
                </div>
              </div>
            )}
            {winWidth < 576 && (
              <div>
               <div className={styles.headerRow}>
                  {/* <hr className={styles.headerLine}></hr> */}
               </div>
              </div>
            )}
          </div>
        </Col>
        <Col>
          {isLogin && (
            <Container>
              <Row className={styles.Logintop}>
                <Col lg={{ span: 6, offset: 2 }}>
                  <h1 className={styles.LogInHeadingDesktop} style={{ fontSize: "45px" }}>
                    Log <span className={styles.In}>In</span>
                  </h1>
                </Col>
              </Row>
              {/* <Row>
                <h1>Log In</h1>
              </Row> */}
              <Row>
                <Col className={styles.LoginHeaderCol}>
                  <LoginHeader />
                </Col>
                <Col lg={{ offset: 2 }} md={12}>
                  <LogInForm
                    LogInCorrect={loginCorrectState}
                    performLogin={performLogin}
                    EmailRef={emailInputRef}
                    PasswordRef={passwordInputRef}
                  />
                  <div className={styles.signUpInstead} 
                       onClick={() => {
                        setIsLogin(false);
                        }}
                       style={{display: 'flex', justifyContent: 'center'}}>
                    <p style={{textAlign: 'center', fontSize: '16px'}}>New User?<br style={{lineBreakx: '1px'}}></br>Sign Up Instead</p>
                  </div>
                </Col>
              </Row>
            </Container>
          )}
          {!isLogin && (
            <Container>
              <Row className={Styles.signUpHeaderRow}>
                <SignUpHeader />
              </Row>
              {/* <Row className={styles.Regtop}>
                <Col lg={{ span: 6, offset: 2 }}>
                  <h1 style={{ fontSize: "45px" }}>
                    Sign <span className={Styles.In}>Up</span>
                  </h1>
                </Col>
              </Row> */}
              <Row className={Styles.FirstNameRow}>
                <Col lg={{ offset: 2 }}>
                  <div>
                    <h6 className={Styles.label}>First name</h6>

                    <input
                      placeholder="Bruce"
                      ref={firstName}
                      className={`${Styles.firstNameInput}`}
                    />
                  </div>
                </Col>
              </Row>
              <Row className={Styles.LastNameRow}>
                <Col lg={{ offset: 2 }}>
                  <div>
                    <h6 className={Styles.label}>Last name</h6>
                    <input
                      placeholder="Wayne"
                      ref={lastName}
                      className={`${Styles.firstNameInput}`}
                    />
                  </div>
                </Col>
              </Row>

              <Row className={Styles.LastNameRow}>
                <Col lg={{ offset: 2 }}>
                  <div>
                    <h6 className={Styles.label}>Date of Birth</h6>
                    <DatePicker
                      customInput={<DatePickerInput />}
                      // className={Styles.DatePickerCustomStyle}
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
              <Row className={Styles.emailRow}>
                <Col lg={{ offset: 2 }}>
                  <div>
                    <h6 className={Styles.label}>Email</h6>
                    <input
                      type="email"
                      placeholder="bruce@wayne.com"
                      ref={email}
                      className={`${Styles.emailInput}`}
                    />
                  </div>
                </Col>
              </Row>
              <Row className={Styles.passwordRow}>
                <Col lg={{ offset: 2 }}>
                  <div>
                    <h6 className={Styles.label}>Password</h6>
                    <input
                      placeholder="IamBatman123"
                      type="password"
                      ref={password}
                      className={`${Styles.passwordInput}`}
                    />
                  </div>
                </Col>
              </Row>
              <Row className={Styles.LastNameRow}>
                <Col lg={{ offset: 2 }}>
                  <div>
                    <h6 className={Styles.label}>Profile Image</h6>
                    <input
                      type="file"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                    />
                  </div>
                  <div>
                    <div onClick={() => {setIsLogin(true);}} style={{position: 'relative'}}>
                      <h6 className={Styles.OptSignIn}>Sign In Instead</h6>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <div style={{ paddingBottom: "5px", justifyContent:'center', textAlign: 'center' }}>
                  <Col>
                    <button
                      onClick={sendRegisterRequest}
                      className={Styles.buttonForm}
                    >
                      Sign Up
                    </button>
                  </Col>
                </div>
              </Row>
            </Container>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
