//import MiddlewarePlugin from "next/dist/build/webpack/plugins/middleware-plugin";
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
import { useState } from "react";



const Post = ({ post, answers, solnComments, query }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="container-fluid" style={{ margin: "5rem" }}>
      {post.detail && <h1>Post NOT found.</h1>}
      {!post.detail && (
        <div className="post">
        <DetailedPost data={post} setLogin ={setIsLoggedIn}/>
          <div className="answers-container">
            <h2>Answers</h2>
            {!answers.count && <h2>No answers found</h2>}
            {answers.count > 0 && (
              <div className="post-answers">
                {answers.results.map((answer,index) => (
                  <Solution solution={answer} comments={solnComments[index]} key={answer.id} setLogin ={setIsLoggedIn} />
                ))}
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
        destination: "/error",
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

