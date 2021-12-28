import styles from "../styles/Create.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";


let initialState = 0;

export default function Create() {
  const titleRef = useRef();
  const bodyRef = useRef();
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
    }, 7500);
  }, []);

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
              <textarea
                placeholder={travelQuestionState.body}
                ref={bodyRef}
                className={`${styles.bodyInput} ${fadeState ? styles.fadeIn : styles.fadeOut}`}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
