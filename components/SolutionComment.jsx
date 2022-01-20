import { UpVoteSolnCommentURL,DownVoteSolnCommentURL } from "./constants";
import Link from "next/link"

const SolutionComment = (props) => {
    return ( 
        <div>
            <p>{props.comment.commentByUser}</p>
            <Link href={`/profile?user=${props.comment.creator_by.creator_id}`}><p>{props.comment.creator_by.first_name + " " + props.comment.creator_by.last_name}</p></Link>
            <p>User rating: {props.comment.creator_by.rating}</p>
            <p>Score: {props.comment.score}</p>
            <button onClick={()=>props.sendVote(UpVoteSolnCommentURL,props.comment.pk,props.setLogin)} className="btn btn-primary">Upvote Comment</button>
            <button onClick={()=>props.sendVote(DownVoteSolnCommentURL,props.comment.pk,props.setLogin)} className="btn btn-primary">Downvote Comment</button>
        </div>
    );
}
 
export default SolutionComment;