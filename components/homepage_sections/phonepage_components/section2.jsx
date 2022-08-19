import React from "react";
import styles from "../../../styles/Homepage/mobileCSS/section2.module.scss";
import Section2Carousel from "./section2_carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
// import Carousel_2 from "./homepage_sections/phonepage_components/carousel_2";


function Section2() {
    return <div><div className={styles.Section2Div}>
                <h2 className={styles.section2Heading}>
                    Simplify your <span className={styles.love}>travel</span>
                    <br />like never before.<img className={styles.section2headingDoodle} src="phone_assets/section2headingDoodle.png" />
                </h2>
                <div className={styles.p2div}>
                    <p className={styles.p2}>
                        Planning a trip to somewhere new? Solo or in a group? Looking
                        for recommendations? Need advice? Whether you're trying to
                        figure out which city in Italy has the best gelato or how to pay
                        for your hostel stay in New Zealand.
                    </p>
                </div>
    </div>
    <Section2Carousel />
    </div>
}

export default Section2;