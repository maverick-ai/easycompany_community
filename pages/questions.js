import styles from "../styles/Questions.module.scss";
import { PostListURL, PageSize } from "../components/constants";

import { sendReq } from "../components/requests";
import { Container, Row, Col } from "react-bootstrap";

import QuestionBox from "../components/questions/questionBox";
import React, { useMemo } from "react";

import Pagination from "../components/Pagination";
import FooterToolbar from "../components/FooterToolbar";

const Questions = ({ questions, query }) => {

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
        <div className={styles.masondiv}>
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
      <Container>
        <div className={styles.ImageQuestionsDiv}>
          <img
                className={styles.ImageQuestions}
                src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/questions.png"
              />
        </div>
      </Container>

      <Container>
        <div className={styles.flexboxgrid}>
          <div className={styles.gridnewbox}>{gridrefresh}</div>
        </div>
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
      <div>
        <FooterToolbar />
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
