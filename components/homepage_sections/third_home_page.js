import { Row, Col } from "react-bootstrap";
import s from "./third_page.module.css";
import React from "react";

function Third_page() {
  return (
    <React.Fragment>
      <Row>
        <div style={{ padding: " 5% 0" }}>
          <div style={{ position: "relative", textAlign: "center" }}>
            <div
              style={{ width: "53vw", textAlign: "center", margin: "0 auto" }}
            >
              <span className={s.p3h}>
                <span>
                  <img src="desktopHome/compass.png" className={s.compass} />
                </span>
                Welcome to the <span className={s.love}>Most lovable</span>{" "}
                travel
                <span>
                  <img src="desktopHome/arrl.png" className={s.arrl} />
                </span>{" "}
                <br />
                community!
              </span>
            </div>
          </div>
          {/* photos */}
          <div
            style={{
              textAlign: "center",
              marginTop: "2%",
              position: "relative",
            }}
          >
            <img src="desktopHome/plane.png" className={s.plane} />
            <div className={s.carddiv}>
              <img src="photos/t1.svg" className={s.card} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "center",
                  justifySelf: "center",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <img src="photos/tri.svg" className={s.tri} />
                <div className={s.ques}>
                  <p className={s.questext}>Solo or in a group? Need advice?</p>
                </div>
              </div>
            </div>
            <div className={s.carddiv}>
              <img src="photos/t2.svg" className={s.card} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "center",
                  justifySelf: "center",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <img src="photos/tri.svg" className={s.tri} />
                <div className={s.ques}>
                  <p className={s.questext}>
                    Planning a trip to somewhere new?{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className={s.carddiv}>
              <img src="photos/t3.svg" className={s.card} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "center",
                  justifySelf: "center",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <img src="photos/tri.svg" className={s.tri} />
                <div className={s.ques}>
                  <p className={s.questext}> Looking for recommendations?</p>
                </div>
              </div>
            </div>
            <img src="desktopHome/bag1.png" className={s.bag1}></img>
          </div>
        </div>
      </Row>
      {/* Globe */}
      <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <Row>
            <Col>
              <img src="photos/suitec.svg" className={s.suit}></img>
            </Col>
          </Row>
          <Row>
            <div className={s.outer}>
              <p className={s.fontstyleouter}>
                <span className={s.fontstyleinner}>Easycommunity</span> has
                answers to all of your questions! <br />
                And if it doesn't yet ? Well,
                <br />
                <span className={s.fontstyleinner}> Just Ask!</span>
              </p>
            </div>
          </Row>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <img src="photos/bigglobe.svg" className={s.globe}></img>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Third_page;