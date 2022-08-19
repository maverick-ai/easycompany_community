import React from "react";
import styles from "../../../styles/phonestyle.module.scss";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Phone1() {
  return (
    <React.Fragment>
      <Col lg={6}>
        <div>
          <h1 className={styles.text1}>
            FIND THE BEST{" "}
            <div style={{ position: "relative", display: "inline" }}>
              <span className={styles.answers}>ANSWERS</span>
              <img
                src="photos/underline.png"
                className={styles.underline}
              ></img>
            </div>{" "}
            TO ALL YOUR TRAVEL QUESTIONS!
          </h1>

          <div
            style={{
              margin: "78px 0 0 50px ",
            }}
            className={styles.topbutton}
          >
            <div style={{ position: "relative" }}>
              <img src="photos/Vector.png" className={styles.vector}></img>
              <img src="photos/Group11.png" className={styles.Group11}></img>
              <button className={styles.join}>
                <span className={styles.joinText}>JOIN THE COMMUNITY</span>
              </button>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={6}>
        <div style={{ textAlign: "center" }}>
          <img src="photos/Group30.png" className={styles.mainImg}></img>
        </div>
      </Col>
    </React.Fragment>
  );
}

export default Phone1;
