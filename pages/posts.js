//import MiddlewarePlugin from "next/dist/build/webpack/plugins/middleware-plugin";
import styles from "../styles/Post.module.css";
import Styles from "../styles/utils.module.css";
import "react-mde/lib/styles/css/react-mde-all.css";
import remarkGfm from "remark-gfm";
import ReactMde from "react-mde";
import 'react-mde/lib/styles/css/react-mde.css';
import 'react-mde/lib/styles/css/react-mde-toolbar.css';
import 'react-mde/lib/styles/css/react-mde-editor.css';
import 'react-mde/lib/styles/css/react-mde-preview.css';
import ReactMarkdown from "react-markdown";
import GradientBtn from "../components/GradienButton";

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
import { sendReq } from "../components/requests"
import LoginPopUp from "../components/LogInPopUp";
import { addanswer } from "../components/requests";
import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";



const Post = ({ post, answers, solnComments, query }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [ansValue, setAnsValue] = useState("");
  const [selectedTab, setSelectedTab] = useState("write");

  // TS code(converted to JS) for image save


  // const save: SaveImageHandler = async function*(data: ArrayBuffer) {
  //   // Promise that waits for "time" milliseconds
  //   const wait = function(time: number) {
  //     return new Promise((a, r) => {
  //       setTimeout(() => a(), time);
  //     });
  //   };

  //   // Upload "data" to your server
  //   // Use XMLHttpRequest.send to send a FormData object containing
  //   // "data"
  //   // Check this question: https://stackoverflow.com/questions/18055422/how-to-receive-php-image-data-over-copy-n-paste-javascript-with-xmlhttprequest

  //   await wait(2000);
  //   // yields the URL that should be inserted in the markdown
  //   yield "https://picsum.photos/300";
  //   await wait(2000);

  //   // returns true meaning that the save was successful
  //   return true;
  // };

  var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0: case 1: t = op; break;
          case 4: _.label++; return { value: op[1], done: false };
          case 5: _.label++; y = op[1]; op = [0]; continue;
          case 7: op = _.ops.pop(); _.trys.pop(); continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
            if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
            if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
            if (t[2]) _.ops.pop();
            _.trys.pop(); continue;
        }
        op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
  var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
  };
  var save = function (data) {
    return __asyncGenerator(this, arguments, function () {
      var wait;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            wait = function (time) {
              return new Promise(function (a, r) {
                setTimeout(function () { return a(); }, time);
              });
            };
            return [4 /*yield*/, __await(wait(2000))];
          case 1:
            _a.sent();
            return [4 /*yield*/, __await("https://picsum.photos/300")];
          case 2: return [4 /*yield*/, _a.sent()];
          case 3:
            _a.sent();
            return [4 /*yield*/, __await(wait(2000))];
          case 4:
            _a.sent();
            return [4 /*yield*/, __await(true)];
          case 5: return [2 /*return*/, _a.sent()];
        }
      });
    });
  };

  // TS code ends 
  return (
    <div className={styles.postContainer}>
      {post.detail && <h1>Post NOT found.</h1>}
      {!post.detail && (
        <div className="post">
          <DetailedPost className={styles.post} data={post} setLogin={setIsLoggedIn} />
          <div className="answers-container">
            <Container>
              <Col lg={{ span: 8, offset: 1 }}>
                <h2 className={styles.answerTitle}>Answers</h2>
              </Col>
            </Container>
            <Container>
              <Col lg={{ span: 8, offset: 1 }}>
                {!answers.count && <h2>No answers found</h2>}
              </Col>
              {answers.count > 0 && (
                <div className="post-answers">
                  {answers.results.map((answer, index) => (
                    <Solution solution={answer} currentuser={post.current_user} accepted={post.acceptedSoln} creator={post.creator_by.creator_id} comments={solnComments[index]} key={answer.id} setLogin={setIsLoggedIn} />
                  ))}
                </div>
              )}</Container>
            <Container>
              <Col lg={{ span: 10, offset: 1 }}>
                <ReactMde
                  value={ansValue}
                  onChange={setAnsValue}
                  selectedTab={selectedTab}
                  onTabChange={setSelectedTab}
                  childProps={
                    {
                      textArea: {
                        placeholder: "Your Answer",
                        className: `${styles.bodyInput}`
                      }
                    }
                  }
                  paste={{
                    saveImage: save
                  }}
                  toolbarCommands={[["header", "bold", "italic", "strikethrough"], ["link", "quote", "image"], ["unordered-list", "ordered-list", "checked-list"]]}
                  generateMarkdownPreview={(markdown) =>
                    Promise.resolve(<ReactMarkdown children={markdown} remarkPlugins={remarkGfm} />)
                  }


                />
              </Col>
            </Container>
            <Container>
              <Row>
                <Col lg={{ span: 1, offset: 1 }} style={{ marginBottom: "50px", marginTop: "25px" }}>
                  <button
                    onClick={() =>
                      addanswer(ansValue, post.post_id, setIsLoggedIn)
                    }
                    className={Styles.btn}
                  >
                    Add Answer
                  </button>
                </Col>
              </Row>
            </Container>
            {answers.count > PageSize && (
              <Pagination
                currentPage={query.page}
                count={Math.ceil(answers.count / PageSize)}
                baseURL={`/posts?postid=${query.postid}&`}
              />
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

