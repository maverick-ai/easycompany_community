import { DownVoteSolnURL,UpVoteSolnURL,SolutionCommentsURL,commentPageSize,Host } from "./constants";
import {sendVote,addsolncomment} from "./requests";
import SolutionComment from "./SolutionComment";
import { useState } from "react";
import cookie from "cookie";
const Solution = (props)=>{

  const [solnComment, setsolnComment] = useState(props.comments);
  const [moreComments, setMoreComments] = useState(true);

    const getnewsolncomments = async (id) => {
        try {
          if (document.cookie) {
            var response = await fetch(`${SolutionCommentsURL}${id}/?page=${solnComment.length / commentPageSize + 1}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Accept: "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                Connection: "keep-alive",
                Host: Host,
                Authorization: `Token ${cookie.parse(document.cookie).token}`,
              },
            });
          } else {
            var response = await fetch(
              `${SolutionCommentsURL}${id}/?page=${
                solnComment.length / commentPageSize + 1
              }`
            );
          }
          const newsolncomments = await response.json();
          if (newsolncomments.detail) {
            console.log(newsolncomments.detail);
            setMoreComments(false);
          } else {
            setsolnComment((old)=> [...old, ...newsolncomments.results])
            }
            console.log(solnComment);
          }
         catch (err) {
          console.log(err);
          setMoreComments(false);
        }
      };

  return(
    <div className="Soln">
          <p>{props.solution.solutionByUser}</p>
          <p>
          Created By: {props.solution.first_name + " " + props.solution.last_name}
          </p>
          <p>{props.solution.upVoteNumber} Upvotes</p>
          <p>{props.solution.downVoteNumber} Downvotes</p>
          <button
          onClick={() => sendVote(UpVoteSolnURL, props.solution.id)}
          className="btn btn-primary">
          Upvote Answer
          </button>
          <button
          onClick={() => sendVote(DownVoteSolnURL, props.solution.id)}
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
              props.solution.id
              )
          }
          className="btn btn-primary"
          >
          Add Comment
          </button>

          <div className="soln-comments-container">
          <h3>Comments</h3>
          {solnComment && solnComment.map((com) => (
              <SolutionComment key={com.pk} comment={com} sendVote={sendVote} />
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