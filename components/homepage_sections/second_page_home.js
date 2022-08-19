import { Row, Col } from "react-bootstrap";
import s from "../../styles/page1a.module.css";
import React from "react";

function Second_page() {
  return (
    <React.Fragment>
      <Row>
        <Col xl={5}>
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
        </Col>
        <Col xl={7}>
          <div style={{ width: "100%", display: "flex" }}>
            <div style={{ width: "25%" }}>
              <img src="photos/img1.png" className={s.travimg} />
            </div>
            <div style={{ width: "25%" }}>
              <img src="photos/img2.png" className={s.travimg} />
            </div>
            <div style={{ width: "25%" }}>
              <img src="photos/img3.png" className={s.travimg} />
            </div>
            <div style={{ width: "25%" }}>
              <img src="photos/img4.png" className={s.travimg} />
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}
export default Second_page;
