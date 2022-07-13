import {
  PublicUserSolutionsURL,
  PageSize,
  UserSolutionsURL,
} from "../../components/constants";
import Link from "next/link";
import Pagination from "../../components/Pagination";
import Router from "next/router";
import { sendReq } from "../../components/requests";
import { useState } from "react";
import styles from "../../styles/Questions.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons";

const Answers = ({ userAnswers, query, login }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(login);

  return (
    <div className={`${styles.questionsList} container`}>
      <div className="answers-list">
        {userAnswers.count &&
          userAnswers.results.map((data) => (
            <Link href={`/posts/?postid=${data.post.pk}&page=1`}>
              <div className={`row ${styles.qcard}`} key={data.post.pk}>
                <div className={`col-3 col-sm-2 ${styles.voteCol}`}>
                  <FontAwesomeIcon
                    className={styles.upVoteIcon}
                    icon={faArrowAltCircleUp}
                  />
                  <p className={styles.voteText}>
                    {data.post.upVoteNumber - data.post.downVoteNumber}
                  </p>
                  <FontAwesomeIcon
                    className={styles.downVoteIcon}
                    icon={faArrowAltCircleDown}
                  />
                </div>

                <div className={`col-9 col-sm-10 ${styles.qbox}`}>
                  <p className={styles.title}>
                    <strong>
                      {" "}
                      {data.post.title.length > 60
                        ? data.post.title.substring(0, 60) + " ..."
                        : data.post.title}
                    </strong>
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
      {userAnswers.count > PageSize && (
        <Pagination
          currentPage={query.page}
          count={Math.ceil(userAnswers.count / PageSize)}
          baseURL={
            query.user ? `/user/answers?user=${query.user}` : `/user/answers?`
          }
        />
      )}
      {!isLoggedIn && <LoginPopUp setLogin={setIsLoggedIn} />}
    </div>
  );
};

export default Answers;

export async function getServerSideProps({ query, req }) {
  let userAnswers = {};
  let login = true;
  if (!query.page) query.page = 1;
  try {
    if (query.user) {
      userAnswers = await sendReq(
        `${PublicUserSolutionsURL}${query.user}/?page=${query.page}`
      );
      console.log("HELLLO", userAnswers);
    } else if (req.headers.cookie) {
      console.log("HELLLOOO2", userAnswers);
      userAnswers = await sendReq(
        `${UserSolutionsURL}?page=${query.page}`,
        req.headers.cookie
      );
    } else {
      console.log("HELLLOOO3");
      login = false;
    }
    console.log(userAnswers);
  } catch (err) {
    console.log(err);
    if (err == "redirect to login") {
      login = false;
    } else {
      return {
        redirect: {
          destination: "/error",
          permanent: false,
        },
      };
    }
  }
  return {
    props: {
      userAnswers,
      query,
      login,
    },
  };
}
