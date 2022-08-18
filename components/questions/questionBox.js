import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "../../styles/Questions.module.scss";
import Image from "next/image";

import { Container, Col, Row } from "react-bootstrap";
import React from "react";
import * as dateMath from "date-arithmetic";
import moment from "moment";

const QuestionBox = (props) => {
  const string = props.postByUser;
  console.log(props, "8------D  =>  [{|}]", string);
  const regex = new RegExp(
    "![[a-zA-Z]+][a-zA-Z0-9\\(\\)\\.\\:\\/\\_\\-\\@\\%]+"
  );
  const regex2 = new RegExp("\\*|#", "g");

  const newStr1 = string.replace(regex, "");
  var newStr = newStr1.replace(regex2, "");
  var Date_A = new Date(props.data.time);

  var DateA = Date_A.getTime();
  const DateB = new Date();

  var finalFlash = DateB - DateA;
  console.log(finalFlash, "--------------->>>>>>>>>>>");

  // console.log(newStr);
  let minute = Math.floor(finalFlash / 60000);

  let hours = Math.floor(minute / 60);

  let newminute = minute - hours * 60;

  let days = Math.floor(hours / 24);
  let newhour = hours - days * 24;
  let newday = Math.floor(days % 30);
  let month = Math.floor(days / 30);
  let year = Math.floor(month / 12);

  return (
    <React.Fragment>
      <Link href={`/posts/?postid=${props.data.pk}&page=1`}>
        <div className={styles.wrapper}>
          <div className={styles.qtitle}>
            {props.data.title.length > 60
              ? props.data.title.substring(0, 60) + " ..."
              : props.data.title}
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
            <p className={styles.timerP}>
              {`${year ? year + " years" : ""}` ||
                `${month ? month + " months" : ""}` ||
                `${newday ? newday + " days" : ""}` ||
                `${newhour ? newhour + " hours" : ""}` ||
                `${newminute ? newminute + " minutes" : ""}`}
            </p>
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
                  <span>
                    {props.upVoteNumber - props.downVoteNumber} Votes{" "}
                  </span>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className={styles.button1}
                style={{ backgroundColor: "#121212" }}
              >
                <div className={`${styles.votebox} ${styles.listItem}`}>
                  <span>{props.data.numberOfSolutions} answer</span>{" "}
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
      </Link>
    </React.Fragment>
  );
};

export default QuestionBox;
