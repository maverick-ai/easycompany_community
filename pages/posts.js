//import MiddlewarePlugin from "next/dist/build/webpack/plugins/middleware-plugin";
import styles from "../styles/Post.module.css";
import Styles from "../styles/utils.module.css";
import "react-mde/lib/styles/css/react-mde-all.css";
import remarkGfm from "remark-gfm";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde.css";
import "react-mde/lib/styles/css/react-mde-toolbar.css";
import "react-mde/lib/styles/css/react-mde-editor.css";
import "react-mde/lib/styles/css/react-mde-preview.css";
import ReactMarkdown from "react-markdown";
import { CreateImageURL } from "../components/constants";

import { Host, PostURL, AnswersURL, PageSize } from "../components/constants";
import cookie from "cookie";
import Pagination from "../components/Pagination";
import DetailedPost from "../components/DetailedPost";
import Solution from "../components/Solution";
import { sendReq } from "../components/requests";
import LoginPopUp from "../components/LogInPopUp";
import { addanswer } from "../components/requests";
import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useCookies } from "react-cookie";

const Post = ({ post, answers, solnComments, query }) => {
  const [cookie, setCookie] = useCookies(["token"]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [ansValue, setAnsValue] = useState("");
  const [selectedTab, setSelectedTab] = useState("write");
  useEffect(() => {
    window.scroll.top
  }, []);
  console.log("No Mikey No!");
  console.log(post);

  // TS code(converted to JS) for image save

  const save = async function* (data, file) {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${cookie.token}`);

    var formdata = new FormData();
    formdata.append("image", file);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    let response = await fetch(`${CreateImageURL}`, requestOptions);
    let newData = await response.json();

    yield newData.url;

    // returns true meaning that the save was successful
    return true;
  };

  // TS code ends
  return (
    <div className={styles.postContainer}>
      {post.detail && <h1>Post NOT found.</h1>}
      {!post.detail && (
        <div className="post">
          <DetailedPost
            className={styles.post}
            data={post}
            setLogin={setIsLoggedIn}
          />
          <div className="answers-container">
            <Container>
              <Col lg={{ span: 8, offset: 1 }} md={{offset: 2}} sm={{span: 8, offset: 1}} xs={{span: 8, offset: 1}}>
                <h2 className={styles.answerTitle}>{answers.count} Answers</h2>
              </Col>
            </Container>
            <Container>
              <Col style={{textAlign:"center"}} lg={{ offset: 1 }}>
                {!answers.count && <img style={{width:"40%", marginBottom:"50px"}} src="/noanswer.png"/>}
              </Col>
              {answers.count > 0 && (
                <div className="post-answers">
                  {answers.results.map((answer, index) => (
                    <Solution
                      solution={answer}
                      currentuser={post.current_user}
                      accepted={post.acceptedSoln}
                      creator={post.creator_by.creator_id}
                      comments={solnComments[index]}
                      key={answer.id}
                      setLogin={setIsLoggedIn}
                    />
                  ))}
                </div>
              )}
            </Container>
            <Container>
            <Col lg={{ span: 10, offset: 1 }} style={{marginTop:"20px", marginBottom:"30px"}}>
              <h2 className={styles.doyouknow}>Do you know the answer to this questions? {post.creator_by.first_name} needs your help!</h2>
            </Col>
            </Container>
            <Container>
              <Col lg={{ span: 10, offset: 1 }}>
                <div style={{marginLeft:"15px"}}>
                <ReactMde
                  value={ansValue}
                  onChange={setAnsValue}
                  selectedTab={selectedTab}
                  onTabChange={setSelectedTab}
                  childProps={{
                    textArea: {
                      placeholder: "Your Answer",
                      className: `${styles.bodyInput}`,
                    },
                  }}
                  paste={{
                    saveImage: save,
                  }}
                  toolbarCommands={[
                    ["header", "bold", "italic", "strikethrough"],
                    ["link", "quote", "image"],
                    ["unordered-list", "ordered-list", "checked-list"],
                  ]}
                  generateMarkdownPreview={(markdown) =>
                    Promise.resolve(
                      <ReactMarkdown
                        children={markdown}
                        remarkPlugins={remarkGfm}

                      />
                    )
                  }
                /></div>
              </Col>
            </Container>
            <Container>
              <Row>
                <Col
                  lg={{ span: 1, offset: 1 }}
                  style={{ marginBottom: "50px", marginTop: "25px" }}
                >
                  <div style={{marginLeft:"14px"}}>
                  <button
                    onClick={() =>
                      addanswer(ansValue, post.post_id, setIsLoggedIn)
                    }
                    className={Styles.btn}
                  >
                    Add Answer
                  </button></div>
                </Col>
              </Row>
            </Container>
            <div className={styles.page}>
              {answers.count > PageSize && (
                <Pagination
                  currentPage={query.page}
                  count={Math.ceil(answers.count / PageSize)}
                  baseURL={`/posts?postid=${query.postid}&`}
                />
              )}
            </div>
          </div>
            <div className={styles.FooterBar}>
            <Row>
                <div className={styles.globeImgDiv} style={{position: 'relative'}}>
                  <img className={styles.globeImg} src="./globe.png"></img>
                </div>
            </Row>
            <Row style={{ textAlign: "center", margin: "3% 0" }}>
              <div style={{ position: "relative" }}>
                <span className={styles.bottomText}>FOLLOW</span>
                <span className={styles.bottomText}>HELP</span>
                <span className={styles.bottomText}>CONTACT</span>
                <span className={styles.bottomText}>ABOUT US</span>
              </div>
            </Row>
                
                
            </div>
          
         
        </div>
      )}
      {!isLoggedIn && <LoginPopUp setLogin={setIsLoggedIn} />}
    </div>
  );
};

export default Post;

export async function getServerSideProps({ query, req }) {
  let post = {};
  let answers = {};
  let solnComments = [];
  try {
    post = await sendReq(`${PostURL}${query.postid}/`, req.headers.cookie);
    if (!query.page) query.page = 1;

    if (post.detail) {

    } else {
      answers = await sendReq(
        `${AnswersURL}${query.postid}/?page=${query.page}`,
        req.headers.cookie
      );
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
      },
    };
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
