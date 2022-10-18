import { Row, Col } from "react-bootstrap";
import sy from "./five_page.module.scss";
import React from "react";

function Five_page() {
  return (
    <React.Fragment className={sy.pageContainer}>
      <Row className={sy.section1Container}>
        <Col lg={5} md={5}>
          <Row>
            <div className={sy.tw}>
              <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/travel.png" className={sy.travel}></img>
              <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/world.png" className={sy.world}></img>
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
              <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/Line3.png" className={sy.line3}></img>
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
          <div className={sy.imgSection}>
            <div className={sy.imgDiv}>
              <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/sun1.png" className={sy.sun1}></img>
            </div>
            <div className={sy.imgDiv}>
              <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/sun2.png" className={sy.sun2}></img>
            </div>
            <div className={sy.imgDiv}>
              <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/sun4.png" className={sy.sun4}></img>
            </div>
            <div className={sy.imgDiv}>
              <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/sun3.png" className={sy.sun3}></img>
            </div>
          </div>
        </Col>
      </Row>
      <div className={sy.imgDiv}>
        <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/sunb.png" className={sy.sunb}></img>
      </div>
      <Row className={sy.section2Container}>
        <Col lg={7} xs={7}>
          <div className={sy.white}>
            <div className={sy.paraDiv}>
                <p className={sy.whitep}>
                  <span className={sy.whites}>Easycommunity</span> offers a vast
                  collection of travel-related questions and answers. Improvise your
                  dream trip by asking us your queries about new and offbeat places,
                  food recommendations, or anything else. Find the best answer to
                  your travel questions or help others get their questions answered!
                </p>
                <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/hotAirBalloon.png" className={sy.hotAirBalloon}></img>      
              </div>
          </div>
        </Col>
        <Col>
          <div>
            <div className={sy.cardDiv}>
              <img src="https://spaces-shortsqueeze.sgp1.cdn.digitaloceanspaces.com/static/easycommunity/polar1.png" className={sy.polar1}></img>

              <img src="https://spaces-shortsqueeze.sgp1.cdn.digitaloceanspaces.com/static/easycommunity/polar2.png" className={sy.polar2}></img>

              <img src="https://spaces-shortsqueeze.sgp1.cdn.digitaloceanspaces.com/static/easycommunity/polar3.png" className={sy.polar3}></img>

              <img src="https://spaces-shortsqueeze.sgp1.cdn.digitaloceanspaces.com/static/easycommunity/polar4.png" className={sy.polar4}></img>

              <img src="desktopHome/globe.png" className={sy.globe1}></img>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}
export default Five_page;
