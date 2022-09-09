import { Row, Col } from "react-bootstrap";
import s from "./sixth_page.module.css";
import st from '../destcard.module.css';
import React from "react";
import DestCard from "../destcard";
import DestCardDesktop from "../destcardDesktop";

function Sixth_page() {
  return (
    <React.Fragment>
      <Row>
        <div
          style={{
            position: "relative",
            marginTop: "11%",
            textAlign: "center",
          }}
        >
          <h1 className={s.headeasy}>
            WE ARE <span className={s.love1}>EASYCOMMUNITY</span>
            <span>
              <img src="desktopHome/sglobe.png" className={s.sglobe} />
            </span>
          </h1>

          <Row style={{ marginTop: "5%" }}>
            <Col style={{marginLeft:'-18%'}}>
            <div>
              <div style={{position: 'relative'}}>
                {/* <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/dest1.png" className={st.destImg1}></img> */}
              <DestCardDesktop
                img1="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/dest1.png"
                para="We connect people who have questions about travel with people who have travelled enough to answer them all."
              />
              </div>
            </div>
            </Col>
            <Col style={{marginLeft:'-12%'}}>
            <div>
              <div style={{position: 'relative'}}>
                <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/dest2.png" className={s.destcardimg2}></img>
              <DestCardDesktop
                // img1="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/dest1.png"
                para="A digital space to find and contribute answers regarding travel and tourism."
              />
              </div>
            </div>
            </Col>
            <Col style={{marginLeft:'-12%'}}>
            <div>
              <div style={{position: 'relative'}}>
                {/* <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/dest3.png" className={st.destImg3}></img> */}
              <DestCardDesktop
                img1="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/dest3.png"
                para="We are revolutionising how people travel by building a trusted community of fellow travellers."
              />
              </div>
            </div>
            </Col>
            <Col style={{marginLeft:'-12%', marginRight: '5%'}}>
            <div>
              <div style={{position: 'relative'}}>
                {/* <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/dest4.png" className={st.destImg4}></img> */}
              <DestCardDesktop
                img1="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/dest4.png"
                para="Easycommunity is alive with thousands of trusted travellers who give you up-to-date information to plan your next trip with zero confusion."
              />
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
