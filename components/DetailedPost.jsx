import styles from "../styles/Post.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";
import {sendVote,addpostcomment,sendReq} from "./requests"
import { UpVotePostURL,DownVotePostURL,PostCommentsURL,commentPageSize,Host } from "./constants";
import PostComment from "./PostComments"
import cookie from "cookie"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {faChevronUp,faChevronDown} from "@fortawesome/free-solid-svg-icons";


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
            <div className={`row ${styles.postRow}`}>
                <div className={`col-3 col-sm-2 col-md-1 ${styles.colPaddingLeft}`}>
                    <FontAwesomeIcon className={props.data.upvoted ? styles.upVotedIcon : styles.VoteIcon} icon={faChevronUp}  onClick={() => sendVote(UpVotePostURL, props.data.post_id, props.setLogin)} />
                    <p className={styles.voteText}>{props.data.upVoteNumber - props.data.downVoteNumber}</p>
                    <FontAwesomeIcon className={props.data.downvoted? styles.downVotedIcon: styles.VoteIcon} icon={faChevronDown} onClick={() => sendVote(UpVotePostURL, props.data.post_id, props.setLogin)}/>
                </div>
                <div className={`col-9 col-sm-10 col-md-11 ${styles.colPaddingRight}`}>
                    <h1 className={styles.posttitle}>{props.data.title}</h1>
                    <Link href={`/profile?user=${props.data.creator_by.creator_id}`}><p>- <span className={styles.postuser}>{props.data.creator_by.first_name + " " + props.data.creator_by.last_name}</span></p></Link>
                    <div>
                    <ReactMarkdown className={styles.postbody}
                    children={props.data.postByUser}
                    remarkPlugins={[remarkGfm]}
                    />
                    <div className={`${styles.catList} category-list`}>
                        {props.data.categoryOfThePost.map(category => (
                            <p className={styles.category}>{category.categoryForPost}</p>
                        ))}
                    </div>
                    </div>
                    <hr></hr>
                    <div className="post-comments-container">
                        <h2 className={styles.commentTitle}>Comments</h2>
                        <div className={styles.inputall}></div>
                        <input className={styles.Input} id="postComment" type="text" placeholder="Comment!" />
                        <button
                        onClick={() =>
                            addpostcomment(
                            document.getElementById("postComment").value,
                            props.data.post_id,
                            props.setLogin
                            )
                        }
                        className={styles.button} 
                        >
                        Add Comment
                        </button>
                        </div>
                        {postComment &&
                            postComment.map((com) => (
                            <PostComment key={com.pk} comment={com} sendVote={sendVote} setLogin={props.setLogin}/>
                            ))}
                            
                        {moreComments && postComment.length!=0 && (postComment.length%commentPageSize==0) && (
                            <button
                            onClick={() => getnewpostcomments(props.data.post_id)}
                            className={styles.button} 
                            >
                            Load more comments
                            </button>)
                        }
                        {/* { (!moreComments || !postComment.length || postComment.length%commentPageSize!=0) &&
                            <h4 className={styles.nomore}>......</h4>  
                        } */}
                    </div>
                </div>
            </div>
    
    );
}

export default DetailedPost;