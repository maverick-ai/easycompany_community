import React from "react";
import styles from "../../../styles/Homepage/mobileCSS/section1.module.scss";

function Section1() {
  return (
    <div>
        <div>
          <h1 className={styles.text1}>
            FIND THE BEST<span><img className={styles.paperPlane} src="paperplaneHomepage.png"/></span>
            <br/>
            <div style={{ position: "relative", display: "inline" }}>
              <span className={styles.answers}>ANSWERS</span>
              <img
                src="photos/underline.png"
                className={styles.underline}
              ></img>
            </div>{" "}
            
            TO ALL YOUR TRAVEL QUESTIONS!
          </h1>
          
              <button className={styles.join}>
                <img src="photos/Vector.png" className={styles.vector}></img>
                <img src="photos/Group11.png" className={styles.Group11}></img>
                <p className={styles.joinText}>JOIN THE COMMUNITY</p>
              </button>
       
        </div>
        <div style={{ textAlign: "center" }}>
          <img src="photos/Group30.png" className={styles.mainImg}></img>
        </div>
      </div>
  );
}

export default Section1;
