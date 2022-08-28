import styles from "../styles/Post.module.css";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { sendVote, addpostcomment, sendReq } from "./requests";
import {
  UpVotePostURL,
  DownVotePostURL,
  commentPageSize,
  PostCommentsURL,
} from "./constants";
import PostComment from "./PostComments";
import Link from "next/link";
import { useEffect, useState } from "react";
import moment from "moment";

const DetailedPost = (props) => {
  console.log(props.data.creator_by.image);
  const [postComment, setpostComment] = useState(props.data.comments.comments);
  const [fullsize, setFullsize] = useState(false);
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

  const dateJoined = moment(props.data.created_date).format("MMM Do YY");

  var Date_A = new Date(props.data.time);

  var DateA = Date_A.getTime();
  const DateB = new Date();

  var finalFlash = DateB - DateA;

  // console.log(newStr);
  let minute = Math.floor(finalFlash / 60000);
  let hours = Math.floor(minute / 60);

  let days = Math.floor(hours / 24);
  let newhour = hours - days * 24;
  let newday = Math.floor(days % 30);
  let month = Math.floor(days / 30);
  let year = Math.floor(month / 12);

  let newminute = minute - hours * 60;

  const getnewpostcomments = async (id, i) => {
    const newComments = await sendReq(
      `${PostCommentsURL}${id}/?page=${
        postComment.length / commentPageSize + 1
      }`,
      document.cookie
    );
    if (newComments.results) {
      setpostComment((old) => [...old, ...newComments.results]);
    }
  };

  return (
    <div className="post-content">
      <Container>
        {!winWidth && (
          <Container>
            <Row>
              <Col lg={1} md={2} sm={2} xs={2}>
                <div style={{ height: "45px", width: "10px" }}></div>
                <Image
                  className={
                    props.data.upvoted ? styles.upVotedIcon : styles.VoteIcon
                  }
                  onClick={() =>
                    sendVote(UpVotePostURL, props.data.post_id, props.setLogin)
                  }
                  alt="logo"
                  src="/upVote.png"
                  height={33}
                  width={33}
                  quality={100}
                />
                <p className={styles.voteText}>
                  {props.data.upVoteNumber - props.data.downVoteNumber}
                </p>
                <Image
                  className={
                    props.data.downvoted
                      ? styles.downVotedIcon
                      : styles.VoteIcon
                  }
                  onClick={() =>
                    sendVote(
                      DownVotePostURL,
                      props.data.post_id,
                      props.setLogin
                    )
                  }
                  alt="logo"
                  src="/downVote.png"
                  height={33}
                  width={33}
                  quality={100}
                />
              </Col>
              <Col lg={11} md={10} sm={10} xs={10}>
                <Row className={styles.toprow}>
                  <div style={{ width: "10px", padding: "0px" }}></div>
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "28px" }}>
                      {props.data.creator_by.image ? (
                        <img
                          src={props.data.creator_by.image}
                          style={{
                            height: "28px",
                            width: "28px",
                            borderRadius: "50%",
                          }}
                        />
                      ) : (
                        <img
                          src="/anonypic.png"
                          style={{
                            height: "28px",
                            width: "28px",
                            borderRadius: "50%",
                          }}
                        />
                      )}
                    </div>
                    {/* <Col lg={3} md={3} sm={4}> */}

                    <div className={styles.postuser}>
                      <Row>
                        <Col lg={5} md={5} xs={12}>
                          <div
                            style={{
                              width: "200px",
                              display: "inline-block",
                              paddingLeft: "8px",
                            }}
                          >
                            <Link
                              href={`/profile?user=${props.data.creator_by.creator_id}`}
                            >
                              {props.data.creator_by.first_name +
                                " " +
                                props.data.creator_by.last_name}
                            </Link>
                          </div>
                        </Col>
                        <Col lg={3} md={3} xs={6}>
                          <div style={{ width: "120px" }}>
                            <img
                              src="/av_timer.png"
                              style={{
                                width: "16px",
                                margin: "auto 0 0 7.7px",
                              }}
                            />
                            <span
                              style={{
                                marginLeft: "3px",
                                fontSize: "16px",
                                fontWeight: "400",
                              }}
                            >
                              <p className={styles.timerP}>
                                {`${year ? year + " years" : ""}` ||
                                  `${month ? month + " Months" : ""}` ||
                                  `${newday ? newday + " days" : ""}` ||
                                  `${newhour ? newhour + " hours" : ""}` ||
                                  `${newminute ? newminute + " minutes" : ""}`}
                              </p>
                            </span>
                          </div>
                        </Col>
                        <Col lg={3} md={3} xs={6}>
                          <div style={{ width: "120px" }}>
                            <img
                              className={styles.eye}
                              src="/Eye.png"
                              style={{ width: "18.75px" }}
                            />
                            <span
                              style={{
                                marginLeft: "5px",
                                fontSize: "16px",
                                fontWeight: "400",
                              }}
                            >
                              <p className={styles.timerP}>
                                {props.data.viewedByTheUsers} Views
                              </p>
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    {/* </Col> */}
                    {/* <Col lg={1} md={3} sm={4} className={styles.eye}> */}

                    {/* </Col> */}
                  </div>
                </Row>
                <Row>
                  <h1 className={styles.posttitle}>{props.data.title}</h1>
                </Row>
                <Row>
                  <div style={{width:"85%"}}>
                  <ReactMarkdown
                    className={styles.postbody}
                    children={props.data.postByUser}
                    remarkPlugins={[remarkGfm]}
                    components={{
                      img: ({ node, ...props }) =>
                        fullsize ? (
                          <div className={styles.modal}>
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
                <Row>
                  <div className={`${styles.catList} category-list`}>
                    {props.data.categoryOfThePost.map((category, index) => (
                      <p key={index} className={styles.category}>
                        {category.categoryForPost}
                      </p>
                    ))}
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        )}
        {winWidth && (
          <Container>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  maxWidth: "12vw",
                  minWidth: "12vw",
                  marginTop: "43px",
                }}
              >
                <Image
                  className={
                    props.data.upvoted ? styles.upVotedIcon : styles.VoteIcon
                  }
                  onClick={() =>
                    sendVote(UpVotePostURL, props.data.post_id, props.setLogin)
                  }
                  alt="logo"
                  src="/mobupvote.png"
                  height={18}
                  width={18}
                  quality={100}
                />
                <p className={styles.voteText}>
                  {props.data.upVoteNumber - props.data.downVoteNumber}
                </p>
                <Image
                  className={
                    props.data.downvoted
                      ? styles.downVotedIcon
                      : styles.VoteIcon
                  }
                  onClick={() =>
                    sendVote(
                      DownVotePostURL,
                      props.data.post_id,
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
              <div>
                <Row className={styles.toprow}>
                  <div style={{ width: "10px", padding: "0px" }}></div>
                  <div className={styles.postuser}>
                    <Row>
                      <Col xs={9} sm={9}>
                        <div style={{ width: "110px" }}>
                          <img
                            className={styles.eye}
                            src="/Eye.png"
                            style={{ width: "18.75px" }}
                          />
                          <span
                            style={{
                              fontSize: "16px",
                              fontWeight: "400",
                            }}
                          >
                            <p className={styles.timerP}>
                              {props.data.viewedByTheUsers} Views
                            </p>
                          </span>
                        </div>
                      </Col>
                      <Col xs={2} sm={2}>
                        <div style={{ width: "110px" }}>
                          <img
                            src="/av_timer.png"
                            style={{
                              width: "16px",
                              margin: "auto 0 0 -10px"
                            }}
                          />
                          <span
                            style={{
                              fontSize: "16px",
                              fontWeight: "400",
                            }}
                          >
                            <p className={styles.timerP}>
                              {`${year ? year + " years" : ""}` ||
                                `${month ? month + " Months" : ""}` ||
                                `${newday ? newday + " days" : ""}` ||
                                `${newhour ? newhour + " hours" : ""}` ||
                                `${newminute ? newminute + " minutes" : ""}`}
                            </p>
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Row>
                <Row>
                  <h1 className={styles.posttitle}>{props.data.title}</h1>
                </Row>
                <Row>
                  <ReactMarkdown
                    className={styles.postbody}
                    children={props.data.postByUser}
                    remarkPlugins={[remarkGfm]}
                    components={{
                      img: ({ node, ...props }) =>
                        fullsize ? (
                          <div className={styles.modal}>
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
                </Row>
                <Row>
                  <div className={`${styles.catList} category-list`}>
                    {props.data.categoryOfThePost.map((category, index) => (
                      <p key={index} className={styles.category}>
                        {category.categoryForPost}
                      </p>
                    ))}
                  </div>
                </Row>
                <Row>
                    <div style={{ width: "100%", display: "flex",justifyContent:"end" }}>
                      <p
                        style={{
                          marginLeft:"-12px",
                          paddingTop:"6px",
                          paddingRight:"12px"
                        }}
                      >
                        -
                      </p>
                      {props.data.creator_by.image ? (
                        <img
                          src={props.data.creator_by.image}
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
                        href={`/profile?user=${props.data.creator_by.creator_id}`}
                      >
                        {props.data.creator_by.first_name +
                          " " +
                          props.data.creator_by.last_name}
                      </Link>
                    </div>  
                    </div>
                </Row>
              </div>
              {/* <Col lg={1} md={2} sm={2} xs={2}>
                <div style={{ height: "50px", width: "5px" }}></div>
                <Image
                  className={
                    props.data.upvoted ? styles.upVotedIcon : styles.VoteIcon
                  }
                  onClick={() =>
                    sendVote(UpVotePostURL, props.data.post_id, props.setLogin)
                  }
                  alt="logo"
                  src="/mobupvote.png"
                  height={24}
                  width={24}
                  quality={100}
                />
                <p className={styles.voteText}>
                  {props.data.upVoteNumber - props.data.downVoteNumber}
                </p>
                <Image
                  className={
                    props.data.downvoted
                      ? styles.downVotedIcon
                      : styles.VoteIcon
                  }
                  onClick={() =>
                    sendVote(
                      DownVotePostURL,
                      props.data.post_id,
                      props.setLogin
                    )
                  }
                  alt="logo"
                  src="/mobdownvote.png"
                  height={24}
                  width={24}
                  quality={100}
                />
              </Col>
              <Col lg={11} md={10} sm={10} xs={10}>
                <Row className={styles.toprow}>
                  <div style={{ width: "10px", padding: "0px" }}></div>
                  <div style={{ display: "flex" }}>

                    <div className={styles.postuser}>
                      <Row className="justify-content-end">
                        <Col lg={3} md={3} xs={6}>
                          <div style={{ width: "110px" }}>
                            <img
                              src="/av_timer.png"
                              style={{
                                width: "16px",
                                margin: "auto 0 0 0px",
                              }}
                            />
                            <span
                              style={{
                                marginLeft: "3px",
                                fontSize: "16px",
                                fontWeight: "400",
                              }}
                            >
                              <p className={styles.timerP}>
                                {`${year ? year + " years" : ""}` ||
                                  `${month ? month + " Months" : ""}` ||
                                  `${newday ? newday + " days" : ""}` ||
                                  `${newhour ? newhour + " hours" : ""}` ||
                                  `${newminute ? newminute + " minutes" : ""}`}
                              </p>
                            </span>
                          </div>
                        </Col>
                        <Col lg={3} md={3} xs={6}>
                          <div style={{ width: "110px" }}>
                            <img
                              className={styles.eye}
                              src="/Eye.png"
                              style={{ width: "18.75px" }}
                            />
                            <span
                              style={{
                                marginLeft: "5px",
                                fontSize: "16px",
                                fontWeight: "400",
                              }}
                            >
                              <p className={styles.timerP}>
                                {props.data.viewedByTheUsers} Views
                              </p>
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Row>
                <Row>
                  <h1 className={styles.posttitle}>{props.data.title}</h1>
                </Row>
                <Row>
                  <ReactMarkdown
                    className={styles.postbody}
                    children={props.data.postByUser}
                    remarkPlugins={[remarkGfm]}
                    components={{
                      img: ({ node, ...props }) => (
                        <img
                          className={fullsize ? styles.mkdimg : styles.mkdimg2}
                          onClick={onclickhandler}
                          {...props}
                        />
                      ),
                    }}
                  />
                </Row>
                <Row>
                  <div className={`${styles.catList} category-list`}>
                    {props.data.categoryOfThePost.map((category, index) => (
                      <p key={index} className={styles.category}>
                        {category.categoryForPost}
                      </p>
                    ))}
                  </div>
                </Row>
                <Row className="justify-content-end">
                  <Col xs={{span:1}}>
                    <div style={{ width: "28px" }}>
                      {props.data.creator_by.image ? (
                        <img
                          src={props.data.creator_by.image}
                          style={{
                            height: "28px",
                            width: "28px",
                            borderRadius: "50%",
                          }}
                        />
                      ) : (
                        <img
                          src="/anonypic.png"
                          style={{
                            height: "28px",
                            width: "28px",
                            borderRadius: "50%",
                          }}
                        />
                      )}
                    </div>
                  </Col>

                  <Col xs={{span:6}}>
                    <div
                      style={{
                        width: "200px",
                        display: "inline-block",
                        paddingLeft: "8px",
                      }}
                    >
                      <Link
                        href={`/profile?user=${props.data.creator_by.creator_id}`}
                      >
                        {props.data.creator_by.first_name +
                          " " +
                          props.data.creator_by.last_name}
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col> */}
            </div>
          </Container>
        )}
      </Container>
      <div className={`row ${styles.postRow}`}>
        <div className="post-comments-container">
          <Container>
            <Row>
              <Col lg={{ span: 3, offset: 1 }} sm={{span: 6, offset: 2}} xs={{span: 6, offset: 2}}>
                <h2
                  className={styles.commentTitle}
                  style={{ margin: "10px 0 15px 0px" }}
                >
                  Comments
                </h2>
              </Col>
            </Row>
          </Container>
          <Container>
            {postComment &&
              postComment.map((com, index) => (
                <>
                  <PostComment
                    imgIdx={index}
                    key={com.pk}
                    comment={com}
                    sendVote={sendVote}
                    setLogin={props.setLogin}
                  />
                </>
              ))}
              {postComment &&
                postComment.length < props.data.comments.count &&
                postComment.length % commentPageSize == 0 && (
                  <Col lg={{ span: 3, offset: 1 }} sm={{span: 6, offset: 2}} xs={{span: 6, offset: 2}}>
                    
                    <span
                      onClick={() => getnewpostcomments(props.data.post_id)}
                      className={`${styles.commentButton}`}
                    >
                      <span style={{textDecoration:"underline"}}>View All</span>
                      
                    </span>
                    
                  </Col>
                )}
          </Container>

          <Container>
            <Row>
              <Col lg={{ span: 6, offset: 1 }} md={{ offset: 2}} sm={{span: 10, offset: 1}} xs={{span: 10, offset: 1}}>
                <div
                  className={`${styles.inputOuter} ${styles.commentInput}`}
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <input
                    className={`${styles.Input}`}
                    id="postComment"
                    type="text"
                    placeholder="   Add a Comment!"
                  />
                  <div style={{ marginLeft: "auto" }}>
                    <div style={{ position: "relative", width: "auto" }}>
                      <img
                        onClick={() =>
                          addpostcomment(
                            document.getElementById("postComment").value,
                            props.data.post_id,
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
    </div>
  );
};

export default DetailedPost;
