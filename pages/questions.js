import styles from "../styles/Questions.module.scss";
import { PostListURL, PageSize } from "../components/constants";
import Link from "next/link";
import Pagination from "../components/Pagination";
import { sendReq } from "../components/requests";
import { Container, Row } from "react-bootstrap";

const Questions = ({ questions, query }) => {
  // console.log(questions);
  return (
    <Container style={{ marginTop: "8rem" }}>
      <h1>Top Questions</h1>
      {questions.count != 0 &&
        questions.results.map(
          (
            {
              upVoteNumber,
              downVoteNumber,
              creator_by,
              viewedByTheUsers,
              categoryOfThePost,
              ...data
            },
            index
          ) => (
            <div key={creator_by.creator_id}>
              <div className={styles.wrapper}>
                <div className={styles.left}>
                  <Link
                    href={`/posts/?postid=${data.pk}&page=1`}
                    className={styles.title}
                  >
                    {data.title.length > 60
                      ? data.title.substring(0, 60) + " ..."
                      : data.title}
                  </Link>
                  <ul>
                    {categoryOfThePost.map(({ categoryForPost }) => (
                      <li key={categoryForPost}>{categoryForPost}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.right}>
                  <ul>
                    <li>
                      {upVoteNumber - downVoteNumber} Votes{" "}
                      <img
                        src="/icons/arrow_upward.svg"
                        alt="upward arrow icon"
                      />{" "}
                    </li>
                    <li>
                      1 Answer <img src="/icons/answer.svg" alt="answer icon" />
                    </li>
                    <li>
                      {viewedByTheUsers} Views{" "}
                      <img src="/icons/eye.svg" alt="eye icon" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )
        )}
      {questions.count > PageSize && (
        <Pagination
          currentPage={query.page}
          count={Math.ceil(questions.count / PageSize)}
          baseURL={`/questions?`}
        />
      )}
    </Container>
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
