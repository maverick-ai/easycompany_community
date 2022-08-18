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
  const [winWidth, setWinWidth] = useState();

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      setWinWidth(true);
    } else {
      setWinWidth(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1200) {
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

  return (
    <div className="row post-comment">
      {props.imgIdx % 2 === 0 && !winWidth && (
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 1 }}>
              <div className={`${Styles.commentboxdiv}`}>
                <Row style={{ marginTop: "5px" }}>
                  <div style={{ width: "10px", padding: "0px" }}></div>
                  <Image
                    src="/profileImage.png"
                    height={28}
                    width={28}
                    quality={100}
                  />
                  <Col lg={3} md={4} sm={4}>
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
                  <Col lg={3} md={3} sm={4}>
                    <p className={Styles.timerP}>
                      {`${year ? year + " years" : ""}` ||
                        `${month ? month + " months" : ""}` ||
                        `${newday ? newday + " days" : ""}` ||
                        `${newhour ? newhour + " hours" : ""}` ||
                        `${newminute ? newminute + " minutes" : ""}`}
                    </p>
                  </Col>
                </Row>
                <p style={{ marginTop: "10px" }}>
                  {props.comment.commentByUser}
                </p>
              </div>
            </Col>
            <Col lg={3}>
              <div>
                <CommentImage />
              </div>
            </Col>
          </Row>
        </Container>
      )}
      {props.imgIdx % 2 !== 0 && !winWidth && (
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 1 }}>
              <div className={`${Styles.commentboxdiv}`}>
                <Row style={{ marginTop: "5px" }}>
                  <div style={{ width: "10px", padding: "0px" }}></div>
                  <Image
                    src="/profileImage.png"
                    height={28}
                    width={28}
                    quality={100}
                  />
                  <Col lg={3} md={3} sm={4}>
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
                  <Col lg={3} md={3} sm={4}>
                    <p className={Styles.timerP}>
                      {`${month ? month + " months" : ""}` ||
                        `${newday ? newday + " days" : ""}` ||
                        ` ${newhour} hours`}
                    </p>
                  </Col>
                </Row>
                <p style={{ marginTop: "10px" }}>
                  {props.comment.commentByUser}
                </p>
              </div>
            </Col>
            <Col lg={3}></Col>
          </Row>
        </Container>
      )}
      {winWidth && (
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 1 }}>
              <div className={`${Styles.commentboxdiv}`}>
                <Row style={{ marginTop: "5px" }}>
                  <div style={{ width: "10px", padding: "0px" }}></div>
                  <Image
                    src="/profileImage.png"
                    height={40}
                    width={40}
                    quality={100}
                  />
                  <Col lg={3} md={3} sm={4}>
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
                  <Col lg={3} md={3} sm={4}>
                    <p className={Styles.timerP}>
                      {`${month ? month + " months" : ""}` ||
                        `${newday ? newday + " days" : ""}` ||
                        ` ${newhour} hours`}
                    </p>
                  </Col>
                </Row>
                <p style={{ marginTop: "10px" }}>
                  {props.comment.commentByUser}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default PostComment;
