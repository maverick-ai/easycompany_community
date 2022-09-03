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
          <img
                className={styles.ImageQuestions}
                src="questions.png"
                style={{ width: "99%"}}
              />
        {/* <Row style={{ margin: "6% 0 -3%" }}>
          <Col xl={7} lg={7}>
            <div className={styles.QuestionsImgDiv}>
            
              <img
                className={styles.ImageRenderring}
                src="/quetsionpng.png"
                style={{ width: "99%", margin: "0 0" }}
              />
            </div>
          </Col>
          <Col>
            <div>
              <div style={{ position: "relative" }}>
             
                <div className={styles.phonepicdad}>
                  <img src="/Questions2.png" className={styles.phonepic} />
                </div>


              </div>
            </div>
          </Col>
        </Row> */}
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
