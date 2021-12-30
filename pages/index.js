import styles from "../styles/Home.module.css";
import MobilPhoneMockup from "../components/MobilePhoneMockup";
import "bootstrap/dist/css/bootstrap.min.css";
import WorldLanguageAnimation from "../components/world";
import TravellerWordAnimation from "../components/traveller";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

export default function Home() {
  const [countries, setCountries] = useState({ features: [] });
  const [globeSize, setGlobeSize] = useState(400);
  const router = useRouter();

  useEffect(() => {
    var cookie = require('cookie');
    const token=cookie.parse(document.cookie);
    console.log(localStorage.getItem("token"));
    // if(localStorage.getItem("token")!==undefined){
    //   router.push("/questions");
    // }

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

  return (
    <div className={styles.ParentDiv}>
      <Container fluid="md">
        <Row>
          <Col md={true} className={`align-self-center `}>
            <h1 className={`${styles.MainHeading} `}>
              <span className={styles.underline}>
                The rocket &#128640; that your travel experience needs
              </span>
            </h1>
          </Col>
          <Col md={true}>
            <MobilPhoneMockup center={true}>
              <div className={`${styles.TypewritterDiv} align-self-center`}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Join the  ")
                      .typeString(
                        '<span style="box-shadow: inset 0 -20px 0 0 #ff5757;">most incredible travel community </span>'
                      )
                      .typeString(" on the ")
                      .typeString(
                        '<span style="box-shadow: inset 0 -20px 0 0 #7ed957;">planet!</span>'
                      )
                      .pauseFor(1500)
                      .start();
                  }}
                />
              </div>
            </MobilPhoneMockup>
          </Col>
        </Row>
      </Container>
      <Container fluid="md" className={styles.TakingOrderDiv}>
        <Row>
          <Col md={true} className={`align-self-center text-center `}>
            <h1 className={`${styles.MainHeading} `}>
              <span>
                Are you still travelling like in the{" "}
                <span className={styles.underline}>2010s</span> ?
              </span>
            </h1>
          </Col>
          <Col md={true} className={`text-center order-md-first`}>
            <img src="/employee.svg" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container fluid="md" className={styles.TakingOrderDiv}>
        <Row>
          <img src="/mountain.png" className="img-fluid" />
        </Row>
        <Row>
          <h1 className={`${styles.MountainHeading} text-center`}>
            <span className={styles.underlineGreen}>Change is here.</span>
            <span>
              {" "}
              Join the{" "}
              <span className={styles.underlineGreen}>
                greatest travel revolution
              </span>{" "}
              on the planet
            </span>
          </h1>
        </Row>
      </Container>
      <div className={styles.WeAreChangeOuterDIV}>
        <Container
          fluid="md"
          className={styles.WeAreChangeDIV}
          style={{
            // background: `url('/cafe.jpg')`,
            backgroundSize: "cover",
          }}
        >
          <Row className={`align-items-center ${styles.WeAreChangeRow}`}>
            <h1 className={`${styles.WeAreChangeHeading} text-center`}>
              <WorldLanguageAnimation /> is{" "}
              <span className={styles.WeAreChangeUndedrline}>one</span>
            </h1>
          </Row>
        </Container>
      </div>
      <Container fluid="md" className={styles.TakingOrderDiv}>
        <Row>
          <Col md={true} className={`align-self-center text-center`}>
            <h1 className={`${styles.MainHeading} `}>
              <span>
                {`Find the `}
                <span className={styles.underlineGreen}>best answer</span>
                {` to your `}
                <span className={styles.underlineGreen}>travel question</span>
                {` and `}
                <span className={styles.underlineGreen}>help</span>
                {` others answer theirs `}
              </span>
            </h1>
          </Col>
          <Col md={true} className={`text-center`}>
            <img src="/help.svg" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container fluid="md" className={styles.TakingOrderDiv}>
        <Row>
          <Col md={true} className={`align-self-center text-center`}>
            <h1 className={`${styles.MainHeading} ${styles.PizzaHeadingCol}`}>
              <span>
                {`Every `}
                <span className={styles.underlineGreen}>
                  <TravellerWordAnimation />
                </span>
                {` has a `}
                <span className={styles.underlineGreen}>tab</span>
                {` open to `}
                <span className={styles.underlineGreen}>easycommunity</span>
              </span>
            </h1>
          </Col>
          <Col md={true} className={`text-center order-md-first`}>
            <img src="/apollo.svg" className={`img-fluid `} />
          </Col>
        </Row>
      </Container>
      <Container fluid="md" className="">
        <Row>
          <Col md={true} className={styles.globeDiv}>
            <Globe
              width={globeSize}
              height={globeSize}
              backgroundColor="rgba(0,0,0,0)"
              globeImageUrl="/earth-dark.jpeg"
              hexPolygonsData={countries.features}
              hexPolygonResolution={3}
              hexPolygonMargin={0.3}
              hexPolygonColor={(x) => {
                switch (x.properties.SOVEREIGNT) {
                  case "India":
                    return `#7ed957`;
                    break;
                  case "Russia":
                    return `#7ed957`;
                    break;
                  case "France":
                    return `#7ed957`;
                    break;
                  case "Belgium":
                    return `#7ed957`;
                    break;
                  case "Spain":
                    return `#7ed957`;
                    break;
                  case "Germany":
                    return `#7ed957`;
                    break;
                  case "Poland":
                    return `#7ed957`;
                    break;
                  case "Ireland":
                    return `#7ed957`;
                    break;
                  case "Italy":
                    return `#7ed957`;
                    break;
                  case "Greece":
                    return `#7ed957`;
                    break;
                  case "Croatia":
                    return `#7ed957`;
                    break;
                  case "South Africa":
                    return `#7ed957`;
                    break;
                  case "Austria":
                    return `#7ed957`;
                    break;
                  case "Switzerland":
                    return `#7ed957`;
                    break;
                  case "Netherlands":
                    return `#7ed957`;
                    break;
                  case "Norway":
                    return `#7ed957`;
                    break;
                  case "Sweden":
                    return `#7ed957`;
                    break;
                  case "Finland":
                    return `#7ed957`;
                    break;
                  case "Denmark":
                    return `#7ed957`;
                    break;
                  case "Portugal":
                    return `#7ed957`;
                    break;
                  case "United Kingdom":
                    return `#7ed957`;
                    break;
                  case "Iceland":
                    return `#7ed957`;
                    break;
                  case "United States of America":
                    return `#7ed957`;
                    break;
                  case "Cuba":
                    return `#7ed957`;
                    break;
                  case "Australia":
                    return `#7ed957`;
                    break;
                  case "Canada":
                    return `#7ed957`;
                    break;
                  case "Estonia":
                    return `#7ed957`;
                    break;
                  case "United Arab Emirates":
                    return `#7ed957`;
                    break;
                  case "Saudi Arabia":
                    return `#7ed957`;
                    break;
                  case "Israel":
                    return `#7ed957`;
                    break;
                  case "Singapore":
                    return `#7ed957`;
                    break;
                  case "Thailand":
                    return `#7ed957`;
                    break;
                  case "South Korea":
                    return `#7ed957`;
                    break;
                  case "Japan":
                    return `#7ed957`;
                    break;
                  case "Indonesia":
                    return `#7ed957`;
                    break;
                  case "Brazil":
                    return `#7ed957`;
                    break;
                  case "Mexico":
                    return `#7ed957`;
                    break;
                  case "Chile":
                    return `#7ed957`;
                    break;
                  case "Argentina":
                    return `#7ed957`;
                    break;
                  case "Peru":
                    return `#7ed957`;
                    break;
                  case "Taiwan":
                    return `#7ed957`;
                    break;
                  case "New Zealand":
                    return `#7ed957`;
                    break;
                  case "Vietnam":
                    return `#7ed957`;
                    break;
                  case "Nepal":
                    return `#7ed957`;
                    break;
                  case "Bhutan":
                    return `#7ed957`;
                    break;
                  default:
                    return `#FF0000`;
                }
              }}
            />
          </Col>
          <Col md={true} className="align-self-center order-md-first">
            <h1 className={`${styles.MountainHeading} text-center`}>
              <span>
                Our service is{" "}
                <span className={styles.underlineGreen}>
                  Operational and Live everywhere
                </span>{" "}
                <span className={styles.underline}></span>
              </span>
            </h1>
          </Col>
        </Row>
      </Container>
      <div className={`${styles.FreeFooterDiv} text-center`}>
        <h1 className={styles.FreeFooter}>
          <span style={{ color: "grey" }}>Its</span> Free Forever{" "}
          <span style={{ color: "grey" }}></span>
        </h1>
      </div>
    </div>
  );
}
