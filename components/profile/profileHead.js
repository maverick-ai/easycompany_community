import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Profile.module.css";

function ProfileHead(props) {
  return (
    <Row>
      <div className={styles.emptybox1} />
      <Col>
        <Row className={styles.nameRow}>
          <span className={styles.name}>
            {props.userData.first_name} {props.userData.last_name}
          </span>
        </Row>
        <Row className={styles.middleRow}>
          <Col>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className={styles.imgWrap}>
                <Image
                  src="/smalliconprofile.svg"
                  height={20}
                  width={20.55}
                  quality={100}
                />
              </div>

              <div style={{ marginBottom: "3px" }}>
                <span>member since {props.dateJoined}</span>
              </div>
            </div>
          </Col>
          <Col>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className={styles.imgWrap}>
                <Image
                  src="/smalliconprofile.svg"
                  height={20}
                  width={20.55}
                  quality={100}
                />
              </div>

              <div style={{ marginBottom: "3px" }}>
                <span>{props.lastSeen}</span>
              </div>
            </div>
          </Col>
          <Col>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className={styles.imgWrap}>
                <Image
                  src="/smalliconprofile.svg"
                  height={20}
                  width={20.55}
                  quality={100}
                />
              </div>

              <div style={{ marginBottom: "3px" }}>
                <span>member since may 10th</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row className={styles.middleRow}>
          <div className={styles.button1}>
            <button className={styles.buttonEdit}>Edit Profile</button>
          </div>
        </Row>
      </Col>
    </Row>
  );
}

export default ProfileHead;
