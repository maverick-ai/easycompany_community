import React from "react";
import { Row} from "react-bootstrap";
import FooterToolbar from "../FooterToolbar";
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
        <div style={{ marginTop: '40px' }}>
          <FooterToolbar />
        </div>

  </React.Fragment>;
}

export default LastPage;
