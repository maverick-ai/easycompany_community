import { DownVoteSolnURL,UpVoteSolnURL,SolutionCommentsURL,commentPageSize,Host } from "./constants";
import {sendVote,addsolncomment,sendReq} from "./requests";
import SolutionComment from "./SolutionComment";
import { useState } from "react";
import cookie from "cookie";
import Link from "next/link"
const Solution = (props)=>{

  const [solnComment, setsolnComment] = useState(props.comments);
  const [moreComments, setMoreComments] = useState(true);

    const getnewsolncomments = async (id) => {
        const newsolncomments = await sendReq(`${SolutionCommentsURL}${id}/?page=${solnComment.length / commentPageSize + 1}`, document.cookie);
        if (newsolncomments.detail) {
          console.log(newsolncomments.detail);
          setMoreComments(false);
        } else {
          setsolnComment((old)=> [...old, ...newsolncomments.results])
          }
          console.log(solnComment);
      };

  return(
    <div className="Soln">
          <p>{props.solution.solutionByUser}</p>
          <Link href={`/profile?user=${props.solution.creator_by.creator_id}`}><p>{props.solution.creator_by.first_name + " " + props.solution.creator_by.last_name}</p></Link>
          <p>User rating: {props.solution.creator_by.rating}</p>
          <p>{props.solution.upVoteNumber} Upvotes</p>
          <p>{props.solution.downVoteNumber} Downvotes</p>
          <button
          onClick={() => sendVote(UpVoteSolnURL, props.solution.id, props.setLogin)}
          className="btn btn-primary">
          Upvote Answer
          </button>
          <button
          onClick={() => sendVote(DownVoteSolnURL, props.solution.id, props.setLogin)}
          className="btn btn-primary"
          >
          Downvote Answer
          </button>
          <input
          id={`solnComment${props.solution.id}`}
          type="text"
          placeholder="Add Comment"
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
          className="btn btn-primary"
          >
          Add Comment
          </button>

          <div className="soln-comments-container">
          <h3>Comments</h3>
          {solnComment && solnComment.map((com) => (
              <SolutionComment key={com.pk} comment={com} sendVote={sendVote} setLogin={props.setLogin} />
          ))}

          {moreComments && solnComment.length && solnComment.length%commentPageSize==0 &&
              <button
              onClick={() => getnewsolncomments(props.solution.id)}
              className="btn btn-primary"
              >
              Load more comments
              </button>
          }
          {(!moreComments || solnComment.length%commentPageSize!=0 || !solnComment.length) && <p>No More solution Comments</p>}
      </div>
  </div>
  );
}

export default Solution;