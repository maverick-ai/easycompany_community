import { UpVotePostCommentURL, DownVotePostCommentURL } from "./constants";
import CommentImage from "./DetailedPostComponents/CommentImage";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
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
      }else {
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
                <Row style={{ marginTop: "5px" }}>
                  <div style={{ width: "10px", padding: "0px" }}></div>
                  <Image
                    src="/profileImage.png"
                    height={28}
                    width={28}
                    quality={100}
                  />
                  <Col lg={{span: 8}} md={8}>
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
                </Row>
                <p style={{ marginTop: "10px", width: "68%" }}>
                  {props.comment.commentByUser}
                </p>
                <Row>
                  <Col
                    lg={{ span: 3, offset: 10 }}
                    md={{ span: 3, offset: 10 }}
                    sm={{ span: 3, offset: 9 }}
                  >

                  </Col>
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
                <Row style={{ marginTop: "5px" }}>
                  <div style={{ width: "10px", padding: "0px" }}></div>
                  <Image
                    src="/profileImage.png"
                    height={28}
                    width={28}
                    quality={100}
                  />
                  <Col lg={{span: 8}} md={8}>
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
                </Row>
                <p style={{ marginTop: "10px" }}>
                  {props.comment.commentByUser}
                </p>
                <Row>
                  <Col
                    lg={{ span: 3, offset: 10 }}
                    md={{ span: 3, offset: 10 }}
                    sm={{ span: 3, offset: 9 }}
                  >

                  </Col>
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
            <Col lg={{ span: 8, offset: 1 }} sm={{ span: 10, offset: 0}} xs={{ span: 10, offset: 0 }}>
              <div className={`${Styles.commentboxdiv}`}>
                <Row style={{ marginTop: "5px" }}>
                  <Col sm={2} xs={3}>
                    <Image
                      src="/profileImage.png"
                      height={35}
                      width={35}
                      quality={100}
                    />
                  </Col>
                  <Col sm={10} xs={9}>
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
                <p style={{ marginTop: "10px", color:"#D1D1D1" }}>
                  {props.comment.commentByUser}
                </p>
                <Row>
                  <Col
                    lg={{ span: 3, offset: 10 }}
                    md={{ span: 3, offset: 10 }}
                    sm={{ span: 3, offset: 9 }}
                    xs={{ span: 5, offset: 7 }}
                  >
                    <img src="/av_timer.png" style={{ width: "14px" }} />
                    <p className={Styles.timerP}>
                      {`${year ? year + " years" : ""}` ||
                        `${month ? month + " months" : ""}` ||
                        `${newday ? newday + " days" : ""}` ||
                        `${newhour ? newhour + " hours" : ""}` ||
                        `${newminute ? newminute + " minutes" : ""}`}
                    </p>
                  </Col>
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
