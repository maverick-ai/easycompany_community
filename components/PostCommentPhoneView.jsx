import { Container, Row, Col } from "react-bootstrap";
import Styles from "../styles/Post.module.css";
import CommentImage from "./DetailedPostComponents/CommentImage";
import Image from "next/image";
import Link from "next/link";

function PostCommentPhoneView(props){
    return(
        <Container>
        <Row>
          <Col lg={{ span: 8, offset: 1 }} sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
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
    );
}

export default PostCommentPhoneView;