import React from "react";
import styles from "../../../styles/phonestyle.module.scss";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DestCard from "../../destcard";

function We_are() {
  return (
    <Row>
      <div
        style={{
          position: "relative",
          marginTop: "11%",
          textAlign: "center",
        }}
      >
        <h1 className={styles.headeasy}>
          WE ARE <br />
          <span className={styles.love2}>EASYCOMMUNITY</span>
        </h1>
        <span>
          <img src="phone_assets/sglobe.png" className={styles.sglobe} />
        </span>
        <Row
          style={{ margin: "10% auto 0", position: "relative" }}
          className={styles.rowdest}
        >
          <Row>
            <div>
            <DestCard
              img1="phone_assets/dest1.png"
              para="We connect people who have questions about travel with people who have travelled enough to answer them all."
            />
            </div>
          </Row>
          
          <Row>
          <DestCard
            img1="phone_assets/dest2.png"
            para="We connect people who have questions about travel with people who have travelled enough to answer them all."
          />
          </Row>

          <Row>
          <DestCard
            img1="phone_assets/dest3.png"
            para="We connect people who have questions about travel with people who have travelled enough to answer them all."
            />
          </Row>

          <Row>
          <DestCard
            img1="phone_assets/dest4.png"
            para="We connect people who have questions about travel with people who have travelled enough to answer them all."
          />
          </Row>

          <div style={{ position: "relative", width: "100%!important", margin: "7% 7% 7% 0%" }}>
            <img
              src="phone_assets/bgpic.png"
              style={{
                position: "absolute",
                width: "calc(100vw * (400/390))",
                bottom: "-15px",
                left: "0",
                zIndex: "0",
                marginLeft: '-20px',
                marginRight: '-20px'
              }}
            />
          </div>
        </Row>
      </div>
    </Row>
  );
}
export default We_are;
