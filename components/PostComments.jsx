import {UpVotePostCommentURL,DownVotePostCommentURL} from "./constants"

const PostComment = (props) => {
    return ( 
        <div className="post-comment">
            <p>{props.comment.commentByUser}</p>
            <p>Created By: {props.comment.first_name + " " + props.comment.last_name}</p>
            <p>Score: {props.comment.score}</p>
            <button onClick={()=>props.sendVote(UpVotePostCommentURL,props.comment.pk)} className="btn btn-primary">Upvote Comment</button>
            <button onClick={()=>props.sendVote(DownVotePostCommentURL,props.comment.pk)} className="btn btn-primary">Downvote Comment</button>
        </div>
    );
}
 
export default PostComment;