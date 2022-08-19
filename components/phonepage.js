import React from "react";
import styles from "../styles/phonestyle.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Carousel } from "react-responsive-carousel";

import DestCard from "./destcard";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Carousel_row from "./homepage_sections/phonepage_components/carousel _row";

import Phone1 from "./homepage_sections/phonepage_components/firstpage_phone";
import Phone3 from "./homepage_sections/phonepage_components/thirdpage_phone";
import Phone4 from "./homepage_sections/phonepage_components/fourthpage_phone";
import Phone6 from "./homepage_sections/phonepage_components/sixthpage_phone";
import Phone7 from "./homepage_sections/phonepage_components/seventhpage_phone";
import Carousel_2 from "./homepage_sections/phonepage_components/carousel_2";
import We_are from "./homepage_sections/phonepage_components/we_are";
// import Slider from "react-slick";
// import Carousel from "react-bootstrap/Carousel";

function Page2() {
  return (
    <Container>
      <Row style={{ minHeight: "100vh" }}>
        <Phone1 />
      </Row>
      {/* -------------------------------------------second page ----------------------------------------------------- */}
      <Row style={{ marginBottom: "5%" }}>
        <Col xl={5} style={{ padding: "0 20px" }}>
          <div>
            <span className={styles.p3h}>
              Simplify your <span className={styles.love}>travel</span> like{" "}
              <br /> never before.
            </span>
            <div className={styles.p2div}>
              <p className={styles.p2}>
                Planning a trip to somewhere new? Solo or in a group? Looking
                for recommendations? Need advice? Whether you're trying to
                figure out which city in Italy has the best gelato or how to pay
                for your hostel stay in New Zealand.
              </p>
            </div>
          </div>
        </Col>

        <Carousel_2 />
      </Row>
      {/* -----------------------------------third page-------------------------------------------------------- */}
      <Row>
        <Phone3 />
      </Row>
      {/* Globe */}
      <Row>
        <Phone4 />
      </Row>
      {/* who are we */}
      <Carousel_row />
      <We_are />
      {/* Travel World */}
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
              <span className={styles.whites}>Easycommunity</span> offers a vast
              collection of travel-related questions and answers. Improvise your
              dream trip by asking us your queries about new and offbeat places,
              food recommendations, or anything else. Find the best answer to
              your travel questions or help others get their questions answered!
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

    // <div className={s.page}>

    // </div>
  );
}

export default Page2;
