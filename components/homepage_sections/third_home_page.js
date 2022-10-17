import { Row, Col } from "react-bootstrap";
import s from "./third_page.module.scss";
import React from "react";

function Third_page() {
  return (
    <React.Fragment>
      <Row className={s.pageContainer}>
        <div className={s.pageContainer2}>
          <div className={s.pageContainer3}>
            <div
              className={s.headingSection}
            >
              <span className={s.p3h}>
                <span>
                  <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/compass.png" className={s.compass} />
                </span>
                Welcome to the <span className={s.love}>Most lovable</span>{" "}
                travel
                <span>
                  <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/arrl.png" className={s.arrl} />
                </span>{" "}
                <br />
                community!
              </span>
            </div>
          </div>
          {/* photos */}
          <div
            className={s.photosSection}
          >
            <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/plane.png" className={s.plane} />
            <div className={s.carddiv}>
              <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/trio_1.png" className={s.card} />
              <div
                className={s.card1Section}
              >
                <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/tri.png" className={s.tri} />
                <div className={s.ques}>
                  <p className={s.questext}>Solo or in a group? Need advice?</p>
                </div>
              </div>
            </div>
            <div className={s.carddiv}>
              <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/trio_2.png" className={s.card} />
              <div
                className={s.card1Section}
              >
                <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/tri.png" className={s.tri} />
                <div className={s.ques}>
                  <p className={s.questext}>
                    Looking for recommendations?
                  </p>
                </div>
              </div>
            </div>
            <div className={s.carddiv}>
              <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/trio_3.png" className={s.card} />
              <div
                className={s.card1Section}
              >
                <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/tri.png" className={s.tri} />
                <div className={s.ques}>
                  <p className={s.questext}>Planning a trip to somewhere new?</p>
                </div>
              </div>
            </div>
            <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/bag1.png" className={s.bag1}></img>
          </div>
        </div>
      </Row>
      {/* Globe */}
      <Row className={s.page2Container}>
        <Col lg={6} md={6} sm={12} xs={12} className={s.leftText}>
          <Row>
            <Col>
              <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/suitcase.png" className={s.suit}></img>
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
          <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/purpleglobe.png" className={s.globe}></img>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Third_page;
