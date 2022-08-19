import React from "react";
import styles from "../styles/page1.module.css";
import s from "../styles/page1a.module.css";
import sy from "../styles/page1y.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import DestCard from "./destcard";
import st from "../styles/page1a.module.css";
import First_page from "./homepage_sections/first_page_home";
import Second_page from "./homepage_sections/second_page_home";
import Third_page from "./homepage_sections/third_home_page";
import Fourth_page from "./homepage_sections/fourth_page_home";
import Five_page from "./homepage_sections/five_page_home";
import Sixth_page from "./homepage_sections/sixth_page_home";

function Page1() {
  return (
    <React.Fragment>
      <Container>
        <First_page />
        {/* -------------------------------------------second page ----------------------------------------------------- */}
        <Second_page />
        {/* -----------------------------------third page-------------------------------------------------------- */}
        <Third_page />
        {/* who are we */}
        <Fourth_page />
        {/* we are community */}

        <Sixth_page />
      </Container>
      <Row style={{ margin: "18% 0 10% 0" }}>
        <div style={{ position: "relative" }}>
          <img
            src="photos/bgpic.svg"
            style={{
              width: "100%",
              position: "absolute",
              zIndex: "0",
              bottom: "0",
              left: "0",
            }}
          />
        </div>
      </Row>
      <Container>
        {/* Travel World */}
        <Five_page />

        <Row style={{ margin: " 5% 0 0 0" }}>
          <div>
            <div
              style={{
                position: "relative",
                left: "35px",
              }}
            >
              <span className={sy.heading2last}>
                With <span className={sy.heading2lastspan}>Easycommunity</span>,
                you get to:
                <span>
                  <img src="photos/camImg.png" className={sy.camImg} />
                </span>
              </span>
            </div>
            <div style={{ marginTop: "2%" }}>
              <ul className={sy.points}>
                <li className={sy.Li}>
                  <div className={sy.round} />

                  <div>
                    Know exclusive details of travel locations from our network.
                  </div>
                </li>
                <li className={sy.Li}>
                  <div className={sy.round} />

                  <div>Learn from other travellers’ experiences.</div>
                </li>
                <li className={sy.Li}>
                  <div className={sy.round} />

                  <div>Find help in planning your trip from the community.</div>
                </li>
              </ul>
            </div>
          </div>
        </Row>
        <Row style={{ margin: " 8% 0 0 0" }}>
          <div style={{ textAlign: "center" }}>
            <span className={sy.headingLast}>
              <span style={{ position: "relative" }}>
                <span>
                  <img src="photos/pin.png" className={sy.pin} />
                </span>{" "}
                Ready
              </span>{" "}
              to see what's out there?
              <br />
              Join the greatest{" "}
              <span className={sy.highlightTravelComm}>travel community </span>
              <span>
                today!
                <span>
                  <img src="photos/globe2.png" className={sy.globe2} />
                </span>
              </span>
            </span>
          </div>
        </Row>
        <Row>
          <div style={{ textAlign: "center", marginTop: "3%" }}>
            <button className={sy.JoinUs}>JOIN US</button>
          </div>
        </Row>
        <Row>
          <div style={{ textAlign: "center", marginTop: "4%" }}>
            <img src="photos/lastGlobe.png" className={sy.lastGlobe}></img>
          </div>
        </Row>
        <Row style={{ textAlign: "center", margin: "3% 0" }}>
          <div>
            <div style={{ position: "relative" }}>
              <span className={sy.bottomText}>FOLLOW</span>
              <span className={sy.bottomText}>HELP</span>
              <span className={sy.bottomText}>CONTACT</span>
              <span className={sy.bottomText}>ABOUT US</span>
            </div>
          </div>
        </Row>
        <Row>
          <div style={{ textAlign: "center" }}>
            <img src="photos/logoeasy.svg" />
          </div>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Page1;
