import { AddSolnURL, AddPostcommentURL, AddSolncommentURL, Host } from "./constants";
import cookie from "cookie"
import router from "next/router";
import RenderResult from "next/dist/server/render-result";

const sendReq = async (url, tokenCookie = null, method = "GET", data = null, setfunc = null) => {
  let response = {};
  try {
    if (data) {
      if (tokenCookie) {
        const headers = new Headers({
          "Content-Type": "application/json",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Length": 0,
          Host: Host,
          Authorization: `Token ${cookie.parse(tokenCookie).token}`,
        });
        response = await fetch(url, {
          method: method,
          headers: headers,
          body: data
        });
      }
      else {
        const headers = new Headers({
          "Content-Type": "application/json",
          "Accept": "*/*",
          "Accept-Encoding": "gzip,deflate,br",
          "Connection": "keep-alive",
          "Host": Host
        });
        response = await fetch(url, {
          method: method,
          headers: headers,
          body: data
        });
      }
    }
    else {
      if (tokenCookie) {
        const headers = new Headers({
          "Content-Type": "application/json",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Content-Length": 0,
          Host: Host,
          Authorization: `Token ${cookie.parse(tokenCookie).token}`,
        });
        response = await fetch(url, {
          method: method,
          headers: headers
        })
      }
      else {
        const headers = new Headers({
          "Content-Type": "application/json",
          "Accept": "*/*",
          "Accept-Encoding": "gzip,deflate,br",
          "Connection": "keep-alive",
          "Host": Host
        });
        response = await fetch(url, {
          method: method,
          headers: headers
        })
      }
    }
    if (response.status >= 300) {
      throw (response.status);
    }
  }
  catch (err) {
    if (err === 403) {
      if (setfunc) {
        setfunc(false);
      }
      else {
        try {
          router.push("/login");
        }
        catch {
          throw ("redirect to login");
        }
      }
    }
    else {
      try {
        router.push("/404");
      }
      catch {
        throw ("redirect error")
      }
    }

  }
  try {
    return await response.json()
  }
  catch {
    return response;
  }
}

const sendVote = async (url, id, setFunc) => {
  if (document.cookie) {
    const resVote = await sendReq(url + id + "/", document.cookie, "PUT", null, setFunc);
    if (resVote.message) {
      alert(resVote.message);
      if (resVote.message != "Creator cannot vote")
        window.location.reload();
    }
  }
  else {
    setFunc(false);
  }
};

const addanswer = async (answer, id, setFunc) => {
  if (document.cookie) {
    const post = JSON.stringify({
      solutionByUser: answer,
      post: id,
    });
    const resAddAnswer = await sendReq(AddSolnURL, document.cookie, "POST", post, setFunc);
    if (!resAddAnswer.status) {
      window.location.reload();
    }
  }
  else {
    setFunc(false);
  }
};

const addpostcomment = async (comment, id, setFunc) => {
  if (document.cookie) {
    const postComment = JSON.stringify({
      commentByUser: comment,
      post: id,
    });
    const res = await sendReq(AddPostcommentURL, document.cookie, "POST", postComment, setFunc);
    if (!res.status) {
      window.location.reload();
    }
  }
  else {
    setFunc(false);
  }

};

const addsolncomment = async (comment, id, setFunc) => {

  if (document.cookie) {
    const solncomment = JSON.stringify({
      commentByUser: comment,
      solution: id,
    });
    const res = await sendReq(AddSolncommentURL, document.cookie, "POST", solncomment, setFunc);
    if (!res.status) {
      window.location.reload();
    }

  }
  else {
    setFunc(false);
  }
};

export { sendVote, addanswer, addpostcomment, addsolncomment, sendReq }