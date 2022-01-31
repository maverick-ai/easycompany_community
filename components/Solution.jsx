import styles from "../styles/Post.module.css";
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
import cookie from "cookie";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faChevronUp,
  faChevronDown,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import router, { useRouter } from "next/router";
const Solution = (props) => {
  const [solnComment, setsolnComment] = useState(props.comments.comments);
  const router = useRouter();

  const getnewsolncomments = async (id) => {
    const newsolncomments = await sendReq(
      `${SolutionCommentsURL}${id}/?page=${
        solnComment.length / commentPageSize + 1
      }`,
      document.cookie
    );
    setsolnComment((old) => [...old, ...newsolncomments.results]);
    console.log(solnComment);
  };

  const acceptsoln = async (id) => {
    const res = await sendReq(`${AcceptSolnURL}${id}/`, document.cookie, "PUT");
    if (res.message) {
      alert(res.message);
      if (res.message != "Only post creator can accept solution") window.location.reload();
    } else {
      router.push("/404");
    }
  };

  return (
    <div className={`Soln ${styles.solution}`}>
      <div className="row">
        <div className={`col-3 col-sm-2 col-md-1 ${styles.solnvotecol}`}>
          <FontAwesomeIcon
            className={
              props.solution.upvoted ? styles.upVotedIcon : styles.VoteIcon
            }
            icon={faChevronUp}
            onClick={() =>
              sendVote(UpVoteSolnURL, props.solution.id, props.setLogin)
            }
          />
          <p className={styles.voteText}>
            {props.solution.upVoteNumber - props.solution.downVoteNumber}
          </p>
          <FontAwesomeIcon
            className={
              props.solution.downvoted ? styles.downVotedIcon : styles.VoteIcon
            }
            icon={faChevronDown}
            onClick={() =>
              sendVote(DownVoteSolnURL, props.solution.id, props.setLogin)
            }
          />
          {props.creator != props.currentuser &&
            props.accepted == props.solution.id && (
              <FontAwesomeIcon className={styles.check} icon={faCheck} />
            )}
          {props.creator == props.currentuser && (
            <FontAwesomeIcon
              className={
                props.accepted == props.solution.id
                  ? styles.check
                  : styles.uncheck
              }
              onClick={() => acceptsoln(props.solution.id)}
              icon={faCheck}
            />
          )}
        </div>
        <div className={`col-9 col-sm-10 col-md-11 ${styles.solncol}`}>
          {/* <p className={styles.solutionBody}>{props.solution.solutionByUser}</p> */}
          <ReactMarkdown
            className={styles.solutionBody}
            children={props.solution.solutionByUser}
            remarkPlugins={[remarkGfm]}
          />
          <Link href={`/profile?user=${props.solution.creator_by.creator_id}`}>
            <p>
              -{" "}
              <span className={styles.userName}>
                {props.solution.creator_by.first_name +
                  " " +
                  props.solution.creator_by.last_name}
              </span>
            </p>
          </Link>
          <div className="soln-comments-container">
            <hr></hr>
            <h3 className={styles.commentTitle}>Comments</h3>
            <div className={styles.inputall}>
              <input
                className={`${styles.Input} ${styles.commentInput}`}
                id={`solnComment${props.solution.id}`}
                type="text"
                placeholder="Comment!"
              />
              <button
                onClick={() =>
                  addsolncomment(
                    document.getElementById(`solnComment${props.solution.id}`)
                      .value,
                    props.solution.id,
                    props.setLogin
                  )
                }
                className={styles.button}
              >
                Add Comment
              </button>
            </div>
            {solnComment &&
              solnComment.map((com) => (
                <SolutionComment
                  key={com.pk}
                  comment={com}
                  sendVote={sendVote}
                  setLogin={props.setLogin}
                />
              ))}

            {solnComment && solnComment.length < props.solution.comments.count && (
              <button
                onClick={() => getnewsolncomments(props.solution.id)}
                className={`${styles.button} ${styles.commentButton}`}
              >
                Load more comments
              </button>
            )}
            {/* {(!moreComments || solnComment.length%commentPageSize!=0 || !solnComment.length) && <h4 className={styles.nomore}>......</h4>  
                } */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
