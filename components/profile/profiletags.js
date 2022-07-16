import styles from "../../styles/Profile.module.css";
import { Col, Row } from "react-bootstrap";

function TagsProfile() {
  return (
    <Col styles={{ paddingLeft: "50px" }}>
      <div className={styles.medalbox}>
        <Row
          style={{
            width: "70%",
            margin: "0 auto",
            paddingTop: "7%",
          }}
        >
          <div style={{ display: "flex", marginTop: "10%" }}>
            <div
              style={{
                width: "90px",
                height: "24px",
                borderRadius: "12px",
                backgroundColor: "#121212",
                textAlign: "center",
                margin: "auto",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  margin: "auto",
                  fontFamily: "Poppins",
                }}
              >
                tagss
              </span>
            </div>
            <div style={{ width: "40%", height: "100%" }}></div>

            <div style={{ display: "flex", fontFamily: "Poppins" }}>
              <h3
                style={{
                  fontsize: "16px",
                  margin: "auto 20px auto 0",
                }}
              >
                score
              </h3>{" "}
              <div className={styles.gradientText}>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    margin: "auto",
                    paddingTop: "5px",
                  }}
                >
                  88
                </h3>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </Col>
  );
}
export default TagsProfile;
