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
  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: ["#E32A34",'#B50EAE' ]
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
          </Col>
          <Col md={true} className={styles.globeCol}>
          <Globe
            arcsData={arcsData}
            arcColor={'color'}
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
                return ['#B50EAE', '#CC1C71', '#D92350', '#E32A34'][Math.round(Math.random() * 3)]
              
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
      
    </div>
  );
}
