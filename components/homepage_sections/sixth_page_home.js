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
                  We connect people <br /> 
                  who have questions <br /> 
                  about travel with <br /> 
                  people who have <br /> 
                  travelled enough to <br /> 
                  answer them all.
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
                  A digital space to <br /> 
                  find and <br /> 
                  contribute <br /> 
                  answers <br /> 
                  regarding travel <br /> 
                  and tourism.
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
                  We are <br /> 
                  revolutionising how <br /> 
                  people travel by <br /> 
                  building a trusted <br /> 
                  community of fellow <br /> 
                  travellers.
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
                  Easycommunity is <br /> 
                  alive with thousands <br /> 
                  of trusted travellers <br /> 
                  who give you up-to- <br /> 
                  date information to <br /> 
                  plan your next trip <br /> 
                  with zero confusion.
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
