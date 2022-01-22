import { UpVoteSolnCommentURL,DownVoteSolnCommentURL } from "./constants";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {faChevronDown,faChevronUp} from "@fortawesome/free-solid-svg-icons";
import Styles from "../styles/Post.module.css"

const SolutionComment = (props) => {
    return (
        <div className="row">
            <div className={`col-3 col-sm-2 col-md-1 ${Styles.commentVoteDiv}`}>
              <div className={Styles.postcomdiv}>
                <FontAwesomeIcon className={`${props.comment.upvoted ? Styles.upVotedIcon : Styles.VoteIcon} ${Styles.solncomm} ${Styles.upVoteCommentIcon}`} icon={faChevronUp}  onClick={() => props.sendVote(UpVoteSolnCommentURL,props.comment.pk,props.setLogin)} />
                <FontAwesomeIcon className={`${props.comment.downvoted ? Styles.downVotedIcon : Styles.VoteIcon} ${Styles.solncomm}`} icon={faChevronDown}  onClick={() => props.sendVote(DownVoteSolnCommentURL,props.comment.pk,props.setLogin)} />
              </div>
              <p className={Styles.commentVoteText}>{props.comment.upVoteNumber - props.comment.downVoteNumber}</p>
            </div>
            <div className="col-9 col-sm-10 col-md-11">
                <p>{props.comment.commentByUser} - <Link href={`/profile?user=${props.comment.creator_by.creator_id}`}><span className={Styles.userName}>{props.comment.creator_by.first_name + " " + props.comment.creator_by.last_name}</span></Link></p>
            </div>
            <hr></hr>
        </div>
    );
}
 
export default SolutionComment;