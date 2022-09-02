import { Row, Col } from "react-bootstrap";
import styles from "./first_page.module.css";
import React from "react";

function First_page() {
  return (
    <React.Fragment>
      <Row style={{marginBottom:"5rem", paddingTop: '2rem',position: 'relative'}}>
        <Col lg={6}>
          <div>
            <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/cscscsc.png" className={styles.bigArrow}></img>
          </div>
          <div>
            <h1 className={styles.text1}>
              FIND THE BEST{" "}
              <div style={{ position: "relative", display: "inline" }}>
                <span className={styles.answers}>ANSWERS</span>
                <img
                  src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/underline.png"
                  className={styles.underline}
                ></img>
              </div>{" "}
              <br />
              TO ALL YOUR TRAVEL
              <br /> QUESTIONS!
            </h1>

            <div style={{ margin: "50px 0 0 20px" }}>
              <div>
                <button className={styles.join}>
                  <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/Vector.png" className={styles.vector}></img>
                  <span className={styles.joinText}>JOIN THE COMMUNITY</span>
                  <img
                    src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/Group11.png"
                    className={styles.Group11}
                  ></img>
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div>
            <img
              src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/arrowtopright.png"
              className={styles.atr}
            ></img>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/Group30.png" className={styles.mainImg}></img>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default First_page;
