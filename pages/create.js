import styles from "../styles/Create.module.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useRef } from "react";
import TagsInput from "../components/InputTag";
import { CreatePostURL, Host } from "../components/constants";
import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import remarkGfm from "remark-gfm";
import { getDefaultToolbarCommands } from "react-mde";
import { sendReq } from "../components/requests";
import LoginPopUp from "../components/LogInPopUp";
import router from "next/router";

let initialState = 0;

export default function Create() {
  const titleRef = useRef();

  const [input, setInput] = useState("");
  const [bodyvalue, setbValue] = useState("");
  const [tags, setTags] = useState([]);
  const [fadeState, setFadeState] = useState(false);
  const [travelQuestionState, setTravelQuestionState] = useState({
    title: "eg. What is the best beach in Southern part of India",
    body: "eg. I am travelling to India on a business trip for 7 days. I have one weekend free. I am staying in Chennai. Are there any good beaches nearby ?",
  });

  const travelQuestions = [
    {
      title: "eg. Best Butter chicken (Curry) in Delhi",
      body: "eg. I am travelling to India from UK. I want a good and hygenic place where I can find good butter chicken. Any suggestions",
    },
    {
      title: "eg. Is Capadocia worth visiting ?",
      body: "eg. I am travelling to Turkey on a business trip. I am free on Weekend. Is Capadocia really beautifull as mentioned in many travell websites ?",
    },
    {
      title: "eg. Which caribbean island to go ?",
      body: "eg. I am planning a vaccation with my family to Carribean. I am taking my wife and my two 12 year old twins. I’m curious about which island to go and which is better family friendly ? Is there any important thing that I should remember while planning.",
    },
  ];

  useEffect(() => {
    setInterval(() => {
      setFadeState(true);

      setTimeout(() => {
        initialState += 1;
        setTravelQuestionState(
          travelQuestions[initialState % travelQuestions.length]
        );
        setFadeState(false);
      }, 1500);
    }, 8000);
    console.log(getDefaultToolbarCommands());
  }, []);

  async function createPostRequest() {
    const categories = [];
    tags.map((tag) => {
      categories.push({ categoryForPost: tag });
    });
    const post = JSON.stringify({
      title: titleRef.current.value,
      categoryOfThePost: categories,
      postByUser: bodyvalue,
    });
    console.log(post);
    if (document.cookie) {
      const response = await sendReq(
        CreatePostURL,
        document.cookie,
        "POST",
        post,
        setIsLoggedIn
      );
      if (!response.status) {
        router.push(`/posts?postid=${response.post_id}&page=1`);
      }
    } else {
      setIsLoggedIn(false);
    }
  }

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [selectedTab, setSelectedTab] = useState("write");

  return (
    <div className={styles.Main}>
      <div className={styles.Section}>
        <div>
          <h3>ASK THE COMMUNITY</h3>
          <div>
            <h1>The</h1>
            <h1>Community</h1>
            <h1>Will Answer</h1>
          </div>
        </div>
      </div>
      <div className={styles.Partition} />
      <div className={styles.RightSection}>
        <div className={styles.Entry}>
          <h2>What's your Question?</h2>
          <input
            source="title"
            placeholder={travelQuestionState.title}
            ref={titleRef}
            className={`${styles.titleInput} ${
              fadeState ? styles.fadeIn : styles.fadeOut
            }`}
          />
        </div>
        <div className={styles.Entry}>
          <h2>Tag your question.</h2>
          <p>Think of these tags as Hashtags to increase the reach.</p>
          <TagsInput
            tags={tags}
            input={input}
            changeInput={setInput}
            changeTags={setTags}
          />
        </div>
        <div className={styles.Entry}>
          <h2>Description</h2>
          <p>Provide any clarifications needed to answer.</p>
          <ReactMde
            value={bodyvalue}
            onChange={setbValue}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            childProps={{
              textArea: {
                placeholder: `${travelQuestionState.body}`,
                className: `${styles.bodyInput} ${
                  fadeState ? styles.fadeIn : styles.fadeOut
                }`,
              },
            }}
            toolbarCommands={[
              ["header", "bold", "italic", "strikethrough"],
              ["link", "quote", "image"],
              ["unordered-list", "ordered-list", "checked-list"],
            ]}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(
                <ReactMarkdown children={markdown} remarkPlugins={remarkGfm} />
              )
            }
          />
        </div>
        <div className={styles.Buttons}>
          <div className={styles.Button} onClick={createPostRequest}>
            <span>Submit</span>
          </div>
          <div className={styles.InvertedButton}>
            <span>Reset</span>
          </div>
        </div>
      </div>
      {!isLoggedIn && <LoginPopUp setLogin={setIsLoggedIn} />}
    </div>
  );
}
