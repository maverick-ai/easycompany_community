import styles from "../styles/Post.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import {
  DownVoteSolnURL,
  UpVoteSolnURL,
  SolutionCommentsURL,
  commentPageSize,
  Host,
  AcceptSolnURL,
} from "./constants";
import { sendVote, addsolncomment, sendReq } from "./requests";
import SolutionComment from "./SolutionComment";
import { useState } from "react";

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import moment from "moment";

import  { useRouter } from "next/router";

const Solution = (props) => {
  const [solnComment, setsolnComment] = useState(props.comments.comments);
  const [fullsize,setFullsize] = useState(false);
  const router = useRouter();

  function onclickhandler(){
    if(!fullsize)
    setFullsize(true);
    if(fullsize) setFullsize(false);
  }
  const dateJoined = moment(props.solution.created_date).format("MMM Do YY");
  const getnewsolncomments = async (id) => {
    const newsolncomments = await sendReq(
      `${SolutionCommentsURL}${id}/?page=${
        solnComment.length / commentPageSize + 1
      }`,
      document.cookie
    );
    setsolnComment((old) => [...old, ...newsolncomments.results]);
  };

  const acceptsoln = async (id) => {
    const res = await sendReq(`${AcceptSolnURL}${id}/`, document.cookie, "PUT");
    if (res.message) {
      alert(res.message);
      if (res.message != "Only post creator can accept solution")
        window.location.reload();
    } else {
      router.push("/404");
    }
  };

  return (
    <div className={`Soln`}>
      <Container>
        <Row>
          <Col lg={1} md={2} sm={2}>
            <Image
              className={
                props.solution.upvoted ? styles.upVotedIcon : styles.VoteIcon
              }
              onClick={() =>
                sendVote(UpVoteSolnURL, props.solution.id, props.setLogin)
              }
              alt="logo"
              src="/upVote.png"
              height={33}
              width={33}
              quality={100}
            />
            <p className={styles.voteText}>
              {props.solution.upVoteNumber - props.solution.downVoteNumber}
            </p>
            <Image
              className={
                props.solution.downvoted
                  ? styles.downVotedIcon
                  : styles.VoteIcon
              }
              onClick={() =>
                sendVote(DownVoteSolnURL, props.solution.id, props.setLogin)
              }
              alt="logo"
              src="/downVote.png"
              height={33}
              width={33}
              quality={100}
            />
          </Col>
          <Col lg={11} md={10} sm={10}>
            <Row className={styles.toprow}>
              <div style={{ width: "10px", padding: "0px" }}></div>
              <div style={{ display: "flex" }}>
                <div style={{ width: "28px" }}>
                  <Image
                    src="/profileImage.png"
                    height={28}
                    width={28}
                    quality={100}
                  />
                </div>
                {/* <Col lg={2} md={3} sm={4}> */}
                <div className={styles.postuser}>
                  <div
                    style={{
                      width: "200px",
                      display: "inline-block",
                      paddingLeft: "8px",
                    }}
                  >
                    <Link
                      href={`/profile?user=${props.solution.creator_by.creator_id}`}
                    >
                      {props.solution.creator_by.first_name +
                        " " +
                        props.solution.creator_by.last_name}
                    </Link>
                  </div>
                  <div style={{ width: "120px" }}>
                    <Image
                      src="/av_timer.png"
                      height={16}
                      width={16}
                      quality={100}
                    />
                    <span
                      style={{
                        marginLeft: "10px",
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >
                     {dateJoined}
                    </span>
                  </div>
                  <div style={{ width: "91px" }}>
                    <Image
                      className={styles.eye}
                      src="/Eye.png"
                      height={13.75}
                      width={18.75}
                      quality={100}
                    />
                    <span
                      style={{
                        marginLeft: "5px",
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >
                      Views
                    </span>
                  </div>
                </div>
              </div>
            </Row>
            <Row>
              <ReactMarkdown
                className={styles.solutionBody}
                children={props.solution.solutionByUser}
                remarkPlugins={[remarkGfm]}
                components={{img:({node,...props})=><img className={fullsize?styles.mkdimg:styles.mkdimg2} onClick={onclickhandler}  {...props}/>}}
              />
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="soln-comments-container">
        <Container>
          <Row>
            <Col lg={{ span: 3, offset: 1 }}>
              <h2
                className={styles.commentTitle}
                style={{ margin: "30px 0 15px 0" }}
              >
                Comments
              </h2>
            </Col>
          </Row>
        </Container>
        <Container>
          {solnComment &&
            solnComment.map((com, index) => (
              <SolutionComment
                imgIdx={index}
                key={com.pk}
                comment={com}
                sendVote={sendVote}
                setLogin={props.setLogin}
              />
            ))}
        </Container>

        <Container>
          <Row>
            <Col lg={{ span: 6, offset: 1 }}>
              <div
                className={`${styles.inputoutert} ${styles.commentInput}`}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <input
                  className={`${styles.Input}`}
                  id={`solnComment${props.solution.id}`}
                  type="text"
                  placeholder="   Add a Comment!"
                />
                <div style={{ marginTop: "7px" }}>
                  <Image
                    onClick={() =>
                      addsolncomment(
                        document.getElementById(
                          `solnComment${props.solution.id}`
                        ).value,
                        props.solution.id,
                        props.setLogin
                      )
                    }
                    src="/commentArrow.png"
                    height={25}
                    width={25}
                    quality={100}
                  />
                </div>
              </div>
            </Col>
            {solnComment && solnComment.length < props.solution.comments.count && (
              <Col>
                <button
                  onClick={() => getnewsolncomments(props.solution.id)}
                  className={`${styles.commentButton}`}
                >
                  View All
                </button>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Solution;
