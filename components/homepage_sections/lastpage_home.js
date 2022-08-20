import React from "react";
import { Row} from "react-bootstrap";
import sy from "./last_page.module.css";

function LastPage() {
  return <React.Fragment>
    <Row style={{ margin: " 8% 0 0 0" }}>
          <div style={{ textAlign: "center" }}>
            <span className={sy.headingLast}>
              <span style={{ position: "relative" }}>
                <span>
                  <img src="desktopHome/pin.png" className={sy.pin} />
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
                  <img src="desktopHome/globe2.png" className={sy.globe2} />
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
            <img src="desktopHome/lastGlobe.png" className={sy.lastGlobe}></img>
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
            <img src="desktopHome/logo.png" style={{width:"376px"}}/>
          </div>
        </Row>
  </React.Fragment>;
}

export default LastPage;
