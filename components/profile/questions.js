import styles from "../../styles/Profile.module.css";
import { Col } from "react-bootstrap";

function QuestionProfile() {
  return (
    <Col>
      <div className={styles.medalbox1} style={{ padding: "39px 19px 49px" }}>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <div className={styles.smallBox} />
          <div style={{ margin: "10px auto 0" }}>
            <p>description description descrip</p>
          </div>
          <div style={{ marginTop: "10px", marginLeft: "auto" }}>
            <p>date dd/mm/yyyy</p>
          </div>
        </div>

        <div style={{ display: "flex", marginBottom: "10px" }}>
          <div className={styles.smallBox} />
          <div style={{ margin: "10px auto 0" }}>
            <p>description description descrip</p>
          </div>
          <div style={{ marginTop: "10px", marginLeft: "auto" }}>
            <p>date dd/mm/yyyy</p>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default QuestionProfile;
