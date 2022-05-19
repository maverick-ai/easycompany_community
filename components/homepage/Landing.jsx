import { Row, Col, Container } from "react-bootstrap";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <>
      <Row style={{ backgroundColor: "black" }}>

        <Col>
          <div className={styles.showcase}>
            <div className= {styles.col1}>
              <div className =  {`${styles.showcase_cards} ${styles.card1}`}></div>
              <div className =  {`${styles.showcase_cards} ${styles.card2}`}></div>
            </div>
            <div className= {styles.col2}>
            <div className = {`${styles.showcase_cards} ${styles.card3}`}> </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className={styles.content_wrapper}>
            <div className={styles.content}>
              <h1>Simplify your travel like never before.</h1>
              <p>
                Planning a trip to somewhere new? Solo or in a group? Looking
                for recommendations? Need advice?
              </p>
              <button className={styles.btn}>Get Started</button>
            </div>
          </div>
        </Col>

      </Row>
    </>
  );
}
