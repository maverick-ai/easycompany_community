import React from 'react';
import styles from "../../../styles/Homepage/mobileCSS/section3content.module.scss";

function PhotosNew(){
    return (
        <div style={{marginBottom: '40px'}}>
            <div style={{marginBottom: '40px'}}>
                <div style={{marginBottom: '25px'}}>
                    <div className={styles.PhotosDiv} style={{ height: '160px', marginTop: '30px'}}> 
                        <img src="phone_assets/suitcase1.png" className={styles.suitcase}></img>
                        <img src="phone_assets/section3img1.png" className={styles.mainImg1}></img>
                        <span className={styles.text1}>Solo or in a group?  Need advice?</span>
                        <img src="phone_assets/collage1.png" className={styles.collage}></img>
                        <img src="phone_assets/globephone1.png" className={styles.globephone}></img>
                    </div>
                </div>
                <div style={{marginBottom: '5px'}}>
                    <div className={styles.PhotosDiv} style={{top: '15px', height: '160px'}}>
                        <img src="phone_assets/section3img2.png" className={styles.mainImg1}></img>
                        <span className={styles.text2}>Looking for recommendations?</span>
                        <img src="phone_assets/hotairballoon1.png" className={styles.hotairballoon}></img>
                        <img src="phone_assets/airplane.png" className={styles.airplane}></img>
                    </div>
                </div>
                <div style={{marginBottom: '40px'}}>
                    <div className={styles.PhotosDiv} style={{top: '25px', height: '160px'}}>
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