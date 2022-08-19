import { Row, Col } from "react-bootstrap";
import s from "../../styles/page1a.module.css";
import sy from "../../styles/page1y.module.scss";
import React from "react";

function Five_page() {
  return (
    <React.Fragment>
      <Row>
        <Col lg={5} md={5}>
          <Row>
            <div className={sy.tw}>
              <img src="photos/travel.svg" className={sy.travel}></img>
              <img src="photos/world.svg" className={sy.world}></img>
            </div>
          </Row>
          <Row>
            <div>
              <p className={sy.bigplace}>
                The world is a big place, we're trying to bring it within your{" "}
                <span className={sy.fontstyleinner}>reach</span>
              </p>
            </div>
          </Row>
          <Row>
            <div>
              <span className={sy.dot}></span>
              <img src="photos/Line3.png" className={sy.line3}></img>
            </div>
          </Row>
          <Row>
            <div>
              <p className={sy.bigplace}>
                Post a query about anything you need help with about your trip -
                where to stay, what to do, where to eat, what to pack, how much
                cash you need, how to get around the city, anything!
                <span className={sy.fontstyleinner}> Easycommunity</span> will
                answers
              </p>
            </div>
          </Row>
        </Col>
        <Col lg={7} md={7}>
          <div style={{ position: "relative", paddingTop: "60px" }}>
            <div style={{ position: "absolute" }}>
              <img src="photos/sun1.svg" className={sy.sun1}></img>
            </div>
            <div style={{ position: "absolute" }}>
              <img src="photos/sun2.svg" className={sy.sun2}></img>
            </div>
            <div style={{ position: "absolute" }}>
              <img src="photos/sun4.svg" className={sy.sun4}></img>
            </div>
            <div style={{ position: "absolute" }}>
              <img src="photos/sun3.svg" className={sy.sun3}></img>
            </div>
          </div>
        </Col>
      </Row>
      <div style={{ position: "absolute" }}>
        <img src="photos/sunb.svg" className={sy.sunb}></img>
      </div>
      <Row style={{ height: "70vh" }}>
        <Col lg={7} xs={7}>
          <div className={sy.white}>
            <p className={sy.whitep}>
              <span className={sy.whites}>Easycommunity</span> offers a vast
              collection of travel-related questions and answers. Improvise your
              dream trip by asking us your queries about new and offbeat places,
              food recommendations, or anything else. Find the best answer to
              your travel questions or help others get their questions answered!
            </p>
          </div>
        </Col>
        <Col>
          <div>
            <div style={{ position: "relative" }}>
              <img src="photos/polar1.png" className={sy.polar1}></img>

              <img src="photos/polar2.png" className={sy.polar2}></img>

              <img src="photos/polar3.png" className={sy.polar3}></img>

              <img src="photos/polar4.png" className={sy.polar4}></img>

              <img src="photos/globe.png" className={sy.globe1}></img>

              <img
                src="photos/hotAirBalloon.png"
                className={sy.hotAirBalloon}
              ></img>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}
export default Five_page;
