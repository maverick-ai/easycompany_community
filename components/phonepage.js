import React from "react";
import styles from "../styles/phonestyle.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DestCard from "./destcard";
import "react-multi-carousel/lib/styles.css";
import Carousel_row from "./homepage_sections/phonepage_components/carousel _row";


import Section1 from "./homepage_sections/phonepage_components/section1";
import Section2 from "./homepage_sections/phonepage_components/section2";
import Section3 from "./homepage_sections/phonepage_components/section3";
import Section4 from "./homepage_sections/phonepage_components/section4";
import Phone6 from "./homepage_sections/phonepage_components/sixthpage_phone";
import Phone7 from "./homepage_sections/phonepage_components/seventhpage_phone";
import We_are from "./homepage_sections/phonepage_components/we_are";

function Page2() {
  return (
    <div>
      <Container>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Carousel_row />
        <We_are />
        <Row>
          <Phone6 />
        </Row>
        <div>
          <div style={{ position: "relative", height: "150px" }}>
            <img src="photos/polar1.png" className={styles.polar1}></img>

            <img src="photos/polar2.png" className={styles.polar2}></img>

            <img src="photos/polar3.png" className={styles.polar3}></img>

            <img src="photos/polar4.png" className={styles.polar4}></img>
          </div>
        </div>
        <Row>
          <Col sm={10} xs={10}>
            <div className={styles.white}>
              <p className={styles.whitep}>
                <span className={styles.whites}>Easycommunity</span> offers a
                vast collection of travel-related questions and answers.
                Improvise your dream trip by asking us your queries about new
                and offbeat places, food recommendations, or anything else. Find
                the best answer to your travel questions or help others get
                their questions answered!
              </p>

              <img
                src="photos/hotAirBalloon.png"
                className={styles.hotAirBalloon}
              ></img>
            </div>
          </Col>
        </Row>
        <Phone7 />
      </Container>
    </div>

    // <div className={s.page}>

    // </div>
  );
}

export default Page2;
