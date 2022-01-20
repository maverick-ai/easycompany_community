import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";
import {sendVote,addanswer,addpostcomment,sendReq} from "./requests"
import { UpVotePostURL,DownVotePostURL,PostCommentsURL,commentPageSize,Host } from "./constants";
import PostComment from "./PostComments"
import cookie from "cookie"
import Link from "next/link";

const DetailedPost = (props) => {

    const [postComment, setpostComment] = useState(props.data.comments);
    const [moreComments, setMoreComments] = useState(true);

    const getnewpostcomments = async (id, i) => {
      const newComments = await sendReq(`${PostCommentsURL}${id}/?page=${postComment.length / commentPageSize + 1}`, document.cookie);
      if (newComments.detail) {
          console.log(newComments.detail);
          setMoreComments(false);
      }
      if (newComments.results) {
        setpostComment((old) => [...old, ...newComments.results]);
      }
    };

    return ( 
        <div className="post-content">
            <h1>{props.data.title}</h1>
            <Link href={`/profile?user=${props.data.creator_by.creator_id}`}><p>{props.data.creator_by.first_name + " " + props.data.creator_by.last_name}</p></Link>
            <p>User rating: {props.data.creator_by.rating}</p>
            <ReactMarkdown
            children={props.data.postByUser}
            remarkPlugins={[remarkGfm]}
            />
            <p>{props.data.upVoteNumber} Upvotes</p>
            <p>{props.data.downVoteNumber} Downvotes</p>
            <button
            onClick={() => sendVote(UpVotePostURL, props.data.post_id, props.setLogin)}
            className="btn btn-primary"
            >
            Upvote Post
            </button>
            <button
            onClick={() => sendVote(DownVotePostURL, props.data.post_id, props.setLogin)}
            className="btn btn-primary"
            >
            Downvote Post
            </button>
            <input id="answer" type="text" placeholder="Add Answer" />
            <button
            onClick={() =>
                addanswer(document.getElementById("answer").value, props.data.post_id, props.setLogin)
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
                props.data.post_id,
                props.setLogin
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
                <PostComment key={com.pk} comment={com} sendVote={sendVote} setLogin={props.setLogin}/>
                ))}
            {moreComments && postComment && postComment.length%commentPageSize==0 && (
                <button
                onClick={() => getnewpostcomments(props.data.post_id)}
                className="btn btn-primary"
                >
                Load more comments
                </button>
            )}
            { (!moreComments || !postComment || postComment.length%commentPageSize!=0) &&
                <p>No more Post comments</p>  
            }
            </div>
        </div>
    );
}

export default DetailedPost;