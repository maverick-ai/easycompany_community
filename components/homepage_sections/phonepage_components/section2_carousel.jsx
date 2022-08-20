import React from "react";
import styles from "../../../styles/Homepage/mobileCSS/section2Carousel.module.scss";
import Marquee from "react-fast-marquee";


function Section2Carousel() {
    return (
        <div>
            <Marquee loop={0} gradient={false} >
                <img src="phone_assets/Section21.png" className={styles.Section2AnitmationImages} />
                <img src="phone_assets/Section22.png" className={styles.Section2AnitmationImages} />
                <img src="phone_assets/Section23.png" className={styles.Section2AnitmationImages} />
                <img src="phone_assets/Section24.png" className={styles.Section2AnitmationImages} />
            </Marquee>
        </div>
    );
}

export default Section2Carousel;