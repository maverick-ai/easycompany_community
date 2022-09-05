import { UpVotePostCommentURL, DownVotePostCommentURL } from "./constants";
import CommentImage from "./DetailedPostComponents/CommentImage";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faUserCircle);
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Styles from "../styles/Post.module.css";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const PostComment = (props) => {
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
  var Date_A = new Date(props.comment.time);

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

  return (
    <div className="row post-comment">
      {props.imgIdx % 2 === 0 && !winWidth && (
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 1 }} md={{ span: 11, offset: 2 }}>
              <div className={`${Styles.commentboxdiv}`}>
                <div style={{ marginTop: "5px", display:"flex" }}>
                  
                  {props.comment.creator_by.image ? (
                    <div style={{ marginTop: "5px"}}>
                        <img
                          src={props.comment.creator_by.image}
                          style={{
                            height: "28px",
                            width: "28px",
                            borderRadius: "50%",
                          }}
                        /></div>
                      ) : (<div style={{ marginTop: "5px"}}>
                        <FontAwesomeIcon icon="user-circle" 
                          style={{
                            height: "28px",
                            width: "28px",
                            borderRadius: "50%",
                          }}
                        /></div>
                      )}
                      <div style={{ width: "10px", padding: "0px" }}></div>
                  <Col lg={{ span: 8 }} md={8}>
                    <div className={Styles.userName}>
                      <Link
                        href={`/profile?user=${props.comment.creator_by.creator_id}`}
                      >
                        {props.comment.creator_by.first_name +
                          " " +
                          props.comment.creator_by.last_name}
                      </Link>
                    </div>
                    <div className={Styles.timerDiv}>
                      <img src="/av_timer.png" style={{ width: "14px" }} />
                      <p className={Styles.timerP}>
                        {`${year ? year + " years" : ""}` ||
                          `${month ? month + " months" : ""}` ||
                          `${newday ? newday + " days" : ""}` ||
                          `${newhour ? newhour + " hours" : ""}` ||
                          `${newminute ? newminute + " minutes" : ""}`}
                      </p>
                    </div>
                  </Col>
                </div>
                <p style={{ marginTop: "10px", width: "68%" }}>
                  {props.comment.commentByUser}
                </p>
                <Row>
                  <Col
                    lg={{ span: 3, offset: 10 }}
                    md={{ span: 3, offset: 10 }}
                    sm={{ span: 3, offset: 9 }}
                  ></Col>
                </Row>
              </div>
            </Col>
            <Col lg={3}>
              <div className={Styles.commentImagediv}>
                <CommentImage />
              </div>
            </Col>
          </Row>
        </Container>
      )}
      {props.imgIdx % 2 !== 0 && !winWidth && (
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 1 }} md={{ span: 11, offset: 2 }}>
              <div className={`${Styles.commentboxdiv}`}>
                <div style={{ marginTop: "5px" , display:"flex"}}>
                  
                  {props.comment.creator_by.image ? (
                    <div style={{ marginTop: "5px"}}>
                        <img
                          src={props.comment.creator_by.image}
                          style={{
                            height: "28px",
                            width: "28px",
                            borderRadius: "50%",
                          }}
                        />
                        </div>
                      ) : (<div style={{ marginTop: "5px"}}>
                        <FontAwesomeIcon icon="user-circle" 
                          style={{
                            height: "28px",
                            width: "28px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>)}
                      <div style={{ width: "10px", padding: "0px" }}></div>
                  <Col lg={{ span: 8 }} md={8}>
                    <div className={Styles.userName}>
                      <Link
                        href={`/profile?user=${props.comment.creator_by.creator_id}`}
                      >
                        {props.comment.creator_by.first_name +
                          " " +
                          props.comment.creator_by.last_name}
                      </Link>
                    </div>
                    <div className={Styles.timerDiv}>
                      <img src="/av_timer.png" style={{ width: "14px" }} />
                      <p className={Styles.timerP}>
                        {`${year ? year + " years" : ""}` ||
                          `${month ? month + " months" : ""}` ||
                          `${newday ? newday + " days" : ""}` ||
                          `${newhour ? newhour + " hours" : ""}` ||
                          `${newminute ? newminute + " minutes" : ""}`}
                      </p>
                    </div>
                  </Col>
                </div>
                <p style={{ marginTop: "10px" }}>
                  {props.comment.commentByUser}
                </p>
                <Row>
                  <Col
                    lg={{ span: 3, offset: 10 }}
                    md={{ span: 3, offset: 10 }}
                    sm={{ span: 3, offset: 9 }}
                  ></Col>
                </Row>
              </div>
            </Col>
            <Col lg={3}></Col>
          </Row>
        </Container>
      )}
      {winWidth && (
        <Container>
          <Row>
            <Col
              lg={{ span: 8, offset: 1 }}
              sm={{ span: 10, offset: 0 }}
              xs={{ span: 10, offset: 0 }}
            >
              <div className={`${Styles.commentboxdiv}`}>
                <Row style={{ marginTop: "5px" }}>
                  <Col sm={2} xs={3}>
                  {props.comment.creator_by.image ? (
                        <img
                          src={props.comment.creator_by.image}
                          style={{
                            height: "35px",
                            width: "35px",
                            borderRadius: "50%",
                          }}
                        />
                      ) : (
                        <FontAwesomeIcon icon="user-circle" 
                          style={{
                            height: "35px",
                            width: "35px",
                            borderRadius: "50%",
                          }}
                        />
                      )}
                  </Col>
                  <Col sm={9} xs={8}>
                    <div className={Styles.userName}>
                      <Link
                        href={`/profile?user=${props.comment.creator_by.creator_id}`}
                      >
                        {props.comment.creator_by.first_name +
                          " " +
                          props.comment.creator_by.last_name}
                      </Link>
                    </div>
                  </Col>
                </Row>
                <p style={{ color: "#D1D1D1" }}>
                  {props.comment.commentByUser}
                </p>
                <Row>
                  <div style={{textAlign:"right", marginBottom:"5px"}}>
                    <img src="/av_timer.png" style={{ width: "14px" }} />
                    <p className={Styles.timerP}>
                      {`${year ? year + " years" : ""}` ||
                        `${month ? month + " months" : ""}` ||
                        `${newday ? newday + " days" : ""}` ||
                        `${newhour ? newhour + " hours" : ""}` ||
                        `${newminute ? newminute + " minutes" : ""}`}
                    </p>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default PostComment;
