import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "../../styles/Questions.module.scss";
import Image from "next/image";

import { Container, Col, Row } from "react-bootstrap";
import React from "react";

const QuestionBox = (props) => {
  const string = props.postByUser;
  const regex = new RegExp(
    "![[a-zA-Z]+][a-zA-Z0-9\\(\\)\\.\\:\\/\\_\\-\\@\\%]+"
  );
  const regex2 = new RegExp("\\*|#", "g");

  const newStr1 = string.replace(regex, "");
  var newStr = newStr1.replace(regex2, "");
  console.log(newStr);

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
          <span>
            {newStr.length > 150 ? newStr.substring(0, 150) + " ..." : newStr}
          </span>
        </div>
        <div style={{ width: "90%", height: "40px", marginTop: "auto" }}>
          {props.categoryOfThePost.map(({ categoryForPost }) => {
            return <span className={styles.tags}>{categoryForPost}</span>;
          })}
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
