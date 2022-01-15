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



const Post = ({ post, answers, solnComments, query }) => {
  
  return (
    <div className="container-fluid" style={{ margin: "5rem" }}>
      {post.detail && <h1>Post NOT found.</h1>}
      {!post.detail && (
        <div className="post">
        <DetailedPost data={post} />
          <div className="answers-container">
            <h2>Answers</h2>
            {!answers.count && <h2>No answers found</h2>}
            {answers.count > 0 && (
              <div className="post-answers">
                {answers.results.map((answer,index) => (
                  <Solution solution={answer} comments={solnComments[index]} key={answer.id}/>
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
</div>
);
}

export default Post;

export async function getServerSideProps({ query, req }) {
  let post = {};
  let answers = {};
  let solnComments = [];
  try {
    if (req.headers.cookie) {
      var resPost = await fetch(`${PostURL}${query.postid}/`, {
        method: "GET",
        headers: {
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          Host: Host,
          Authorization: `Token ${cookie.parse(req.headers.cookie).token}`,
        },
      });
    } else {
      var resPost = await fetch(`${PostURL}${query.postid}/`);
    }
    post = await resPost.json();
    if (!query.page) query.page = 1;

    if (post.detail) {
      console.log("No post");
    } else {
      if (req.headers.cookie) {
        var resAnswers = await fetch(
          `${AnswersURL}${query.postid}/?page=${query.page}`,
          {
            method: "GET",
            headers: {
              Accept: "*/*",
              "Accept-Encoding": "gzip, deflate, br",
              Connection: "keep-alive",
              Host: Host,
              Authorization: `Token ${cookie.parse(req.headers.cookie).token}`,
            },
          }
        );
      } else {
        var resAnswers = await fetch(
          `${AnswersURL}${query.postid}/?page=${query.page}`
        );
      }
      answers = await resAnswers.json();
      for (let i = 0; i < answers.results.length; i++) {
        solnComments.push(answers.results[i].comments);
      }
    }
  } catch (err) {
    console.log(err);
    console.log("HIIIIII");
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

