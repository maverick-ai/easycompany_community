import Link from "next/link";
import styles from "../../styles/Questions.module.scss";
import Image from "next/image";

import { Col, Row } from "react-bootstrap";
import React from "react";
import { useMemo } from "react";


const QuestionBox = (props) => {



  const newStr = useMemo(() => {
    const regex = new RegExp(
      "![[a-zA-Z]+][a-zA-Z0-9\\(\\)\\.\\:\\/\\_\\-\\@\\%]+"
    );
    const regex2 = new RegExp("\\*|#", "g");
    const newStr1 = props.postByUser.replace(regex, "");
    var finalString = newStr1.replace(regex2, "");
    return finalString;
  }, [props.postByUser]);
  const createdTime = useMemo(() => {
    var Date_A = new Date(props.data.time);
    var DateA = Date_A.getTime();
    const DateB = new Date();
    var finalFlash = DateB - DateA;
    let minute = Math.floor(finalFlash / 60000);

  let hours = Math.floor(minute / 60);

  let newminute = minute - hours * 60;

  let days = Math.floor(hours / 24);
  let newhour = hours - days * 24;
  let newday = Math.floor(days % 30);
  let month = Math.floor(days / 30);
  let year = Math.floor(month / 12);

  if(year){
    return year + " years";
  }
  else if(month){
    return month + " months";
  }
  else if(newday){
    return newday + " days";
  }
  else if(newhour){
    return newhour + " hours";
  }
  else{
    return newminute + " minutes";
  }
  }, [props.data.time]);



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
            <p className={styles.timerP}>{createdTime}
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
                    <span className={styles.number}>{props.upVoteNumber - props.downVoteNumber}</span> Votes{" "}
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
                  <span className={styles.number}>{props.data.numberOfSolutions} answer</span>{" "}
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
                  <span className={styles.number}>{props.viewsbytheuser}{" "}</span>
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
