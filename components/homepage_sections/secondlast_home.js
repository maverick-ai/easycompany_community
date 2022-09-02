import React from "react";
import { Row} from "react-bootstrap";
import sy from "./second_last.module.css";

function SecondLast() {
  return( <React.Fragment>
    <Row style={{ margin: " 15% 0 0 0" }}>
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
                  <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/camImg.png" className={sy.camImg} />
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
  </React.Fragment>);
}

export default SecondLast;
