import React from "react";
import styles from "../../../styles/phonestyle.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function Carousel_row() {
  return (
    <React.Fragment>
      <Row>
        <div
          className={styles.pageContainer}
        >
          {/* <img src="/mapp.svg" className={styles.mapp} /> */}
          {/* <img
            src="/arrorrr.svg"
            className={s.arorrr}
            style={{ position: "absolute" }}
          /> */}
          <div>
          <span className={styles.love1}>
            Who Are We?
            <span>
              <img
                src="phone_assets/arrowplane.png"
                className={styles.arorrr}
              />

            </span>
          </span>
          </div>
          <div className={styles.horzrule} />
          <div className={styles.carosuleDiv}>
            <Carousel
              controls={false}
              indicators={false}
              touch={true}
              interval={5000}
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
            className={styles.bottomHr}
          />
          <img src="phone_assets/sunbeach.png" className={styles.sunb} />
          <img src="phone_assets/map.png" className={styles.maop} />
          <img src="phone_assets/search.png" className={styles.search} />
        </div>
      </Row>
    </React.Fragment>
  );
}

export default Carousel_row;
