import React from "react";
import styles from "../../../styles/phonestyle.module.scss";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Phone6() {
  return (
    <React.Fragment>
      <Col lg={5}>
        <Row style={{ height: "240px" }} className={styles.row1}>
          <div style={{ position: "relative", marginBottom:'40px' }}>
              <img src="phone_assets/travel.png" className={styles.travel}></img>
            <div style={{ position: "absolute" }}>
              <img src="phone_assets/sun1.png" className={styles.sun1}></img>
            </div>
            <div style={{ position: "absolute" }}>
              <img src="phone_assets/sun2.png" className={styles.sun2}></img>
            </div>
            <div style={{ position: "absolute" }}>
              <img src="phone_assets/sun3.png" className={styles.sun4}></img>
            </div>
            <div style={{ position: "absolute" }}>
              <img src="phone_assets/sun4.png" className={styles.sun3}></img>
              <img src="phone_assets/world.png" className={styles.world}></img>
            </div>
          </div>
        </Row>
        <Row>
          <Col sm={8} xs={8}>
            <div>
              <p className={styles.bigplace}>
                The world is a big place, we're trying to bring it within your{" "}
                <span className={styles.fontstyleinner}>reach</span>
              </p>
            </div>
          </Col>
          <Col sm={4} xs={4}>
            <div>
              <div style={{position: 'relative'}}>
            <img
              src="phone_assets/globemaster.png"
              className={styles.globemaster}
            ></img>
            </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div>
            <div style={{position: 'relative'}}>
              <span className={styles.dot}></span>
              <img src="phone_assets/triangle.png" className={styles.triangle}></img>
              <img src="phone_assets/line3.png" className={styles.line3}></img>
            </div>
          </div>
        </Row>
        <Row>
          <div>
            <p className={styles.bigplace}>
              Post a query about anything you need help with about your trip -
              where to stay, what to do, where to eat, what to pack, how much
              cash you need, how to get around the city, anything!
              <span className={styles.fontstyleinner}> Easycommunity</span> will
              answers
            </p>
          </div>
        </Row>
      </Col>
    </React.Fragment>
  );
}

export default Phone6;
