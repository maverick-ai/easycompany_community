import { AddSolnURL,AddPostcommentURL,AddSolncommentURL,Host } from "./constants";
import cookie from "cookie"

const sendVote = async (url, id) => {
    try {
      const response = await fetch(url + id + "/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Length": 0,
          Host: Host,
          Authorization: `Token ${cookie.parse(document.cookie).token}`,
        },
      });
      const resVote = await response.json();
      if (resVote.message) {
        alert(resVote.message);
      } else {
        throw resVote;
      }
    } catch (err) {
      console.log(err);
    }
};

const addanswer = async (answer, id) => {
    const post = JSON.stringify({
      solutionByUser: answer,
      post: id,
    });
    console.log(post);
    const res = await fetch(AddSolnURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "Content-Length": answer.length,
        Host: Host,
        Authorization: `Token ${cookie.parse(document.cookie).token}`,
      },
      body: post,
    });
  
    console.log(res);
  
    window.location.reload();
};
  
const addpostcomment = async (comment, id) => {
    const postComment = JSON.stringify({
        commentByUser: comment,
        post: id,
    });

    const res = await fetch(AddPostcommentURL, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "Content-Length": comment.length,
        Host: Host,
        Authorization: `Token ${cookie.parse(document.cookie).token}`,
        },
        body: postComment,
    });
    console.log(res);

    window.location.reload();
};

const addsolncomment = async (comment, id) => {
    const solncomment = JSON.stringify({
      commentByUser: comment,
      solution: id,
    });
  
    const res = await fetch(AddSolncommentURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "Content-Length": comment.length,
        Host: Host,
        Authorization: `Token ${cookie.parse(document.cookie).token}`,
      },
      body: solncomment,
    });
    console.log(res);

    window.location.reload();
  };

export{sendVote,addanswer,addpostcomment,addsolncomment}