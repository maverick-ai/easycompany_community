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



function Register(req) {
  //NextRequest
  let userDetails = {}
  useEffect(async()=>{
    userDetails.os = navigator.oscpu
    userDetails.ip = await publicIp.v4();
    let userAgent = navigator.userAgent;
    let browserName="";
    if(userAgent.match(/chrome|chromium|crios/i)){
      browserName = "Chrome";
    }else if(userAgent.match(/firefox|fxios/i)){
      browserName = "Firefox";
    }  else if(userAgent.match(/safari/i)){
      browserName = "Safari";
    }else if(userAgent.match(/opr\//i)){
      browserName = "Opera";
    } else if(userAgent.match(/edg/i)){
      browserName = "Edge";
    }else if(userAgent.match(/trident/i)){
      browserName = "Trident";
    }else if(userAgent.match(/msie/i)){
      browserName = "IE";
    }
    userDetails.browser = browserName;
    
  },[])   


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
    const DateOfBirth = `${startDate.getFullYear()}-${
      startDate.getMonth() + 1
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

      const response ="";
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
          throw(response);
      }
      }
      catch (error) {
        try{
          const res = await error.json()
          console.log(res);
          if (res.non_field_errors)
            alert(res.non_field_errors);
          else if (res.password1)
            alert(res.password1);
          else if (res.email)
            alert(res.email);
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
    <div className={styles.ParentDiv}>
      <Container fluid="md">
        <Row className={styles.RegisterHeadingRow}>
          <Col className={`align-self-center text-center`}>
            <h1 className={styles.mainHeading}>
              <span className={styles.underlineRed}>Register</span>
            </h1>
            <p>If you are batman your secret is safe with us</p>
            <div className={`${styles.Notification}  mx-auto`} style={message===""?{display:"none"}:{display:"inline"}}>
              <p>{message}</p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={true} className={`text-center order-md-first`}>
            <img src="/batman.svg" className="img-fluid" />
          </Col>
          <Col className={`align-self-center`}>
            <Row className={styles.FirstNameRow}>
              <Col className={`align-self-center `}>
                <div className={`${styles.firstNameDiv} mx-auto`}>
                  <h2 className={styles.titleHeading}>first name</h2>

                  <input
                    placeholder="Bruce"
                    ref={firstName}
                    className={`${styles.firstNameInput}`}
                  />
                </div>
              </Col>
            </Row>
            <Row className={styles.LastNameRow}>
              <Col className={`align-self-center`}>
                <div className={`${styles.lastNameDiv} mx-auto`}>
                  <h2 className={styles.lastNameHeading}>last name</h2>
                  <input
                    placeholder="Wayne"
                    ref={lastName}
                    className={`${styles.firstNameInput}`}
                  />
                </div>
              </Col>
            </Row>

            <Row className={styles.LastNameRow}>
              <Col className={`align-self-center`}>
                <div className={`${styles.lastNameDiv} mx-auto`}>
                  <h2 className={styles.lastNameHeading}>Date of Birth</h2>
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
              <Col className={`align-self-center`}>
                <div className={`${styles.emailDiv} mx-auto`}>
                  <h2 className={styles.emailHeading}>email</h2>
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
              <Col className={`align-self-center`}>
                <div className={`${styles.passwordDiv} mx-auto`}>
                  <h2 className={styles.passwordHeading}>password</h2>
                  <input
                    placeholder="IamBatman123"
                    type="password"
                    ref={password}
                    className={`${styles.passwordInput}`}
                  />
                </div>
              </Col>
            </Row>
            <Row className={styles.bodyRow}>
              <Col className={`align-self-center`}>
                <div className={`${styles.buttonDiv} mx-auto`}>
                  <button
                    onClick={sendRegisterRequest}
                    className={`${styles.postButton}`}
                  >
                    Sign Up
                  </button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;

