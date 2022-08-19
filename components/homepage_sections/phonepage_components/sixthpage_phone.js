import React from "react";
import styles from "../../../styles/phonestyle.module.scss";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Phone6() {
  return (
    <React.Fragment>
      <Col lg={5}>
        <Row style={{ height: "300px" }}>
          <div style={{ position: "relative" }}>
            <img src="photos/travel.svg" className={styles.travel}></img>
            <div style={{ position: "absolute" }}>
              <img src="photos/sun1.svg" className={styles.sun1}></img>
            </div>
            <div style={{ position: "absolute" }}>
              <img src="photos/sun2.svg" className={styles.sun2}></img>
            </div>
            <div style={{ position: "absolute" }}>
              <img src="photos/sun4.svg" className={styles.sun4}></img>
            </div>
            <div style={{ position: "absolute" }}>
              <img src="photos/sun3.svg" className={styles.sun3}></img>

              <img src="photos/world.svg" className={styles.world}></img>
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
            <img
              src="photos/globemaster.png"
              className={styles.globemaster}
            ></img>
          </Col>
        </Row>
        <Row>
          <div>
            <span className={styles.dot}></span>
            <img src="photos/Line3.png" className={styles.line3}></img>
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
