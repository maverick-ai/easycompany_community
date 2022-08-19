import React from "react";
import styles from "../../../styles/phonestyle.module.scss";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Phone7() {
  return (
    <React.Fragment>
      <Row style={{ marginTop: "10%" }}>
        <Col
          md={{ span: 8, offset: 1 }}
          sm={{ span: 8, offset: 1 }}
          xs={{ span: 8, offset: 1 }}
        >
          <span className={styles.heading2last}>
            With <span className={styles.heading2lastspan}>Easycommunity</span>,
            you get to:
          </span>
        </Col>
        <Col md={2} sm={2} xs={2}>
          <img src="photos/camImg.png" className={styles.camImg} />
        </Col>
      </Row>
      <Row>
        <div style={{ width: "80%", margin: "6% auto" }}>
          <ul className={styles.points}>
            <li className={styles.Li}>
              <div className={styles.round} />
              <div>
                Know exclusive details of travel
                <br /> locations from our network.
              </div>
            </li>
            <li className={styles.Li}>
              <div className={styles.round} />
              <div>
                Learn from other travellers’
                <br /> experiences.
              </div>
            </li>
            <li className={styles.Li}>
              <div className={styles.round} />
              <div>
                Find help in planning your trip from
                <br /> the community.
              </div>
            </li>
          </ul>
        </div>
      </Row>
      <Row style={{ margin: " 8% 0 0 0" }}>
        <div style={{ textAlign: "center", position: "relative" }}>
          <span className={styles.headingLast}>
            {" "}
            Ready to see what's out there?
            <br />
            Join the greatest{" "}
            <span className={styles.highlightTravelComm}>
              travel <br />
              community{" "}
            </span>
            today!
          </span>

          <img src="photos/globe2.png" className={styles.globe2} />
        </div>
      </Row>
      <Row>
        <div style={{ textAlign: "center", marginTop: "5%" }}>
          <button className={styles.JoinUs}>JOIN US</button>
        </div>
      </Row>
      <Row>
        <div style={{ textAlign: "center", marginTop: "4%" }}>
          <img src="photos/lastGlobe.png" className={styles.lastGlobe}></img>
        </div>
      </Row>
      <Row style={{ textAlign: "center", margin: "3% 0" }}>
        <div>
          <div style={{ position: "relative" }}>
            <span className={styles.bottomText}>FOLLOW</span>
            <span className={styles.bottomText}>HELP</span>
            <span className={styles.bottomText}>CONTACT</span>
            <span className={styles.bottomText}>ABOUT US</span>
          </div>
        </div>
      </Row>
      <Row>
        <div style={{ textAlign: "center" }}>
          <img className={styles.logo} src="photos/logoeasy.svg" />
        </div>
      </Row>
    </React.Fragment>
  );
}

export default Phone7;
