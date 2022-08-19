import React from "react";
import styles from "../../../styles/Homepage/mobileCSS/section1.module.scss";

function Section1() {
  return (
    <div>
        <div>
          <h1 className={styles.text1}>
            FIND THE BEST<span><img className={styles.paperPlane} src="phone_assets/paperplaneHomepage.png"/></span>
            <br/>
            <div style={{ position: "relative", display: "inline" }}>
              <span className={styles.answers}>ANSWERS</span>
              <img
                src="phone_assets/underline.png"
                className={styles.underline}
              ></img>
            </div>{" "}
            
            TO ALL YOUR TRAVEL QUESTIONS!
          </h1>
          
              <button className={styles.join}>
                <img src="phone_assets/Vector.png" className={styles.vector}></img>
                <img src="phone_assets/Group11.png" className={styles.Group11}></img>
                <p className={styles.joinText}>JOIN THE COMMUNITY</p>
              </button>
       
        </div>
        <div style={{ textAlign: "center" }}>
          <img src="phone_assets/landingpage_main.png" className={styles.mainImg}></img>
        </div>
      </div>
  );
}

export default Section1;
