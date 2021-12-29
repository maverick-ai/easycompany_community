import styles from "../styles/Register.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect, useRef,forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CreatePostURL, Host } from "../components/constants";

let initialState = 0;

export default function Register() {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();

  const [startDate, setStartDate] = useState(new Date());



  async function sendRegisterRequest() {
    const post = JSON.stringify({
      postByUser: firstName.current.value,
      title: lastName.current.value,
    });

    const response = await fetch(CreatePostURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "Content-Length": post.length,
        Host: Host,
      },
      body: post,
    });
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
                    className={styles.DatePickerCustomStyle}
                    maxDate={new Date()}
                    selected={startDate}
                    onChange={(date) => {setStartDate(date);console.log(date.getMonth());}}
                    dateFormat="MMMM d, yyyy"
                    showYearDropdown
                    yearDropdownItemNumber={100}
                    scrollableYearDropdown
                  />
                </div>
              </Col>
            </Row>
            <Row className={styles.emailRow}>
              <Col className={`align-self-center`}>
                <div className={`${styles.emailDiv} mx-auto`}>
                  <h2 className={styles.emailHeading}>email</h2>
                  <input
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
                  <button className={`${styles.postButton}`}>Post</button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
