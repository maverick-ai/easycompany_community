import styles from "../styles/TravelScore.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import PaperPlane from "../public/paperplane.png";
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
            <Row>
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
          </Col>
          <Col md={true} className={styles.globeCol}>
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
