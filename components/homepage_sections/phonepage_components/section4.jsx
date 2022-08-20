import React from "react";
import styles from "../../../styles/Homepage/mobileCSS/section4.module.scss";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// function Section4() {
//   return (
//     <Row>
//       <Col>
//         <Row>
//           <div className={styles.outer}>
//             <p className={styles.fontstyleouter}>
//               <span className={styles.fontstyleinner}>Easycommunity</span> has
//               answers to all of your questions! <br />
//               And if it doesn't yet ? Well,
//               <br />
//               <span className={styles.fontstyleinner}> Just Ask!</span>
//             </p>
//             <img src="photos/suitec.svg" className={styles.suit}></img>
//           </div>
//         </Row>
//       </Col>
//       <Col >
//         <img src="photos/bigglobe.svg" className={styles.globe}></img>
//       </Col>
//     </Row>
//   );
// }

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
