import React from "react";
import styles from "../../../styles/Homepage/mobileCSS/section3.module.scss";

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

      {/* photos */}
      <div style={{ margin: "0 auto", width: "300px" }}>
        <div
          style={{
            textAlign: "center",
            marginTop: "2%",
            position: "relative",

            display: "flex",
          }}
        >
          <img src="photos/plane.png" className={styles.plane} />
          <div className={styles.carddiv}>
            <img src="photos/t1.svg" className={styles.card} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                justifySelf: "center",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <div style={{ position: "relative" }}>
                <img src="photos/tri.svg" className={styles.tri} />
                <div className={styles.ques}>
                  <p className={styles.questext}>
                    Solo or in a group? Need advice?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.carddiv}>
            <img src="photos/t2.svg" className={styles.card} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                justifySelf: "center",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <div style={{ position: "relative" }}>
                <img src="photos/tri.svg" className={styles.tri} />
                <div className={styles.ques}>
                  <p className={styles.questext}>
                    Planning a trip to somewhere new?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.carddiv}>
            <img src="photos/t3.svg" className={styles.card} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                justifySelf: "center",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <div style={{ position: "relative" }}>
                <img src="photos/tri.svg" className={styles.tri} />
                <div className={styles.ques}>
                  <p className={styles.questext}>
                    Looking for recommendations?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src="photos/bag1.png" className={styles.bag1}></img>
        </div>
      </div>
    </div>
  );
}

export default Section3;
