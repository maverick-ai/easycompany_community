import React from "react";
import styles from "../../../styles/Homepage/mobileCSS/section3Photos.module.scss";

function Section3Photos() {
  return (
    <div className={styles.Section3PhotosDiv}>
          <div className={styles.carddiv}>
             <img src="phone_assets/Section3Aeroplane.png" className={styles.plane} />
            <img src="phone_assets/Section3Photo1.png"/>
            <div
              className={styles.Section3PhotosTextComponent}
            >
                <div className={styles.ques}>
                <img src="phone_assets/tri.svg" className={styles.tri} />
                  <p className={styles.questext}>
                    Solo or Budget?Need advice
                  </p>
              </div>
            </div>
          </div>
          <div className={styles.carddiv}>
            <img src="phone_assets/Section3Photo2.png"/>
            <div
              className={styles.Section3PhotosTextComponent}
            >
                <div className={styles.ques}>
                <img src="phone_assets/tri.svg" className={styles.tri} />
                  <p className={styles.questext}>
                  Planning a trip to somewhere?
                  </p>
              </div>
            </div>
          </div>
          <div className={styles.carddiv}>
             <img src="phone_assets/Section3Bag.png" className={styles.bag}/>
            <img src="phone_assets/Section3Photo3.png"/>
            <div
              className={styles.Section3PhotosTextComponent}
            >
                <div className={styles.ques}>
                <img src="phone_assets/tri.svg" className={styles.tri} />
                  <p className={styles.questext}>
                  Looking for help, info, review ?
                  </p>
              </div>
            </div>
          </div>
    </div>
  );
}

export default Section3Photos;
