import styles from "../../styles/profile.module.css";
import { Col, Row } from "react-bootstrap";

function Bookmark() {
  return (
    <Col styles={{ paddingLeft: "50px" }}>
      <div className={styles.medalbox} style={{ padding: "70px" }}>
        <div style={{ display: "flex" }}>
          <div>lorem ipsum lorem?</div>
          <img
            src="/bookmark.svg"
            alt=""
            style={{ marginLeft: "auto", marginRight: "15%" }}
          />
        </div>
      </div>
    </Col>
  );
}

export default Bookmark;
