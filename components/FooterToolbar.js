import styles from './FooterToolbar.module.scss';
import { Container, Col, Row } from "react-bootstrap";

function FooterToolbar(){
    return (
        <div className={styles.FooterBar}>
          <Row>
            <div className={styles.globeImgDiv} >
            <img className={styles.globeImg} src="./globe.png"></img>
            </div>
        </Row>

          <Row className={styles.footerContentsSection}>
          <div className={styles.footerContentsDiv}>
            <span className={styles.bottomText}><span><img src='footerfollow.png' className={styles.footerimage2}/></span>FOLLOW</span>
            <span className={styles.bottomText}>HELP</span>
            <span className={styles.bottomText}>CONTACT</span>
            <span className={styles.bottomText}>ABOUT US</span>
          </div>
        </Row>

        <Row>
          <div className={styles.footerIcon}>
            <img src="desktopHome/logo.png" className={styles.footerImg}/>
          </div>
        </Row>  
        
        
        </div>
    );
}

export default FooterToolbar;