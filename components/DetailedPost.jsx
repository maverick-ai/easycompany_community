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
  const [postComment, setpostComment] = useState(props.data.comments.comments);
  const [fullsize,setFullsize] = useState(false);

  const [winWidth, setWinWidth] = useState();

  function onclickhandler(){
    if(!fullsize)
    setFullsize(true);
    if(fullsize) setFullsize(false);
  }

  const dateJoined = moment(props.data.created_date).format("MMM Do YY");

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
 console.log("-------------")
  console.log(props.data);

//   const renderers = {
//     //This custom renderer changes how images are rendered
//     //we use it to constrain the max width of an image to its container
//     image: ({
//         alt,
//         src,
//         title,
//     }) => (
//         <img 
//             alt={alt} 
//             src={src} 
//             title={title} 
//             style={{ maxWidth: 100 }}  />
//     ),
// };

  return (
    <div className="post-content">
      <Container>
        <Container>
          <Row>
            <Col lg={1} md={2} sm={2}>
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
                  props.data.downvoted ? styles.downVotedIcon : styles.VoteIcon
                }
                onClick={() =>
                  sendVote(DownVotePostURL, props.data.post_id, props.setLogin)
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
                      src="/profilepic.png"
                      height={28}
                      width={28}
                      quality={100}
                    />
                  </div>
                  {/* <Col lg={3} md={3} sm={4}> */}
                  <div className={styles.postuser}>
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
                    <div style={{ width: "120px" }}>
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
                        {props.data.viewedByTheUsers} Views
                      </span>
                    </div>
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
              
                <ReactMarkdown
                
                  className={styles.postbody}
                  children={props.data.postByUser}
                  remarkPlugins={[remarkGfm]}
                  components={{img:({node,...props})=><img className={fullsize?styles.mkdimg:styles.mkdimg2} onClick={onclickhandler} {...props}/>}}
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
            </Col>
          </Row>
        </Container>
      </Container>
      <div className={`row ${styles.postRow}`}>
        <div className="post-comments-container">
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
                    id="postComment"
                    type="text"
                    placeholder="   Add a Comment!"
                  />
                  <div style={{ marginTop: "7px" }}>
                    <Image
                      onClick={() =>
                        addpostcomment(
                          document.getElementById("postComment").value,
                          props.data.post_id,
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
              {postComment &&
                postComment.length < props.data.comments.count &&
                postComment.length % commentPageSize == 0 && (
                  <Col>
                    <button
                      onClick={() => getnewpostcomments(props.data.post_id)}
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
    </div>
  );
};

export default DetailedPost;
