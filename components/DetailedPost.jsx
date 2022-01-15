import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";
import {sendVote,addanswer,addpostcomment} from "./requests"
import { UpVotePostURL,DownVotePostURL,PostCommentsURL,commentPageSize,Host } from "./constants";
import PostComment from "./PostComments"
import cookie from "cookie"

const DetailedPost = (props) => {

    const [postComment, setpostComment] = useState(props.data.comments);
    const [moreComments, setMoreComments] = useState(true);

    const getnewpostcomments = async (id, i) => {
        try {
          if (document.cookie) {
            var response = await fetch(
              `${PostCommentsURL}${id}/?page=${
                postComment.length / commentPageSize + 1
              }`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "*/*",
                  "Accept-Encoding": "gzip, deflate, br",
                  Connection: "keep-alive",
                  Host: Host,
                  Authorization: `Token ${cookie.parse(document.cookie).token}`,
                },
              }
            );
          } else {
            var response = await fetch(
              `${PostCommentsURL}${id}/?page=${
                postComment.length / commentPageSize + 1
              }`
            );
          }
          const newComments = await response.json();
          if (newComments.detail) {
              console.log(newComments.detail);
              setMoreComments(false);
          }
          if (newComments.results) {
            setpostComment((old) => [...old, ...newComments.results]);
          }
        } catch (err) {
          console.log(err);
          setMoreComments(false);
        }
    };

    return ( 
        <div className="post-content">
            <h1>{props.data.title}</h1>
            <ReactMarkdown
            children={props.data.postByUser}
            remarkPlugins={[remarkGfm]}
            />
            <p>{props.data.upVoteNumber} Upvotes</p>
            <p>{props.data.downVoteNumber} Downvotes</p>
            <button
            onClick={() => sendVote(UpVotePostURL, props.data.post_id)}
            className="btn btn-primary"
            >
            Upvote Post
            </button>
            <button
            onClick={() => sendVote(DownVotePostURL, props.data.post_id)}
            className="btn btn-primary"
            >
            Downvote Post
            </button>
            <input id="answer" type="text" placeholder="Add Answer" />
            <button
            onClick={() =>
                addanswer(document.getElementById("answer").value, props.data.post_id)
            }
            className="btn btn-primary"
            >
            Add Answer
            </button>
            <input id="postComment" type="text" placeholder="Add Comment" />
            <button
            onClick={() =>
                addpostcomment(
                document.getElementById("postComment").value,
                props.data.post_id
                )
            }
            className="btn btn-primary"
            >
            Add Comment
            </button>
            <div className="post-comments-container">
            <h2>Comments</h2>
            {postComment &&
                postComment.map((com) => (
                <PostComment key={com.pk} comment={com} sendVote={sendVote} />
                ))}
            {moreComments && postComment.length%commentPageSize==0 && postComment.length && (
                <button
                onClick={() => getnewpostcomments(props.data.post_id)}
                className="btn btn-primary"
                >
                Load more comments
                </button>
            )}
            {(!moreComments || postComment.length%commentPageSize!=0 || !postComment.length) &&
                <p>No more Post comments</p>  
            }
            </div>
        </div>
    );
}

export default DetailedPost;