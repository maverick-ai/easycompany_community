import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "../../styles/Questions.module.scss";
import Image from "next/image";

import { Container, Col, Row } from "react-bootstrap";
import React from "react";

const QuestionBox = (props) => {
  console.log(props.data);
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className={styles.qtitle}>
          <Link href={`/posts/?postid=${props.data.pk}&page=1`}>
            {props.data.title.length > 60
              ? props.data.title.substring(0, 60) + " ..."
              : props.data.title}
          </Link>
        </div>
        <div className={styles.timer}>
          <div className={styles.timerImage}>
            <Image
              quality={100}
              src="/av_timer.png"
              height={15}
              width={15}
            ></Image>
          </div>
          <p className={styles.timerP}>1 Hour</p>
        </div>
        <div className={styles.para}>
          <p>
            {props.postByUser.length > 150
              ? props.postByUser.substring(0, 150) + " ..."
              : props.postByUser}
          </p>
        </div>

        <Row className={styles.buttonRow}>
          <Col>
            <div
              style={{ backgroundColor: "#121212" }}
              className={styles.button1}
            >
              <div className={`${styles.votebox} ${styles.listItem}`}>
                <span>{props.upVoteNumber - props.downVoteNumber} Votes </span>
              </div>
            </div>
          </Col>
          <Col>
            <div
              className={styles.button1}
              style={{ backgroundColor: "#121212" }}
            >
              <div className={`${styles.votebox} ${styles.listItem}`}>
                <span>1 Answer</span>{" "}
                <img src="/icons/answer.svg" alt="answer icon" />
              </div>
            </div>
          </Col>
          <Col>
            <div
              className={styles.button1}
              style={{ backgroundColor: "#121212" }}
            >
              <div className={`${styles.votebox} ${styles.listItem}`}>
                {props.viewsbytheuser}{" "}
                <img src="/icons/eye.svg" alt="eye icon" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default QuestionBox;
