import { Row, Col } from "react-bootstrap";
import s from "./second_page.module.scss";
import React from "react";

function Second_page() {
  return (
    <React.Fragment>
      <Row>
        <Col xl={5} lg={5} md={5}>
          <div className={s.mainContainer}>
            <div>
              <span className={s.p3h}>
                Simplify your <span className={s.love}>travel</span> like <br />{" "}
                never before.
              </span>
              <div className={s.p2div}>
                <p className={s.p2}>
                  Planning a trip to somewhere new? Solo or in a group? Looking
                  for recommendations? Need advice? Whether you're trying to
                  figure out which city in Italy has the best gelato or how to pay
                  for your hostel stay in New Zealand.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={7} lg={7} md={7}>
          <div className={s.cardSection}>
            <div className={s.cardDiv}>
              <img src="https://spaces-shortsqueeze.sgp1.cdn.digitaloceanspaces.com/static/easycommunity/Img1.png" className={s.travimg} />
            </div>
            <div className={s.cardDiv}>
              <img src="https://spaces-shortsqueeze.sgp1.cdn.digitaloceanspaces.com/static/easycommunity/Img2.png" className={s.travimg} />
            </div>
            <div className={s.cardDiv}>
              <img src="https://spaces-shortsqueeze.sgp1.cdn.digitaloceanspaces.com/static/easycommunity/Img3.png" className={s.travimg} />
            </div>
            <div className={s.cardDiv}>
              <img src="https://spaces-shortsqueeze.sgp1.cdn.digitaloceanspaces.com/static/easycommunity/Img4.png" className={s.travimg} />
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}
export default Second_page;
