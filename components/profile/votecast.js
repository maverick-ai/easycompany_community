import styles from "../../styles/profile.module.css";
import { Col, Row } from "react-bootstrap";

function VoteCast() {
  return (
    <Col>
      <div className={styles.medalbox1}>
        <div style={{ padding: "50px", display: "flex" }}>
          <div style={{ width: "50%" }}>
            <h2
              style={{
                fontSize: "24px",
                fontFamily: "Poppins",
              }}
            >
              All Time
            </h2>
            <div style={{ display: "flex", margin: "10px 0" }}>
              <div className={styles.gradientText}>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    margin: "auto",
                    paddingTop: "5px",
                  }}
                >
                  226
                </h3>
              </div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  marginLeft: "50px",
                  marginTop: "6px",
                }}
              >
                Up
              </h4>
            </div>
            <div style={{ display: "flex", margin: "10px 0" }}>
              <div className={styles.gradientText}>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    margin: "auto",
                    paddingTop: "5px",
                  }}
                >
                  226
                </h3>
              </div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  marginLeft: "50px",
                  marginTop: "6px",
                }}
              >
                Down
              </h4>
            </div>
            <h2
              style={{
                fontSize: "24px",
                fontFamily: "Poppins",
                marginTop: "20px",
              }}
            >
              Month
            </h2>
            <div style={{ display: "flex", margin: "10px 0" }}>
              <div className={styles.gradientText}>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    margin: "auto",
                    paddingTop: "5px",
                  }}
                >
                  226
                </h3>
              </div>
            </div>
          </div>
          {/* end of first coloumn in votes ----------- */}

          <div style={{ width: "50%", marginLeft: "80px" }}>
            <h2
              style={{
                fontSize: "24px",
                fontFamily: "Poppins",
              }}
            >
              By Type
            </h2>
            <div style={{ display: "flex", margin: "10px 0" }}>
              <div className={styles.gradientText}>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    margin: "auto",
                    paddingTop: "5px",
                  }}
                >
                  226
                </h3>
              </div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  marginLeft: "50px",
                  marginTop: "6px",
                }}
              >
                Questions
              </h4>
            </div>
            <div style={{ display: "flex", margin: "10px 0" }}>
              <div className={styles.gradientText}>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    margin: "auto",
                    paddingTop: "5px",
                  }}
                >
                  226
                </h3>
              </div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  marginLeft: "50px",
                  marginTop: "6px",
                }}
              >
                Answers
              </h4>
            </div>
            <h2
              style={{
                fontSize: "24px",
                fontFamily: "Poppins",
                marginTop: "20px",
              }}
            >
              Days
            </h2>
            <div style={{ display: "flex", margin: "10px 0" }}>
              <div className={styles.gradientText}>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    margin: "auto",
                    paddingTop: "5px",
                  }}
                >
                  22
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default VoteCast;
