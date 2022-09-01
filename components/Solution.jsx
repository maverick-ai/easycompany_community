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
import { useState, useEffect } from "react";

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import moment from "moment";

import { useRouter } from "next/router";

const Solution = (props) => {
  const [solnComment, setsolnComment] = useState(props.comments.comments);
  const [fullsize, setFullsize] = useState(false);
  const router = useRouter();
  const [winWidth, setWinWidth] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setWinWidth(true);
    } else {
      setWinWidth(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setWinWidth(true);
      } else {
        setWinWidth(false);
      }
    });
  }, []);

  function onclickhandler() {
    if (!fullsize) setFullsize(true);
    if (fullsize) setFullsize(false);
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

  var Date_A = new Date(props.solution.time);

  var DateA = Date_A.getTime();
  const DateB = new Date();

  var finalFlash = DateB - DateA;
  console.log(finalFlash, "--------------->>>>>>>>>>>");

  // console.log(newStr);
  let minute = Math.floor(finalFlash / 60000);
  let hours = Math.floor(minute / 60);

  let days = Math.floor(hours / 24);
  let newhour = hours - days * 24;
  let newday = Math.floor(days % 30);
  let month = Math.floor(days / 30);
  let year = Math.floor(month / 12);

  let newminute = minute - hours * 60;

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
      {!winWidth && (
        <Container>
          <Row>
            <Col lg={1} md={2} sm={2} xs={2}>
            <div style={{marginTop:"40px"}}>
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
              </div>
            </Col>
            <Col lg={11} md={10} sm={10} xs={8}>
              <Row className={styles.toprow}>
                <div style={{ width: "10px", padding: "0px" }}></div>
                <div style={{ display: "flex" }}>
                  <div style={{ width: "28px" }}>
                  {props.solution.creator_by.image ? (
                        <img
                          src={props.solution.creator_by.image}
                          style={{
                            height: "28px",
                            width: "28px",
                            borderRadius: "50%",
                          }}
                        />
                      ) : (
                        <img
                          src="/profileImage.png"
                          style={{
                            height: "28px",
                            width: "28px",
                            borderRadius: "50%",
                          }}
                        />
                      )}
                  </div>
                  {/* <Col lg={2} md={3} sm={4}> */}
                  <div className={styles.postuser}>
                    <div
                      style={{
                        width: "200px",
                        display: "inline-block",
                        paddingLeft: "8px",
                        fontSize: "17px",
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
                    <div className={styles.timerDiv} style={{ width: "120px" }}>
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
                        <p className={styles.timerP}>
                          {`${year ? year + " years" : ""}` ||
                            `${month ? month + " months" : ""}` ||
                            `${newday ? newday + " days" : ""}` ||
                            `${newhour ? newhour + " hours" : ""}` ||
                            `${newminute ? newminute + " minutes" : ""}`}
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </Row>
              <Row>
          
                <div style={{wordWrap:"break-word", width:"85%"}}>
                <ReactMarkdown
                  className={styles.solutionBody}
                  children={props.solution.solutionByUser}
                  remarkPlugins={[remarkGfm]}

                  components={{
                    img: ({ node, ...props }) =>
                      fullsize ? (
                        <div className={styles.modal}>
                          <span
                            className={styles.close}
                            onClick={onclickhandler}
                          >
                            &times;
                          </span>
                          <img
                            class={styles.modal_content}
                            id="img01"
                            {...props}
                          />
                          <div className={styles.caption} onClick={onclickhandler}>Close</div>
                        </div>
                      ) : (
                        <img
                          className={styles.mkdimg2}
                          onClick={onclickhandler}
                          {...props}
                        />
                      ),
                  }}
                /></div>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
      {winWidth && (
        <Container>
          <Row>
          <div
                style={{
                  maxWidth: "10vw",
                  minWidth: "10vw",
                  marginLeft: "-10px",
                }}
              >
                <img
                  className={
                    props.solution.upvoted ? styles.upVotedIcon : styles.VoteIcon
                  }
                  onClick={() =>
                    sendVote(UpVoteSolnURL, props.solution.id, props.setLogin)
                  }
                  alt="logo"
                  src="/mobupvote.png"
                  height={18}
                  width={18}
                  quality={100}
                />
                <p className={styles.voteText}>
                  {props.solution.upVoteNumber - props.solution.downVoteNumber}
                </p>
                <img
                  className={
                    props.solution.downvoted
                      ? styles.downVotedIcon
                      : styles.VoteIcon
                  }
                  onClick={() =>
                    sendVote(
                      DownVoteSolnURL,
                      props.solution.id,
                      props.setLogin
                    )
                  }
                  alt="logo"
                  src="/mobdownvote.png"
                  height={18}
                  width={18}
                  quality={100}
                />
              </div>
            {/* <Col lg={1} md={2} sm={1} xs={1}>
            <div
                style={{
                  marginRight: "10px",
                  marginLeft: "-10px",
                }}
              >
              <Image
                className={
                  props.solution.upvoted ? styles.upVotedIcon : styles.VoteIcon
                }
                onClick={() =>
                  sendVote(UpVoteSolnURL, props.solution.id, props.setLogin)
                }
                alt="logo"
                src="/mobupvote.png"
                height={18}
                width={18}
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
                src="/mobdownvote.png"
                height={18}
                width={18}
                quality={100}
              />
              </div>
            </Col> */}
            <Col
              lg={11}
              md={10}
              sm={10}
              xs={10}
            >
              
                <div style={{ wordWrap: "break-word" , marginBottom:"10px"}}>
                  <ReactMarkdown
                    className={styles.solutionBody}
                    children={props.solution.solutionByUser}
                    remarkPlugins={[remarkGfm]}
                    components={{
                      img: ({ node, ...props }) =>
                        fullsize ? (
                          <div className={styles.modal}>
                            <span
                              className={styles.close}
                              onClick={onclickhandler}
                            >
                              &times;
                            </span>
                            <img
                              class={styles.modal_content}
                              id="img01"
                              {...props}
                            />
                            <div className={styles.caption} onClick={onclickhandler}>Close</div>
                          </div>
                        ) : (
                          <img
                            className={styles.mkdimg2}
                            onClick={onclickhandler}
                            {...props}
                          />
                        ),
                    }}
                  />
                </div>
              
              <Row className={styles.toprow}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <p
                    style={{
                      marginLeft: "-12px",
                      paddingTop: "6px",
                      paddingRight: "12px",
                    }}
                  >
                    -
                  </p>
                  {props.solution.creator_by.image ? (
                        <img
                          src={props.solution.creator_by.image}
                          style={{
                            height: "35px",
                            width: "35px",
                            borderRadius: "50%",
                          }}
                        />
                      ) : (
                        <img
                          src="/anonypic.png"
                          style={{
                            height: "35px",
                            width: "35px",
                            borderRadius: "50%",
                          }}
                        />
                      )}
                    <div
                      style={{
                        paddingLeft: "10px",
                        paddingTop:"6px",
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
                  </div>
              </Row>
              <Row>
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <div
                    style={{
                      marginTop: "4px",
                      height: "16px",
                      width: "16px",
                      display: "flex",
                    }}
                  >
                    <Image
                      src="/av_timer.png"
                      height={16}
                      width={16}
                      quality={100}
                    />
                  </div>
                  <span
                    style={{
                      marginLeft: "5px",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  >
                    <p className={styles.timerP}>
                      {`${year ? year + " years" : ""}` ||
                        `${month ? month + " months" : ""}` ||
                        `${newday ? newday + " days" : ""}` ||
                        `${newhour ? newhour + " hours" : ""}` ||
                        `${newminute ? newminute + " minutes" : ""}`}
                    </p>
                  </span>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
      <div className="soln-comments-container">
        <Container>
          <Row>
            <Col
              lg={{ span: 3, offset: 1 }}
              md={{span: 6, offset: 2}}
              sm={{ span: 6, offset: 1 }}
              xs={{ span: 6, offset: 1 }}
            >
              <h2
                className={styles.commentTitle}
                style={{ margin: "30px 0 15px 0px" }}
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

          {solnComment && solnComment.length < props.solution.comments.count && (
            <Col
              lg={{ span: 3, offset: 1 }}
              sm={{ span: 6, offset: 2 }}
              xs={{ span: 6, offset: 2 }}
            >
              <button
                onClick={() => getnewsolncomments(props.solution.id)}
                className={`${styles.commentButton}`}
              >
                View All
              </button>
            </Col>
          )}
        </Container>

        <Container>
          <Row>
            <Col
              lg={{ span: 6, offset: 1 }}
              md={{offset: 2}}
              sm={{ span: 10, offset: 1 }}
              xs={{ span: 10, offset: 1 }}
            >
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
                {/* <div style={{ marginTop: "7px" }}>
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
                </div> */}
                <div style={{ marginLeft: "auto" }}>
                  <div style={{ position: "relative", width: "auto" }}>
                    <img
                      onClick={() =>
                        addpostcomment(
                          document.getElementById(
                            `solnComment${props.solution.id}`
                          ).value,
                          props.solution.id,
                          props.setLogin
                        )
                      }
                      src="/commentArrow.png"
                      style={{
                        width: "25px",
                        position: "absolute",
                        top: "11px",
                        right: "12px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Solution;
