import styles from './FooterToolbar.module.css';
import { Container, Col, Row } from "react-bootstrap";

function FooterToolbar(){
    return (
        <div className={styles.FooterBar}>
          <Row>
            <div className={styles.globeImgDiv} >
            <img className={styles.globeImg} src="./globe.png"></img>
            </div>
        </Row>

          <Row style={{ textAlign: "center", margin: "3% 0" }}>
          <div style={{ position: "relative" }}>
            <span className={styles.bottomText}><span><img src='footerfollow.png' className={styles.footerimage2}/></span>FOLLOW</span>
            <span className={styles.bottomText}>HELP</span>
            <span className={styles.bottomText}>CONTACT</span>
            <span className={styles.bottomText}>ABOUT US</span>
          </div>
        </Row>

        <Row>
          <div style={{ textAlign: "center" }}>
            <img src="desktopHome/logo.png" style={{width:"calc(100vw * (376/1728)"}}/>
          </div>
        </Row>  
        
        
        </div>
    );
}

export default FooterToolbar;