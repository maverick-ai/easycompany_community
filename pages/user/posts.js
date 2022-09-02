import {
  PublicUserPostsURL,
  UserPostsURL,
  PageSize,
} from "../../components/constants";
import { sendReq } from "../../components/requests";
import { useState } from "react";
import Link from "next/link";
import Pagination from "../../components/Pagination";
import styles from "../../styles/Questions.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons";

const UserPosts = ({ userPosts, query, login }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(login);

  return (
    <div className={`${styles.questionsList} container`}>
      <div className="questions-list">
        {userPosts.count &&
          userPosts.results.map((data) => (
            <Link href={`/posts/?postid=${data.pk}&page=1`}>
              <div className={`row ${styles.qcard}`} key={data.pk}>
                <div className={`col-3 col-sm-2 ${styles.voteCol}`}>
                  <FontAwesomeIcon
                    className={styles.upVoteIcon}
                    icon={faArrowAltCircleUp}
                  />
                  <p className={styles.voteText}>
                    {data.upVoteNumber - data.downVoteNumber}
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
                      {data.title.length > 60
                        ? data.title.substring(0, 60) + " ..."
                        : data.title}
                    </strong>
                  </p>
                  <div className={`category-list ${styles.catlist}`}>
                    {data.categoryOfThePost.map((category) => (
                      <p className={styles.category}>
                        {category.categoryForPost}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      {userPosts.count > PageSize && (
        <Pagination
          currentPage={query.page}
          count={Math.ceil(userPosts.count / PageSize)}
          baseURL={
            query.user ? `/user/posts?user=${query.user}` : `/user/posts?`
          }
        />
      )}
      {!isLoggedIn && <LoginPopUp setLogin={setIsLoggedIn} />}
    </div>
  );
};

export default UserPosts;

export async function getServerSideProps({ query, req }) {
  let userPosts = {};
  let login = true;
  if (!query.page) query.page = 1;
  try {
    if (query.user) {
      userPosts = await sendReq(
        `${PublicUserPostsURL}${query.user}/?page=${query.page}`
      );
    } else if (req.headers.cookie) {
      userPosts = await sendReq(
        `${UserPostsURL}?page=${query.page}`,
        req.headers.cookie
      );
    } else {
      login = false;
    }
  } catch (err) {
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
      userPosts,
      query,
      login,
    },
  };
}
