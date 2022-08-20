import React from "react";
import styles from "../../../styles/Homepage/mobileCSS/section3Photos.module.scss";


function Section3PhotosComponent(props) {
  return (
      <div className={styles.Section4CardImageDiv}>
        <img src={props.imgSrc} className={styles.Section4CardImage} />
          <div className={styles.Section4CardImageSubDiv}>
            <p className={styles.quesText}>
            {props.text}
            </p>
          </div>
      </div>
  );
}

export default Section3PhotosComponent;
