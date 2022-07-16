import { Row, Col } from "react-bootstrap";
import styles from "../styles/Questions.module.scss";

function Question_img() {
  return (
    <Row>
      <Col>
        <div className={styles.emptybox}></div>
      </Col>
    </Row>
  );
}
export default Question_img;
