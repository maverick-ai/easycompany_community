// import styles from "../styles/Home.module.css";
// import MobilPhoneMockup from "../components/MobilePhoneMockup";
// import "bootstrap/dist/css/bootstrap.min.css";
// import WorldLanguageAnimation from "../components/world";
// import TravellerWordAnimation from "../components/traveller";
// import { Container, Row, Col } from "react-bootstrap";
// import Typewriter from "typewriter-effect";
// import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Page1 from "../components/page1";
import Page2 from "../components/phonepage";
// let Globe = () => null;
// if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

export default function Home() {
  const [winWidth, setWinWidth] = useState(true);
  // const [countries, setCountries] = useState({ features: [] });
  // const [globeSize, setGlobeSize] = useState(400);
  // const router = useRouter();
  // const N = 20;
  // const arcsData = [...Array(N).keys()].map(() => ({
  //   startLat: (Math.random() - 0.5) * 180,
  //   startLng: (Math.random() - 0.5) * 360,
  //   endLat: (Math.random() - 0.5) * 180,
  //   endLng: (Math.random() - 0.5) * 360,
  //   color: ["#E32A34", "#B50EAE"],
  // }));

  useEffect(() => {
    // var cookie = require("cookie");
    // const token = cookie.parse(document.cookie);
    // // console.log(token);
    // // if(localStorage.getItem("token")!==undefined){
    // //   router.push("/questions");
    // // }

    // fetch("/ne_110m_admin_0_countries.geojson")
    //   .then((res) => res.json())
    //   .then(setCountries);

    if (window.innerWidth <= 768) {
      setWinWidth(false);
    } else {
      setWinWidth(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setWinWidth(false);
      } else {
        setWinWidth(true);
      }
    });
  }, []);

  return winWidth ? <Page1 /> : <Page2 />;
  // <div className={styles.ParentDiv}>
  //   <Container fluid="md">
  //     <Row>
  //       <Col md={true} className={`align-self-center `}>
  //         <h1 className={`${styles.MainHeading} `}>
  //           <span className={styles.underline}>
  //             The rocket &#128640; that your travel experience needs
  //           </span>
  //         </h1>
  //       </Col>
  //       <Col md={true}>
  //         <MobilPhoneMockup center={true}>
  //           <div className={`${styles.TypewritterDiv} align-self-center`}>
  //             <Typewriter
  //               onInit={(typewriter) => {
  //                 typewriter
  //                   .typeString("Join the  ")
  //                   .typeString(
  //                     '<span style="box-shadow: inset 0 -20px 0 0 #ff5757;">most incredible travel community </span>'
  //                   )
  //                   .typeString(" on the ")
  //                   .typeString(
  //                     '<span style="box-shadow: inset 0 -20px 0 0 #7ed957;">planet!</span>'
  //                   )
  //                   .pauseFor(1500)
  //                   .start();
  //               }}
  //             />
  //           </div>
  //         </MobilPhoneMockup>
  //       </Col>
  //     </Row>
  //   </Container>
  //   <Container fluid="md" className={styles.TakingOrderDiv}>
  //     <Row>
  //       <Col md={true} className={`align-self-center text-center `}>
  //         <h1 className={`${styles.MainHeading} `}>
  //           <span>
  //             Are you still travelling like in the{" "}
  //             <span className={styles.underline}>2010s</span> ?
  //           </span>
  //         </h1>
  //       </Col>
  //       <Col md={true} className={`text-center order-md-first`}>
  //         <img src="/employee.svg" className="img-fluid" />
  //       </Col>
  //     </Row>
  //   </Container>
  //   <Container fluid="md" className={styles.TakingOrderDiv}>
  //     <Row>
  //       <img src="/mountain.png" className="img-fluid" />
  //     </Row>
  //     <Row>
  //       <h1 className={`${styles.MountainHeading} text-center`}>
  //         <span className={styles.underlineGreen}>Change is here.</span>
  //         <span>
  //           {" "}
  //           Join the{" "}
  //           <span className={styles.underlineGreen}>
  //             greatest travel revolution
  //           </span>{" "}
  //           on the planet
  //         </span>
  //       </h1>
  //     </Row>
  //   </Container>
  //   <div className={styles.WeAreChangeOuterDIV}>
  //     <Container
  //       fluid="md"
  //       className={styles.WeAreChangeDIV}
  //       style={{
  //         // background: `url('/cafe.jpg')`,
  //         backgroundSize: "cover",
  //       }}
  //     >
  //       <Row className={`align-items-center ${styles.WeAreChangeRow}`}>
  //         <h1 className={`${styles.WeAreChangeHeading} text-center`}>
  //           <WorldLanguageAnimation /> is{" "}
  //           <span className={styles.WeAreChangeUndedrline}>one</span>
  //         </h1>
  //       </Row>
  //     </Container>
  //   </div>
  //   <Container fluid="md" className={styles.TakingOrderDiv}>
  //     <Row>
  //       <Col md={true} className={`align-self-center text-center`}>
  //         <h1 className={`${styles.MainHeading} `}>
  //           <span>
  //             {`Find the `}
  //             <span className={styles.underlineGreen}>best answer</span>
  //             {` to your `}
  //             <span className={styles.underlineGreen}>travel question</span>
  //             {` and `}
  //             <span className={styles.underlineGreen}>help</span>
  //             {` others answer theirs `}
  //           </span>
  //         </h1>
  //       </Col>
  //       <Col md={true} className={`text-center`}>
  //         <img src="/help.svg" className="img-fluid" />
  //       </Col>
  //     </Row>
  //   </Container>
  //   <Container fluid="md" className={styles.TakingOrderDiv}>
  //     <Row>
  //       <Col md={true} className={`align-self-center text-center`}>
  //         <h1 className={`${styles.MainHeading} ${styles.PizzaHeadingCol}`}>
  //           <span>
  //             {`Every `}
  //             <span className={styles.underlineGreen}>
  //               <TravellerWordAnimation />
  //             </span>
  //             {` has a `}
  //             <span className={styles.underlineGreen}>tab</span>
  //             {` open to `}
  //             <span className={styles.underlineGreen}>easycommunity</span>
  //           </span>
  //         </h1>
  //       </Col>
  //       <Col md={true} className={`text-center order-md-first`}>
  //         <img src="/apollo.svg" className={`img-fluid `} />
  //       </Col>
  //     </Row>
  //   </Container>
  //   <Container fluid="md" className={styles.EarthContainer}>
  //     <Row>
  //       <Col md={true} className={styles.globeDiv}>
  //       <Globe
  //         arcsData={arcsData}
  //         arcColor={'color'}
  //         arcDashLength={() => Math.random()}
  //         arcDashGap={() => Math.random()}
  //         arcDashAnimateTime={() => Math.random() * 4000 + 500}
  //           width={globeSize}
  //           height={globeSize}
  //           backgroundColor="rgba(0,0,0,0)"
  //           globeImageUrl="/earth-dark.jpeg"
  //           hexPolygonsData={countries.features}
  //           hexPolygonResolution={3}
  //           hexPolygonMargin={0.3}
  //           hexPolygonColor={(x) => {
  //             return ['#B50EAE', '#CC1C71', '#D92350', '#E32A34'][Math.round(Math.random() * 3)]
  //           }}
  //         />
  //       </Col>
  //       <Col md={true} className="align-self-center order-md-first">
  //         <h1 className={`${styles.MountainHeading} text-center`}>
  //           <span>
  //             Our service is{" "}
  //             <span className={styles.underlineGreen}>
  //               Operational and Live everywhere
  //             </span>{" "}
  //             <span className={styles.underline}></span>
  //           </span>
  //         </h1>
  //       </Col>
  //     </Row>
  //   </Container>
  //   <div className={`${styles.FreeFooterDiv} text-center`}>
  //     <h1 className={styles.FreeFooter}>
  //       <span style={{ color: "grey" }}>Its</span> Free Forever{" "}
  //       <span style={{ color: "grey" }}></span>
  //     </h1>
  //   </div>
  // </div>
}
