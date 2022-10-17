import { Row, Col, Container } from "react-bootstrap";
import s from "./sixth_page.module.scss";
import st from '../destcard.module.css';
import React from "react";
import DestCard from "../destcard";
import DestCardDesktop from "../destcardDesktop";

function Sixth_page() {
  return (
    <React.Fragment>
      <Row>
        <div
          className={s.pageContainer}
        >
          <h1 className={s.headeasy}>
            WE ARE <span className={s.love1}>EASYCOMMUNITY</span>
            <span>
              <img src="desktopHome/sglobe.png" className={s.sglobe} />
            </span>
          </h1>

          <Row className={s.cardSection}>
            <Col className={s.card}>
            <div>
              <div className={s.cardDiv}>
              </div>
              <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/dest1.png" className={s.destImg1}></img>
              <div className={s.textDiv}>
                <p className={s.cardText}>
                  We connect people who have questions about travel with people who have travelled enough to answer them all.
                </p>
              </div>
            </div>
            </Col>
            <Col className={s.card}>
            <div>
              <div className={s.cardDiv}>
              </div>
              <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/dest2.png" className={s.destImg2}></img>
              <div className={s.textDiv}>
                <p className={s.cardText}>
                  A digital space to find and contribute answers regarding travel and tourism.
                </p>
              </div>
            </div>
            </Col>
            <Col className={s.card}>
            <div>
              <div className={s.cardDiv}>
              </div>
              <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/dest3.png" className={s.destImg3}></img>
              <div className={s.textDiv}>
                <p className={s.cardText}>
                  We are revolutionising how people travel by building a trusted community of fellow travellers.
                </p>
              </div>
            </div>
            </Col>
            <Col className={s.card}>
            <div>
              <div className={s.cardDiv}>
              </div>
              <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/dest4.png" className={s.destImg4}></img>
              <div className={s.textDiv}>
                <p className={s.cardText}>
                  Easycommunity is alive with thousands of trusted travellers who give you up-to-date information to plan your next trip with zero confusion.
                </p>
              </div>
            </div>
            </Col>
          </Row>
        </div>
      </Row>
    </React.Fragment>
  );
}
export default Sixth_page;
