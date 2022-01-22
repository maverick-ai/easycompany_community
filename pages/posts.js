//import MiddlewarePlugin from "next/dist/build/webpack/plugins/middleware-plugin";
import styles from "../styles/Post.module.css";

import {
  Host,
  PostURL,
  AnswersURL,
  PageSize,
} from "../components/constants";
import cookie from "cookie";
import Pagination from "../components/Pagination";
import DetailedPost from "../components/DetailedPost";
import Solution from "../components/Solution";
import {sendReq} from "../components/requests"
import LoginPopUp from "../components/LogInPopUp";
import { addanswer } from "../components/requests";
import { useState } from "react";



const Post = ({ post, answers, solnComments, query }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className={styles.postContainer}>
      {post.detail && <h1>Post NOT found.</h1>}
      {!post.detail && (
        <div className="post">
        <DetailedPost className={styles.post} data={post} setLogin ={setIsLoggedIn}/>
          <div className="answers-container">
            <h2 className={styles.answerTitle}>Answers</h2>
            {!answers.count && <h2>No answers found</h2>}
            {answers.count > 0 && (
              <div className="post-answers">
                {answers.results.map((answer,index) => (
                  <Solution solution={answer} comments={solnComments[index]} key={answer.id} setLogin ={setIsLoggedIn} />
                ))}
                <textarea className={styles.answerInput} id="answer" type="text" placeholder="Answer!" />
                <button
                onClick={() =>
                    addanswer(document.getElementById("answer").value, post.post_id, setIsLoggedIn)
                }
                className={styles.button} 
                >
                Add Answer
                </button>
                {answers.count > PageSize && (
                  <Pagination
                    currentPage={query.page}
                    count={Math.ceil(answers.count / PageSize)}
                    baseURL={`/posts?postid=${query.postid}&`}
                  />
                )}
            </div>
            )}
          </div>
      </div>
  )}
  {!isLoggedIn && <LoginPopUp setLogin={setIsLoggedIn} />}
</div>
);
}

export default Post;

export async function getServerSideProps({ query, req }) {
  let post = {};
  let answers = {};
  let solnComments = [];
  try {
  
    post = await sendReq(`${PostURL}${query.postid}/`, req.headers.cookie);
    if (!query.page) query.page = 1;

    if (post.detail) {
      console.log("No post");
    } else {
    
      answers = await sendReq(`${AnswersURL}${query.postid}/?page=${query.page}`, req.headers.cookie)
      for (let i = 0; i < answers.results.length; i++) {
        solnComments.push(answers.results[i].comments);
      }
    }
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      }
    }
    console.log("HIIIIII");
    console.log(post)
  }
  return {
    props: {
      post,
      answers,
      solnComments,
      query,
    },
  };
}

