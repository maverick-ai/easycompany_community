import styles from "../styles/TravelScore.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import PaperPlane from "../public/paperplane.png";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
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
                  See how your travel compared to other people. How do you measure up? Are you a world traveler or a armchair adventurer?
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
              className={`${styles.InputStyle} `}
              type="number"
              name="DaysInAYear"
              min="0"
              max="365"
              placeholder="18"
            ></input>
          </Col>
        </Row>
        <Row className={styles.RowInput}>
          <Col className={`${styles.InputHeadingDiv}`}>
            <p className={`${styles.InputHeading} `}>
              What is the longest time you have spent on any of your trips? (in days)
            </p>
            <input
              className={`${styles.InputStyle} `}
              type="number"
              name="LongestTrip"
              min="0"
              max="365"
              placeholder="9"
            ></input>
          </Col>
        </Row>
        <Row className={styles.RowInput}>
          <Col className={`${styles.InputHeadingDiv}`}>
            <p className={`${styles.InputHeading} `}>
              How much you spent generally on a 4day/3night trip? (in Rupees)
            </p>
            <input
              className={`${styles.InputStyle} `}
              type="number"
              name="Budget"
              min="0"
              max="365"
              placeholder="8000"
            ></input>
          </Col>
        </Row>
        <Row className={styles.RowInput}>
          <Col className={`${styles.InputHeadingDiv}`}>
            <p className={`${styles.InputHeading} `}>
              How many places you have traveled to?
            </p>
            <input
              className={`${styles.InputStyle} `}
              type="number"
              name="DaysInAYear"
              min="0"
              max="365"
              placeholder="21"
            ></input>
          </Col>
        </Row>
        <Row className={styles.RowInput}>
          <Col className={`${styles.MainHeadingDiv}`}>
            <p className={`${styles.InputHeading} `}>
              Have you travelled to outside India?
            </p>
            <tbody>
              <tr>
                <div className={styles.tableRowPadding}></div>
                <td>
                  <label className={styles.RadioButtonLabel}>
                    <input

                      type="radio"
                      name="OutsideIndia"
                    />
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
                    <input
                      type="radio"
                      name="OutsideIndia"
                    />
                    <span className={`${styles.checkmark}`}> </span>
                  </label>
                </td>
                <td>
                  <span className={styles.labelClassName}>No</span>
                </td>
              </tr>
            </tbody>
          </Col>
        </Row>
        <Row className={styles.RowInput}>
          <Col className={`${styles.InputHeadingDiv}`}>
            <p className={`${styles.InputHeading} `}>
              Your email address:
            </p>
            <input
              className={`${styles.InputStyle} `}
              type="text"
              name="email"
              placeholder="abc@email.com"
            ></input>
          </Col>
        </Row>
        <Row className={`${styles.RowInput}`}>
          <Col className={`${styles.InputHeadingDiv}`} align="center">
            <button className={styles.grad}>Check out your travel score, Right Now!</button>
            <Popup trigger={<button className={styles.grad}>Check out your travel score, Right Now!</button>} position="center center" modal
              nested>
              <div className={`${styles.PopupMainDiv}`}>
                <div className={`${styles.PopupMainDiv} popup-btn-container`}>
                  <p>Vaccination Form</p>
                  <button className="close">  &times;  </button>
                </div>
                <div className="popup-form">
                  <div className="popup-form-group">
                    <label>Vaccine Name :</label>
                    <input type="text" className="popup-form-control" placeholder="Vaccine name" />
                  </div>
                  <div className="popup-form-group">
                    <label>Vaccine Date :</label>
                    <input type="text" className="popup-form-control" placeholder='Date of Vaccinations' onFocus={e => e.target.type = "date"} />
                  </div>
                </div>
                <button type="button" className="popup-form-btn">Add</button>
              </div>
            </Popup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
