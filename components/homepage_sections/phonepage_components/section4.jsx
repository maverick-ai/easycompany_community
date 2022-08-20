import React from "react";
import styles from "../../../styles/Homepage/mobileCSS/section4.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";


function Section4() {
    return (
        <div className={styles.Section4Parent}>
            <div className={styles.Section4FlexDiv}>
            <h2 className={styles.fontstyleouter}>
              <span className={styles.fontstyleinner}>Easycommunity</span>  <br />
              has answers to all<br /> of your questions! <br />
              And if it doesn't yet? Well,
              <br />
              <span className={styles.fontstyleinner}><img src="phone_assets/Section4Suitcase.png" className={styles.suit}/> Just Ask!</span>
            </h2>
            </div>
            <div className={styles.Section4FlexDiv}>
            <img src="phone_assets/bigglobe.png" className={styles.globe}/>
            </div>
        </div>
    );
  }



export default Section4;
