import React from "react";
import styles from "../../../styles/Homepage/mobileCSS/section3.module.scss";
import Section3Photos from "./section3_photos";

function Section3() {
  return (
    <div className={styles.Section3Div}>
      <div className={styles.Section3HeadingDiv}>
        <h2 className={styles.p3h}>
          <img
            src="phone_assets/Section3Compass.png"
            className={styles.compass}
          />
          Welcome to the <br />
          <span className={styles.love}>Most lovable</span> travel
          <br />
          community!
          <img src="phone_assets/Section3Plane.png" className={styles.arrl} />
        </h2>
      </div>
      <Section3Photos />
    </div>
  );
}

export default Section3;
