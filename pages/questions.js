import styles from "../styles/Questions.module.scss";
import { PostListURL, PageSize } from "../components/constants";
import { Host } from "../components/constants";
import { sendReq } from "../components/requests";
import { Container, Row, Col } from "react-bootstrap";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import QuestionBox from "./questions/questionBox";
import React, { useState, useEffect, useMemo } from "react";
import Masonry from "react-masonry-component";

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
          <QuestionBox
            data={data}
            categoryOfThePost={categoryOfThePost}
            upVoteNumber={upVoteNumber}
            downVoteNumber={downVoteNumber}
            viewsbytheuser={viewedByTheUsers}
            postByUser={postByUser}
          />
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
