import styles from "../styles/Questions.module.scss";
import { PostListURL, PageSize } from "../components/constants";
import { Host } from "../components/constants";
import { sendReq } from "../components/requests";
import { Container, Row, Col } from "react-bootstrap";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect, useMemo } from "react";
import Masonry from "react-masonry-component";
import Image from "next/image";
import Link from "next/link";

import Pagination from "../components/Pagination";

const Questions = ({ questions, query }) => {
  console.log(questions.results.data);
  const enterExitStyles = [
    "Simple",
    "Skew",
    "Newspaper",
    "Fold Up",
    "From Center",
    "From Left to Right",
    "From Top",
    "From Bottom",
  ];
  // const [offset, setOffset] = useState(0);
  // const newOffset = query.page * PageSize - PageSize;
  // const endoffset = offset + PageSize;
  // useEffect(() => {
  //   setOffset(newOffset);
  // }, [query.page]);

  // memo controlled grid
  const gridrefresh = useMemo(() => {
    return questions.results.map(
      (
        {
          upVoteNumber,
          downVoteNumber,
          postByUser,
          creator_by,
          viewedByTheUsers,
          categoryOfThePost,
          ...data
        },
        index
      ) => (
        <div
          key={index}
          style={{
            padding: "0 5px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className={styles.wrapper}>
            <div className={styles.qtitle}>
              <Link href={`/posts/?postid=${data.pk}&page=1`}>
                {data.title.length > 60
                  ? data.title.substring(0, 60) + " ..."
                  : data.title}
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
                {postByUser.length > 150
                  ? postByUser.substring(0, 150) + " ..."
                  : postByUser}
              </span>
            </div>
            <div style={{ width: "90%", height: "40px", marginTop: "auto" }}>
              {categoryOfThePost.map(({ categoryForPost }, index) => {
                return (
                  <span key={index} className={styles.tags}>
                    {categoryForPost}
                  </span>
                );
              })}
            </div>
            <Row className={styles.buttonRow}>
              <Col>
                <div
                  style={{ backgroundColor: "#121212" }}
                  className={styles.button1}
                >
                  <div className={`${styles.votebox} ${styles.listItem}`}>
                    <span>{upVoteNumber - downVoteNumber} Votes </span>
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
                    {viewsbytheuser} <img src="/icons/eye.svg" alt="eye icon" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )
    );
  }, [questions.results]);

  return (
    <React.Fragment>
      <Row>
        <Col>
          <div className={styles.emptybox}></div>
        </Col>
      </Row>

      <Container>
        <h1 className={styles.headingtop}>Top Questions</h1>
        <Masonry className={styles.masonryGrid}>{gridrefresh}</Masonry>
      </Container>
      <div className={styles.page}>
        {/* paginating */}
        {questions.count > PageSize && (
          <Pagination
            currentPage={query.page}
            count={Math.ceil(questions.count / PageSize)}
            baseURL={`/questions?`}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default Questions;

export async function getServerSideProps({ query }) {
  if (!query.page) query.page = 1;
  let questions = [];
  console.log(questions);
  try {
    questions = await sendReq(`${PostListURL}?page=${query.page}`);
  } catch (err) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      questions,
      query,
    },
  };
}
