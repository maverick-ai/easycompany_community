import React from 'react';
import styles from "../../../styles/Homepage/mobileCSS/section3content.module.scss";

function PhotosNew(){
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageContainer}>
                <div className={styles.imgSection1Container}>
                    <div className={styles.PhotosDiv1}> 
                        <img src="phone_assets/suitcase1.png" className={styles.suitcase}></img>
                        <img src="phone_assets/section3img1.png" className={styles.mainImg1}></img>
                        <span className={styles.text1}>Solo or in a group?  Need advice?</span>
                        <img src="phone_assets/collage1.png" className={styles.collage}></img>
                        <img src="phone_assets/globephone1.png" className={styles.globephone}></img>
                    </div>
                </div>
                <div className={styles.imgSection2Container}>
                    <div className={styles.PhotosDiv2}>
                        <img src="phone_assets/section3img2.png" className={styles.mainImg1}></img>
                        <span className={styles.text2}>Looking for recommendations?</span>
                        <img src="phone_assets/hotairballoon1.png" className={styles.hotairballoon}></img>
                        <img src="phone_assets/airplane.png" className={styles.airplane}></img>
                    </div>
                </div>
                <div className={styles.imgSection3Container}>
                    <div className={styles.PhotosDiv3}>
                        <img src="phone_assets/section3img3.png" className={styles.mainImg1}></img>
                        <span className={styles.text3}>Planning a trip to somewhere new? </span>
                        <img src="phone_assets/travelbook1.png" className={styles.travelbook}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotosNew;