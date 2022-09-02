import { Row, Col } from "react-bootstrap";
import s from "./sixth_page.module.css";
import React from "react";
import DestCard from "../destcard";

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

          <Row style={{ marginTop: "10%" }}>
            <DestCard
              img1="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/dest1.png"
              para="We connect people who have questions about travel with people who have travelled enough to answer them all."
            />
            <Col xxl={2} xl={2} lg={2} md={5} sm={5} className={s.column}>
              <div style={{ width: "min-content", margin: "auto" }}>
                <div className={s.destcard}>
                  <div
                    className={s.destcard1}
                    style={{ PaddingTop: "20%", margin: "0 auto" }}
                  >
                    <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/dest2.png" className={s.destcardimg2} />
                    <div>
                      <p className={s.destcardp}>
                        We connect people who have questions about travel with
                        people who have travelled enough to answer them all.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <DestCard
              img1="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/dest3.png"
              para="We connect people who have questions about travel with people who have travelled enough to answer them all."
            />
            <DestCard
              img1="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/dest4.png"
              para="We connect people who have questions about travel with people who have travelled enough to answer them all."
            />
          </Row>
        </div>
      </Row>
    </React.Fragment>
  );
}
export default Sixth_page;
