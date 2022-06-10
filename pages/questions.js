import styles from "../styles/Questions.module.scss";
import { PostListURL, PageSize } from "../components/constants";
import { Host } from "../components/constants";
import { sendReq } from "../components/requests";
import { Container, Row, Col } from "react-bootstrap";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import QuestionBox from "./questions/questionBox";
import React, { useState, useEffect, useMemo } from "react";
import { CSSGrid, measureItems, makeResponsive } from "react-stonecutter";
import Pagination from "../components/Pagination";

const Questions = ({ questions, query }) => {
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
        <li key={index}>
          <QuestionBox
            data={data}
            categoryOfThePost={categoryOfThePost}
            upVoteNumber={upVoteNumber}
            downVoteNumber={downVoteNumber}
            viewsbytheuser={viewedByTheUsers}
            postByUser={postByUser}
          />
        </li>
      )
    );
  }, [questions.results]);
  const gridEnterExitStyle = enterExitStyles[0];
  const Grid = makeResponsive(measureItems(CSSGrid), {
    maxWidth: 1920,
    minPadding: 100,
  });

  return (
    <React.Fragment>
      <Row>
        <Col>
          <div className={styles.emptybox}></div>
        </Col>
      </Row>

      <Container>
        <h1 className={styles.headingtop}>Top Questions</h1>
        <Grid
          className={styles.gridClass}
          component="ul"
          columns={3}
          columnWidth={420}
          gutterWidth={20}
          gutterHeight={20}
          itemHeight={316}
          enter={gridEnterExitStyle.enter}
          entered={gridEnterExitStyle.entered}
          exit={gridEnterExitStyle.exit}
          duration={400}
          springConfig={{ stiffness: 60, damping: 12 }}
        >
          {gridrefresh}
        </Grid>
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
