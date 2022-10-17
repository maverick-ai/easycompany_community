import React from "react";
import { Row} from "react-bootstrap";
import sy from "./second_last.module.css";

function SecondLast() {
  return( <React.Fragment>
    <Row className={sy.pageContainer}>
          <div>
            <div
              className={sy.headingContainer}
            >
              <span className={sy.heading2last}>
                With <span className={sy.heading2lastspan}>Easycommunity</span>,
                you get to:
                <span>
                  <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/camImg.png" className={sy.camImg} />
                </span>
              </span>
            </div>
            <div className={sy.listItemsContainer}>
              <ul className={sy.points}>
                <li className={sy.Li}>
                  <div className={sy.round} />
                  <div className={sy.vr} />
                  <div>
                    Know exclusive details of travel locations from our network.
                  </div>
                </li>
                <li className={sy.Li}>
                  <div className={sy.round} />
                  <div className={sy.vr} />
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
