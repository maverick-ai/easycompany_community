import styles from "../styles/Create.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
import styled, { css } from "styled-components";

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  margin-top: 3rem;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding-top: 13rem;
    padding-left: 0;
    margin: 2rem 0 0 0;
  }
`;

const Section = styled.div`
  /* background: aqua; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0 2rem;

  div {
    h3 {
      font-size: 1.563rem;
      color: rgba(255, 255, 255, 0.5);
      letter-spacing: 0.655em;
      padding: 1rem 0;
      @media (max-width: 1024px) {
        font-size: 1rem;
      }
      @media (max-width: 724px) {
        font-size: 0.7rem;
      }
      @media (max-width: 400px) {
        font-size: 0.4rem;
        /* margin-top: 0.5rem; */
      }
    }

    div {
      h1 {
        font-size: 6rem;
        @media (max-width: 1024px) {
          font-size: 4rem;
        }
        @media (max-width: 724px) {
          font-size: 3.5rem;
        }
        @media (max-width: 400px) {
          font-size: 2.5rem;
          /* margin-top: 1rem; */
        }
      }
    }
  }
  @media (max-width: 1024px) {
    margin-top: 4rem;
    padding: 0;
  }
`;

const RightSection = styled(Section)`
  align-items: flex-start;
  justify-content: space-evenly;
  padding-left: 5rem;
  height: 75%;
  @media (max-width: 1024px) {
    padding-left: 1rem;
  }
  @media (max-width: 400) {
    padding-left: 0.6rem;
  }
`;

const Partition = styled.div`
  content: "";
  display: inline-block;
  width: 6px;
  height: 500px;
  border-right: 1px solid #fafafa;
  border-left: 1px solid #b4b4b4;
  background: linear-gradient(
    to bottom,
    rgba(237, 60, 85, 1),
    rgba(169, 46, 167, 1)
  );
  padding: 0;
`;

const Entry = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 724px) {
    font-size: 0.7rem;
  }
  @media (max-width: 400px) {
    h1 {
      /* margin-top: 0.5rem; */
      font-size: 1rem;
    }
    margin-top: 0.7rem;
  }
`;

const Buttons = styled.div`
  display: flex;
`;

const Button = styled.div`
  background: linear-gradient(to right, #e32a34 0%, #b50eae 100%);
  border-radius: 40px;
  box-sizing: border-box;
  color: #ffffff;
  font: 0.8rem "Oswald", Helvetica;
  height: 40px;
  width: 9vw;
  min-width: 90px;
  letter-spacing: 1px;
  margin-right: 2rem;
  padding: 2px;
  position: relative;
  cursor: pointer;

  span {
    align-items: center;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    height: 100%;
    transition: background 0.5s ease;
    width: 100%;
    font-size: 1.2em;
    background: transparent;
  }
  &:hover span {
    background: #000000;
    /* background: transparent; */
  }
`;

const InvertedButton = styled(Button)`
  span {
    background: #000000;
  }
  &:hover span {
    background: transparent;
  }
`;

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

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [selectedTab, setSelectedTab] = useState("write");

  // return (
  //   <div className={styles.ParentDiv}>
  //     <Container fluid="md">
  //       {/* -------------------------Heading------------------------- */}
  //       <Row>
  //         <Col className={`align-self-center text-center`}>
  //           <h1 className={styles.mainHeading}>
  //             ask a <span className={styles.underlineRed}>question</span>
  //           </h1>
  //         </Col>
  //       </Row>
  {
    /* -------------------------Entry for title------------------------- */
  }
  //       <Row className={styles.titleRow}>
  //         <Col className={`align-self-center `}>
  //           <div className={`${styles.titleDiv} mx-auto`}>
  //             <h2 className={styles.titleHeading}>title</h2>
  //             <p className={styles.titleParagraph}>
  //               Be specific and imagine you’re asking a question to another
  //               person
  //             </p>
  //             <input
  //               source="title"
  //               placeholder={travelQuestionState.title}
  //               ref={titleRef}
  //               className={`${styles.titleInput} ${
  //                 fadeState ? styles.fadeIn : styles.fadeOut
  //               }`}
  //             />
  //           </div>
  //         </Col>
  //       </Row>
  //       {/* -------------------------Entry for body------------------------- */}
  //       <Row className={styles.bodyRow}>
  //         <Col className={`align-self-center`}>
  //           <div className={`${styles.bodyDiv} mx-auto`}>
  //             <h2 className={styles.bodyHeading}>body</h2>
  //             <p className={styles.bodyParagraph}>
  //               Include all the information someone would need to answer your
  //               question
  //             </p>

  //             <ReactMde
  //               value={bodyvalue}
  //               onChange={setbValue}
  //               selectedTab={selectedTab}
  //               onTabChange={setSelectedTab}
  //               childProps={{
  //                 textArea: {
  //                   placeholder: `${travelQuestionState.body}`,
  //                   className: `${styles.bodyInput} ${
  //                     fadeState ? styles.fadeIn : styles.fadeOut
  //                   }`,
  //                 },
  //               }}
  //               toolbarCommands={[
  //                 ["header", "bold", "italic", "strikethrough"],
  //                 ["link", "quote", "image"],
  //                 ["unordered-list", "ordered-list", "checked-list"],
  //               ]}
  //               generateMarkdownPreview={(markdown) =>
  //                 Promise.resolve(
  //                   <ReactMarkdown
  //                     children={markdown}
  //                     remarkPlugins={remarkGfm}
  //                   />
  //                 )
  //               }
  //             />
  //           </div>
  //         </Col>
  //       </Row>
  //       {/* -------------------------Entry for Category------------------------- */}
  //       <Row className={styles.bodyRow}>
  //         <Col className={`align-self-center`}>
  //           <div className={`${styles.bodyDiv} mx-auto`}>
  //             <h2 className={styles.CategoriesHeading}>category tags</h2>
  //             <p className={styles.CategoryParagraph}>
  //               Think of Category Tags as Hashtags. It helps us to categories
  //               your post to reach the maximum audience.
  //             </p>
  //             <TagsInput
  //               tags={tags}
  //               input={input}
  //               changeInput={setInput}
  //               changeTags={setTags}
  //             />
  //           </div>
  //         </Col>
  //       </Row>
  //       {/* -------------------------Post Button------------------------- */}
  //       <Row className={styles.bodyRow}>
  //         <Col className={`align-self-center`}>
  //           <div className={`${styles.buttonDiv} mx-auto`}>
  //             <button
  //               onClick={createPostRequest}
  //               className={`${styles.postButton}`}
  //             >
  //               Post
  //             </button>
  //           </div>
  //         </Col>
  //       </Row>
  //     </Container>
  //     {!isLoggedIn && <LoginPopUp setLogin={setIsLoggedIn} />}
  //   </div>
  // );

  return (
    <Main>
      <Section>
        <div>
          <h3>ASK THE COMMUNITY</h3>
          <div>
            <h1>The</h1>
            <h1>Community</h1>
            <h1>Will Answer</h1>
          </div>
        </div>
      </Section>
      <Partition />
      <RightSection>
        <Entry>
          <h2>What's your Question?</h2>
          <input
            style={{ backgroundColor: "transparent" }}
            source="title"
            placeholder={travelQuestionState.title}
            ref={titleRef}
            className={`${styles.titleInput} ${
              fadeState ? styles.fadeIn : styles.fadeOut
            }`}
          />
        </Entry>
        <Entry>
          <h2>Tag your question.</h2>
          <p>Think of these tags as Hashtags to increase the reach.</p>
          <TagsInput
            style={{ backgroundColor: "transparent !important" }}
            tags={tags}
            input={input}
            changeInput={setInput}
            changeTags={setTags}
          />
        </Entry>
        <Entry>
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
        </Entry>
        <Buttons>
          <Button onClick={createPostRequest}>
            <span>Submit</span>
          </Button>
          <InvertedButton>
            <span>Reset</span>
          </InvertedButton>
        </Buttons>
      </RightSection>
      {!isLoggedIn && <LoginPopUp setLogin={setIsLoggedIn} />}
    </Main>
  );
}
