import styles from "../../styles/Profile.module.css";
import { Col } from "react-bootstrap";

function Medal2() {
  return (
    <Col>
      <div className={styles.medalbox1}>
        <div
          style={{
            paddingTop: "47px",
            marginRight: "auto",
            marginLeft: "30px",
            display: "flex",
          }}
        >
          <img
            src="/goldmedal.svg"
            alt="medal"
            style={{ width: "51px", height: "35px" }}
          />
          <div style={{ padding: "7px 10px 0" }}>
            <h5 style={{ fontSize: "20px" }}>lorem ipsum</h5>
          </div>
        </div>
      </div>
    </Col>
  );
}
export default Medal2;
