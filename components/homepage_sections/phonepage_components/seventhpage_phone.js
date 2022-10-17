import React from "react";
import styles from "../../../styles/phonestyle.module.scss";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterToolbar from "../../FooterToolbar";

function Phone7() {
  return (
    <React.Fragment>
      <Row className={styles.seventhPageContainer}>
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
          <img src="phone_assets/camImg.png" className={styles.camImg} />
        </Col>
      </Row>
      <Row>
        <div className={styles.bulletSection}>
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
      <Row className={styles.footerSection}>
        <div className={styles.footerSection1}>
          <span className={styles.headingLast}>
            {" "}
            Ready to see what's out there?
            <br />
            Join the greatest{" "}
            <span className={styles.highlightTravelComm}>
              travel </span> <br />
              <span className={styles.highlightTravelComm}>
              community{" "}
            </span>
            today!
          </span>
          <img src="phone_assets/downArrow.png" className={styles.downArrow}></img>
          <img src="phone_assets/globe2.png" className={styles.globe2} />
        </div>
      </Row>
      <Row>
        <div className={styles.footerSection2}>
          <button className={styles.JoinUs}>JOIN US</button>
        </div>
      </Row>
      <FooterToolbar />
      {/* <Row>
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
      </Row> */}
    </React.Fragment>
  );
}

export default Phone7;
