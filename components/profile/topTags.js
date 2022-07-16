import styles from "../../styles/profile.module.css";
import { Col, Row } from "react-bootstrap";

function TopTags() {
  return (
    <Col>
      <div className={styles.medalbox1}>
        <div className={styles.chart}>{/* <Line data={newUser} /> */}</div>
        <Row style={{ width: "70%", margin: "0 auto" }}>
          <div
            style={{
              marginTop: "25px",
              width: "50%",
              textAlign: "center",
            }}
          >
            <span
              style={{
                padding: "10px",
                fontSize: "24px",
                fontFamily: "Poppins",
              }}
            >
              12
            </span>
            <div className={styles.chartBox}>
              <span>+12</span>
            </div>
          </div>
          <div
            style={{
              marginTop: "25px",
              width: "50%",
              textAlign: "center",
            }}
          >
            <span
              style={{
                padding: "10px",
                fontSize: "24px",
                fontFamily: "Poppins",
              }}
            >
              Top Tags
            </span>
            <div
              style={{
                width: "90px",
                height: "24px",
                borderRadius: "12px",
                backgroundColor: "#121212",
                textAlign: "center",
                margin: "auto",
                marginTop: "10px",
                fontFamily: "Poppins",
              }}
            >
              <span>+12</span>
            </div>
          </div>
        </Row>
      </div>
    </Col>
  );
}
export default TopTags;
