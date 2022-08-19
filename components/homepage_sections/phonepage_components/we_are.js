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
          <span className={styles.love1}>EASYCOMMUNITY</span>
          <span>
            <img src="photos/sglobe.svg" className={styles.sglobe} />
          </span>
        </h1>

        <Row
          style={{ marginTop: "10%", position: "relative" }}
          className={styles.rowdest}
        >
          <div style={{ position: "absolute", top: "150px" }}>
            <img src="photos/cenplane.svg" style={{ width: "79px" }} />
          </div>
          <DestCard
            img1="photos/dest1.png"
            para="We connect people who have questions about travel with people who have travelled enough to answer them all."
          />
          <DestCard
            img1="photos/dest2.png"
            para="We connect people who have questions about travel with people who have travelled enough to answer them all."
          />

          <DestCard
            img1="photos/dest3.png"
            para="We connect people who have questions about travel with people who have travelled enough to answer them all."
          />
          <DestCard
            img1="photos/dest4.png"
            para="We connect people who have questions about travel with people who have travelled enough to answer them all."
          />
          <div style={{ position: "relative", width: "100%", marginTop: "7%" }}>
            <img
              src="photos/bgpic.svg"
              style={{
                position: "absolute",
                width: "100%",
                bottom: "0",
                left: "0",
                zIndex: "0",
              }}
            />
          </div>
        </Row>
      </div>
    </Row>
  );
}
export default We_are;
