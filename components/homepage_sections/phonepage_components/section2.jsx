import React from "react";
import styles from "../../../styles/Homepage/mobileCSS/section2.module.scss";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
// import Carousel_2 from "./homepage_sections/phonepage_components/carousel_2";


function Section2() {
    return <Row style={{ marginBottom: "5%" }}>
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

        {/* <Carousel_2 /> */}
    </Row>
}

export default Section2;