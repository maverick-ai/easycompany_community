import { Row, Col } from "react-bootstrap";
import styles from "../../styles/page1.module.css";
import React from "react";

function First_page() {
  return (
    <React.Fragment>
      <Row style={{ minHeight: "100vh" }}>
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

            <div style={{ margin: "78px 0 0 59px" }}>
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
      </Row>
    </React.Fragment>
  );
}

export default First_page;
