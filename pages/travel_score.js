import styles from "../styles/TravelScore.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import PaperPlane from "../public/paperplane.png";
import { TravelScoreURL, Host } from "../components/constants";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

export default function TravelScore() {
  const [countries, setCountries] = useState({ features: [] });
  const [globeSize, setGlobeSize] = useState(400);
  const [open, setOpen] = useState(false);
  const travelDaysInAYearRef=useRef();
  const longestTripRef=useRef();
  const budgetRef=useRef();
  const placesTravelledToRef=useRef();
  const emailRef=useRef();
  const [travelScore, setTravelScore] = useState(0);
  const [travelledOutsideIndia, setTravelledOutsideIndia] = useState(false);
  const closeModal = () => setOpen(false);
  const router = useRouter();
  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: ["#E32A34", "#B50EAE"],
  }));

  useEffect(() => {
    fetch("/ne_110m_admin_0_countries.geojson")
      .then((res) => res.json())
      .then(setCountries);

    if (window.innerWidth <= 768) {
      setGlobeSize(window.innerWidth);
    } else if (window.innerWidth <= 1000) {
      setGlobeSize(700);
    } else {
      setGlobeSize(600);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setGlobeSize(window.innerWidth);
      } else if (window.innerWidth <= 1000) {
        setGlobeSize(700);
      } else {
        setGlobeSize(600);
      }
    });
  }, []);



  function Redirect(){
    window.location.assign('https://play.google.com/store/apps/details?id=space.easycompany')
  }

  async function handleSubmit() {

    var travelDaysInAYear=0;
    var longestTrip=0;
    var budget=0;
    var placesTravelledTo=0;
    var travelledOutside=0;
    var score=0;

    if(+travelDaysInAYearRef.current.value <=7){
      travelDaysInAYear=5;
    }
    else if (+travelDaysInAYearRef.current.value <=10) {
      travelDaysInAYear=10;
    }else if (+travelDaysInAYearRef.current.value <=20) {
      travelDaysInAYear=15;
    }
     else {
      travelDaysInAYear=20;
    }

    if(+longestTripRef.current.value <=3){
      longestTrip=5;
    }
    else if (+longestTripRef.current.value <=7) {
      longestTrip=10;
    }else if (+longestTripRef.current.value <=14) {
      longestTrip=15;
    }
     else {
      longestTrip=20;
    }

    if(+budgetRef.current.value <=4000){
      budget=10;
    }
    else if (+budgetRef.current.value <=10000) {
      budget=15;
    }else if (+budgetRef.current.value <=16000) {
      budget=20;
    }
     else {
      budget=5;
    }

    if(+budgetRef.current.value <=4000){
      budget=10;
    }
    else if (+budgetRef.current.value <=10000) {
      budget=15;
    }else if (+budgetRef.current.value <=16000) {
      budget=20;
    }
     else {
      budget=5;
    }

    if(+placesTravelledToRef.current.value <=10){
      placesTravelledTo=5;
    }
    else if (+placesTravelledToRef.current.value <=16) {
      placesTravelledTo=10;
    }else if (+placesTravelledToRef.current.value <=22) {
      placesTravelledTo=15;
    }
    else if (+placesTravelledToRef.current.value <=25) {
      placesTravelledTo=20;
    }
    else if (+placesTravelledToRef.current.value <=30) {
      placesTravelledTo=25;
    }
     else {
      placesTravelledTo=30;
    }



    if(travelledOutsideIndia===true){
      travelledOutside=10;
    }
     else {
      travelledOutside=0;
    }


    score= travelDaysInAYear + longestTrip + budget + placesTravelledTo + travelledOutside;
    setTravelScore(score);
    setOpen(true);
    const credentials=JSON.stringify({
      email: emailRef.current.value,
      travel_score:score,
      fields:{
        "travelDaysInAYear":+travelDaysInAYearRef.current.value,
        "longestTrip":+longestTripRef.current.value,
        "budget":+budgetRef.current.value,
        "placesTravelledTo":+placesTravelledToRef.current.value,
        "travelledOutside":travelledOutsideIndia,
      }
  });
    const response=await fetch(TravelScoreURL,{method:'POST',headers:{
      'Content-Type': 'application/json',
      'Accept':'*/*',
      'Accept-Encoding':'gzip, deflate, br',
      'Connection': 'keep-alive',
      'Content-Length':credentials.length,
      'Host':Host
    },body:credentials});


    console.log(response.ok);



  }

  return (
    <div className={styles.ParentDiv}>
      <Container fluid="md">
        <Row>
          <Col md={true} className={`align-self-center `}>
            <Row className={styles.RowMainTextDiv}>
              <Col xs={8} className={`${styles.MainHeadingDiv}`}>
                <h1 className={`${styles.MainHeading} `}>Travel Score</h1>
              </Col>
              <Col xs={4} className={`${styles.MainHeadingDiv} my-auto`}>
                <Image
                  alt="paper plane"
                  src={PaperPlane}
                  height={50}
                  width={100}
                  className={styles.PaperPlane}
                />
              </Col>
            </Row>
            <Row className={styles.RowSubMainTextDiv}>
              <Col className={`${styles.MainHeadingDiv}`}>
                <h3 className={`${styles.MainSubHeading} `}>
                  See how your travel compared to other people. How do you
                  measure up? Are you a world traveler or a armchair adventurer?
                </h3>
              </Col>
            </Row>
          </Col>
          <Col md={true} className={styles.globeCol}>
            <Globe
              arcsData={arcsData}
              arcColor={"color"}
              arcDashLength={() => Math.random()}
              arcDashGap={() => Math.random()}
              arcDashAnimateTime={() => Math.random() * 4000 + 500}
              width={globeSize}
              height={globeSize}
              backgroundColor="rgba(0,0,0,0)"
              globeImageUrl="/earth-dark.jpeg"
              hexPolygonsData={countries.features}
              hexPolygonResolution={3}
              hexPolygonMargin={0.3}
              hexPolygonColor={(x) => {
                return ["#B50EAE", "#CC1C71", "#D92350", "#E32A34"][
                  Math.round(Math.random() * 3)
                ];
              }}
            />
          </Col>
        </Row>
        <Row className={styles.RowInput}>
          <Col className={`${styles.InputHeadingDiv}`}>
            <p className={`${styles.InputHeading} `}>
              How many days do you go for travel in a year ? (in days)
            </p>
            <input
            ref={travelDaysInAYearRef}
              className={`${styles.InputStyle} `}
              type="number"
              name="DaysInAYear"
              min="0"
              max="365"
              placeholder="18"
             />
          </Col>
        </Row>
        <Row className={styles.RowInput}>
          <Col className={`${styles.InputHeadingDiv}`}>
            <p className={`${styles.InputHeading} `}>
              What is the longest time you have spent on any of your trips? (in
              days)
            </p>
            <input
            ref={longestTripRef}
              className={`${styles.InputStyle} `}
              type="number"
              name="LongestTrip"
              min="0"
              max="365"
              placeholder="9"
              />
          </Col>
        </Row>
        <Row className={styles.RowInput}>
          <Col className={`${styles.InputHeadingDiv}`}>
            <p className={`${styles.InputHeading} `}>
              How much you spent generally on a 4day/3night trip? (in Rupees)
            </p>
            <input
            ref={budgetRef}
              className={`${styles.InputStyle} `}
              type="number"
              name="Budget"
              min="0"
              max="365"
              placeholder="8000"
              />
          </Col>
        </Row>
        <Row className={styles.RowInput}>
          <Col className={`${styles.InputHeadingDiv}`}>
            <p className={`${styles.InputHeading} `}>
              How many places you have traveled to?
            </p>
            <input
            ref={placesTravelledToRef}
              className={`${styles.InputStyle} `}
              type="number"
              name="DaysInAYear"
              min="0"
              max="365"
              placeholder="21"
              />
          </Col>
        </Row>
        <Row className={styles.RowInput}>
          <Col className={`${styles.MainHeadingDiv}`}>
            <p className={`${styles.InputHeading} `}>
              Have you travelled to outside India?
            </p>
            <table>
            <tbody>
              <tr>
                <div className={styles.tableRowPadding}></div>
                <td>
                  <label className={styles.RadioButtonLabel}>
                    <input onClick={()=>{setTravelledOutsideIndia(true)}} type="radio" value={"Yes"} name="OutsideIndia" />
                    <span className={`${styles.checkmark}`}> </span>
                  </label>
                </td>
                <td>
                  <span className={styles.labelClassName}>Yes</span>
                </td>
              </tr>
              <tr>
                <div className={styles.tableRowPadding}></div>
                <td>
                  <label className={styles.RadioButtonLabel}>
                    <input onClick={()=>{setTravelledOutsideIndia(false)}} type="radio" value={"No"}  name="OutsideIndia" />
                    <span className={`${styles.checkmark}`}> </span>
                  </label>
                </td>
                <td>
                  <span className={styles.labelClassName}>No</span>
                </td>
              </tr>
            </tbody>
            </table>
          </Col>
        </Row>
        <Row className={styles.RowInput}>
          <Col className={`${styles.InputHeadingDiv}`}>
            <p className={`${styles.InputHeading} `}>Your email address:</p>
            <input
            ref={emailRef}
              className={`${styles.InputStyle} `}
              type="text"
              name="email"
              placeholder="abc@email.com"
              />
          </Col>
        </Row>
        <Row className={`${styles.RowInput}`}>
          <Col className={`${styles.InputHeadingDiv}`} align="center">
            <button onClick={handleSubmit} className={styles.grad}>
              Check out your travel score
            </button>
            <Popup
              open={open}
              position="center center"
              modal
              onClose={closeModal}
              closeOnDocumentClick
              nested
            >
              <div>
                <h3 className={styles.TravelScoreStarterHeading}>
                  Your Travel Score
                </h3>
                <div className={styles.ScoreCard}>
                  <CircularProgressbarWithChildren
                    value={travelScore}
                    circleRatio={0.7}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      rotation: 0.65,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "butt",

                      // Text size
                      textSize: "32px",

                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 0.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `white`,
                      trailColor: "rgba(0, 0, 0, 0.23)",
                    })}
                  ><p className={styles.TravelScoreHeading}>{travelScore}<span className={styles.SpanScore}>/100</span></p></CircularProgressbarWithChildren>
                </div>
                <Row className={`${styles.RowButtonCheckApp}`}>
                <Col className={`${styles.InputHeadingDiv}`} align="center"><button onClick={Redirect} className={styles.gradRedirect}>
              Improve your travel score
            </button></Col>
                
                </Row>
              </div>
            </Popup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
