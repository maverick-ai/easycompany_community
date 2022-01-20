import styles from "../styles/Create.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import TagsInput from "../components/InputTag";
import {CreatePostURL,Host} from "../components/constants";
import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";
import cookie from "cookie";
import Router from 'next/router'
import "react-mde/lib/styles/css/react-mde-all.css";
import remarkGfm from "remark-gfm";
import {getDefaultToolbarCommands} from "react-mde"
import {sendReq} from "../components/requests";
import LoginPopUp from "../components/LogInPopUp";


let initialState = 0;

export default function Create() {
  
  const titleRef = useRef();

  const [input, setInput] = useState("");
  const [bodyvalue, setbValue] = useState("");
  const [tags, setTags] = useState([]);
  const [fadeState, setFadeState] = useState(false);
  const [travelQuestionState, setTravelQuestionState] = useState({
    title: "eg. What is the best beach in Southern part of India",
    body:"eg. I am travelling to India on a business trip for 7 days. I have one weekend free. I am staying in Chennai. Are there any good beaches nearby ?"
  });

  const travelQuestions = [
    {
      title: "eg. Best Butter chicken (Curry) in Delhi",
      body:"eg. I am travelling to India from UK. I want a good and hygenic place where I can find good butter chicken. Any suggestions"
    },
    {
      title: "eg. Is Capadocia worth visiting ?",
      body:"eg. I am travelling to Turkey on a business trip. I am free on Weekend. Is Capadocia really beautifull as mentioned in many travell websites ?"
    },
    {
      title: "eg. Which caribbean island to go ?",
      body:"eg. I am planning a vaccation with my family to Carribean. I am taking my wife and my two 12 year old twins. I’m curious about which island to go and which is better family friendly ? Is there any important thing that I should remember while planning."
    }
  ];
 


  useEffect(() => {
    setInterval(() => {
      setFadeState(true);

      setTimeout(() => {
        initialState += 1;
        setTravelQuestionState(travelQuestions[initialState % travelQuestions.length]);
        setFadeState(false);
      }, 1500);
    }, 8000);
    console.log(getDefaultToolbarCommands());
  }, []);


  async function createPostRequest(){
    
    const categories = [];
    tags.map((tag) => {
      categories.push({categoryForPost: tag});
    });
    const post=JSON.stringify({
      title:titleRef.current.value,
      categoryOfThePost:categories,
      postByUser: bodyvalue,
  });
  console.log(post);
  try{
    if(document.cookie){
      const response = sendReq(CreatePostURL, document.cookie, "POST", post,setIsLoggedIn);
      console.log(response);
      if (response.status >= 400) {
        console.log(1);
        const router = Router;
        router.push("/login")
      }
      else if (response.status >= 300) {
        throw(response.status);
      }
    }
    else{
      setIsLoggedIn(false)
    }
    
    // const response=await fetch(CreatePostURL,{method:'POST',headers:{
    //   'Content-Type': 'application/json',
    //   'Accept':'*/*',
    //   'Accept-Encoding':'gzip, deflate, br',
    //   'Connection': 'keep-alive',
    //   'Content-Length':post.length,
    //   'Host':Host,
    //   'Authorization':`Token ${cookie.parse(document.cookie).token}`
    // },body:post});

   
  }
  catch (err) {
    console.log(err);
    
  }
}
    
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [selectedTab, setSelectedTab] = useState("write");

  return (
    <div className={styles.ParentDiv}>
      <Container fluid="md">
        <Row>
          <Col className={`align-self-center text-center`}>
            <h1 className={styles.mainHeading}>
              ask a <span className={styles.underlineRed}>question</span>
            </h1>
          </Col>
        </Row>
        <Row className={styles.titleRow}>
          <Col className={`align-self-center `}>
            <div className={`${styles.titleDiv} mx-auto`}>
              <h2 className={styles.titleHeading}>title</h2>
              <p className={styles.titleParagraph}>
                Be specific and imagine you’re asking a question to another
                person
              </p>
              <input
              source="title"
                placeholder={travelQuestionState.title}
                ref={titleRef}
                className={`${styles.titleInput} ${fadeState ? styles.fadeIn : styles.fadeOut}`}
              />
            </div>
          </Col>
        </Row>
        <Row className={styles.bodyRow}>
          <Col className={`align-self-center`}>
            <div className={`${styles.bodyDiv} mx-auto`}>
              <h2 className={styles.bodyHeading}>body</h2>
              <p className={styles.bodyParagraph}>
                Include all the information someone would need to answer your
                question
              </p>
              
              <div className="container">
              <ReactMde
                value={bodyvalue}
                onChange={setbValue}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                childProps= {
                    {
                      textArea: {
                        placeholder: `${travelQuestionState.body}`,
                        className: `${styles.bodyInput} ${fadeState ? styles.fadeIn : styles.fadeOut}`
                      }
                      
                  }
                }
                toolbarCommands={[["header","bold", "italic","strikethrough"], ["link","quote","image"],["unordered-list","ordered-list","checked-list"]]}
                generateMarkdownPreview={(markdown) =>
                  Promise.resolve(<ReactMarkdown children={markdown} remarkPlugins={remarkGfm} />)
                }
              
              />
                </div>
            </div>
          </Col>
        </Row>
        <Row className={styles.bodyRow}>
          <Col className={`align-self-center`}>
            <div className={`${styles.bodyDiv} mx-auto`}>
              <h2 className={styles.CategoriesHeading}>Category Tags</h2>
              <p className={styles.CategoryParagraph}>
              Think of Category Tags as Hashtags. It helps us to categories your post to reach the maximum audience.
              </p>
              <TagsInput tags={tags} input={input} changeInput={setInput} changeTags={setTags} />
            </div>
          </Col>
        </Row>
        <Row className={styles.bodyRow}>
          <Col className={`align-self-center`}>
            <div className={`${styles.buttonDiv} mx-auto`}>
            
            <button onClick ={createPostRequest} className={`${styles.postButton}`}>Post</button>
            </div>
          </Col>
        </Row>
      </Container>
      {!isLoggedIn && <LoginPopUp setLogin={setIsLoggedIn}/>}
    </div>
  );
}
