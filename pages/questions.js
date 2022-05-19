import styles from "../styles/Questions.module.scss";
import { PostListURL, PageSize } from "../components/constants";
import Link from "next/link";
import Pagination from "../components/Pagination";
import { sendReq } from "../components/requests";

const Questions = ({ questions, query }) => {
  return (
    <div className={`${styles.questionsList} container`}>
      {questions.count != 0 &&
        questions.results.map((data) => (
          //   <Link href={`/posts/?postid=${data.pk}&page=1`}>
          //     <div className={`row ${styles.qcard}`} key={data.pk}>
          //       <div className={`col-3 col-sm-2 ${styles.voteCol}`}>
          //         <FontAwesomeIcon
          //           className={styles.upVoteIcon}
          //           icon={faArrowAltCircleUp}
          //         />
          //         <p className={styles.voteText}>
          //           {data.upVoteNumber - data.downVoteNumber}
          //         </p>
          //         <FontAwesomeIcon
          //           className={styles.downVoteIcon}
          //           icon={faArrowAltCircleDown}
          //         />
          //       </div>

          //       <div className={`col-9 col-sm-10 ${styles.qbox}`}>
          //         <p className={styles.title}>
          //           <strong>
          //             {" "}
          //             {data.title.length > 60
          //               ? data.title.substring(0, 60) + " ..."
          //               : data.title}
          //           </strong>
          //         </p>
          //         <div className={`category-list ${styles.catlist}`}>
          //           {data.categoryOfThePost.map((category) => (
          //             <p
          //               className={styles.category}
          //               key={category.categoryOfThePost}
          //             >
          //               {category.categoryForPost}
          //             </p>
          //           ))}
          //         </div>
          //       </div>
          //     </div>
          //   </Link>
          <>
            <h1>Top Questions</h1>
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
                  <li>Mangalore</li>
                  <li>Karnataka</li>
                  <li>Tourist Spots</li>
                  <li>India </li>
                </ul>
              </div>
              <div className={styles.right}>
                <ul>
                  <li>
                    5 Votes{" "}
                    <img
                      src="/icons/arrow_upward.svg"
                      alt="upward arrow icon"
                    />{" "}
                  </li>
                  <li>
                    1 Answer <img src="/icons/answer.svg" alt="answer icon" />
                  </li>
                  <li>
                    7 Views <img src="/icons/eye.svg" alt="eye icon" />
                  </li>
                </ul>
              </div>
            </div>
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
                  <li>Mangalore</li>
                  <li>Karnataka</li>
                  <li>Tourist Spots</li>
                  <li>India </li>
                </ul>
              </div>
              <div className={styles.right}>
                <ul>
                  <li>
                    5 Votes{" "}
                    <img
                      src="/icons/arrow_upward.svg"
                      alt="upward arrow icon"
                    />{" "}
                  </li>
                  <li>
                    1 Answer <img src="/icons/answer.svg" alt="answer icon" />
                  </li>
                  <li>
                    7 Views <img src="/icons/eye.svg" alt="eye icon" />
                  </li>
                </ul>
              </div>
            </div>
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
                  <li>Mangalore</li>
                  <li>Karnataka</li>
                  <li>Tourist Spots</li>
                  <li>India </li>
                </ul>
              </div>
              <div className={styles.right}>
                <ul>
                  <li>
                    5 Votes{" "}
                    <img
                      src="/icons/arrow_upward.svg"
                      alt="upward arrow icon"
                    />{" "}
                  </li>
                  <li>
                    1 Answer <img src="/icons/answer.svg" alt="answer icon" />
                  </li>
                  <li>
                    7 Views <img src="/icons/eye.svg" alt="eye icon" />
                  </li>
                </ul>
              </div>
            </div>
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
                  <li>Mangalore</li>
                  <li>Karnataka</li>
                  <li>Tourist Spots</li>
                  <li>India </li>
                </ul>
              </div>
              <div className={styles.right}>
                <ul>
                  <li>
                    5 Votes{" "}
                    <img
                      src="/icons/arrow_upward.svg"
                      alt="upward arrow icon"
                    />{" "}
                  </li>
                  <li>
                    1 Answer <img src="/icons/answer.svg" alt="answer icon" />
                  </li>
                  <li>
                    7 Views <img src="/icons/eye.svg" alt="eye icon" />
                  </li>
                </ul>
              </div>
            </div>
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
                  <li>Mangalore</li>
                  <li>Karnataka</li>
                  <li>Tourist Spots</li>
                  <li>India </li>
                </ul>
              </div>
              <div className={styles.right}>
                <ul>
                  <li>
                    5 Votes{" "}
                    <img
                      src="/icons/arrow_upward.svg"
                      alt="upward arrow icon"
                    />{" "}
                  </li>
                  <li>
                    1 Answer <img src="/icons/answer.svg" alt="answer icon" />
                  </li>
                  <li>
                    7 Views <img src="/icons/eye.svg" alt="eye icon" />
                  </li>
                </ul>
              </div>
            </div>
          </>
        ))}
      {questions.count > PageSize && (
        <Pagination
          currentPage={query.page}
          count={Math.ceil(questions.count / PageSize)}
          baseURL={`/questions?`}
        />
      )}
    </div>
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
