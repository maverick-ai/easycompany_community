import React from "react";
import styles from "../../../styles/phonestyle.module.scss";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Phone4() {
  return (
    <React.Fragment>
      <Col lg={6} md={6} sm={6} xs={6}>
        <Row>
          <div className={styles.outer}>
            <p className={styles.fontstyleouter}>
              <span className={styles.fontstyleinner}>Easycommunity</span> has
              answers to all of your questions! <br />
              And if it doesn't yet ? Well,
              <br />
              <span className={styles.fontstyleinner}> Just Ask!</span>
            </p>
            <img src="photos/suitec.svg" className={styles.suit}></img>
          </div>
        </Row>
      </Col>
      <Col lg={6} md={6} sm={6} xs={6}>
        <img src="photos/bigglobe.svg" className={styles.globe}></img>
      </Col>
    </React.Fragment>
  );
}

export default Phone4;
