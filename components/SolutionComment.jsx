import { UpVoteSolnCommentURL,DownVoteSolnCommentURL } from "./constants";

const SolutionComment = (props) => {
    return ( 
        <div>
            <p>{props.comment.commentByUser}</p>
            <p>Created By: {props.comment.first_name + " " + props.comment.last_name}</p>
            <p>Score: {props.comment.score}</p>
            <button onClick={()=>props.sendVote(UpVoteSolnCommentURL,comment.pk)} className="btn btn-primary">Upvote Comment</button>
            <button onClick={()=>props.sendVote(DownVoteSolnCommentURL,comment.pk)} className="btn btn-primary">Downvote Comment</button>
        </div>
    );
}
 
export default SolutionComment;