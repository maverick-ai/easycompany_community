import React from "react";
import { Row} from "react-bootstrap";
import FooterToolbar from "../FooterToolbar";
import sy from "./last_page.module.css";

function LastPage() {
  return <React.Fragment>
    <Row className={sy.pageContainer}>
          <div className={sy.section1}>
            <span className={sy.headingLast}>
              <span className={sy.headingSection}>
                <span>
                  <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/pin.png" className={sy.pin} />
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
                  <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/globe2.png" className={sy.globe2} />
                </span>
              </span>
            </span>
          </div>
        </Row>
        <Row>
          <div className={sy.footerSection}>
            <button className={sy.JoinUs}>JOIN US</button>
          </div>
        </Row>
        <div className={sy.footer}>
          <FooterToolbar />
        </div>

  </React.Fragment>;
}

export default LastPage;
