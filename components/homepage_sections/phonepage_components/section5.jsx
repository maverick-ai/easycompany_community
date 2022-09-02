import React from "react";
import styles from "../../../styles/phonestyle.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function Section5() {
  return (

        <div
          style={{
            textAlign: "center",
            position: "relative",
            marginTop: "8%",
            height: "300px",
          }}
        >
          {/* <img src="/mapp.svg" className={styles.mapp} /> */}
          {/* <img
            src="/arrorrr.svg"
            className={s.arorrr}
            style={{ position: "absolute" }}
          /> */}
          <span className={styles.love1}>
            <span>
              <img
                src="photos/arrorrr.svg"
                className={styles.arorrr}
                style={{ position: "absolute" }}
              />
            </span>
            Who Are We?
          </span>
          <div className={styles.horzrule} />
          <div style={{ width: "100%", height: "130px" }}>
            <Carousel
              controls={false}
              indicators={false}
              touch={true}
              interval={3000}
            >
              <Carousel.Item>
                <div className={styles.whop}>
                  <p>
                    A free digital space where hundreds of thousands of people
                    can share their knowledge about travel and tourism in an
                    open forum.
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className={styles.whop}>
                  <p>
                    At Easycommunity, we believe you should see as much of the
                    world as possible. Easycommunity is building a digital space
                    to find and contribute answers regarding travel and tourism.
                  </p>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className={styles.whop}>
                  <p>
                    You might not be able to get your mom on the phone to know
                    what to pack, but there's another way to find trusted
                    answers before your trip: from Easycommunity.
                  </p>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div
            className={styles.horzrule}
            style={{ margin: "0 0 10px 19px" }}
          />
          <img src="photos/sunb.svg" className={styles.sunb} />
          <img src="photos/maop.svg" className={styles.maop} />
        </div>
  );
}

export default Section5;
