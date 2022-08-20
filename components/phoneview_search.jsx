import { Container, Col } from "react-bootstrap";
import s from "./PhoneView.module.css";
import { useState, useEffect } from "react";
import Link from "next/dist/client/link";
import { Row } from "react-bootstrap";
import MobileCard from "./mobileSearchCard";
function PhoneView() {
  const [data, setData] = useState({ search: "" });

  return (
    <Container>
      <Row>
        <Col>
          <div className={s.big1}>
            <div className={s.heading1div}>
              <span className={s.heading1}>Find answers to your questions</span>
              <h1 className={s.search}>Search</h1>
              <div className={s.underline}>
                <img
                  src={"/searchUnderline.png"}
                  style={{ width: "220px", height: "17px" }}
                />{" "}
              </div>
            </div>
            <div style={{ margin: "0 auto" }}>
              <div className={s.inputdiv}>
                <img
                  src="/Vector.png"
                  style={{ width: "18.76px", height: "18.76px" }}
                  className={s.qimg}
                />
                <input
                  className={s.input}
                  id="query"
                  type="text"
                  autoComplete="query"
                  value={data.search}
                  onChange={(event) => setData({ search: event.target.value })}
                  required
                  placeholder="Enter Search Term"
                ></input>
              </div>
            </div>

            <Link
              href={{
                pathname: "/search_detail",
                query: data,
              }}
            >
              <button
                className={s.btn}
                style={{ fontSize: "20px", width: "40%", marginTop: "10%" }}
              >
                Submit
              </button>
            </Link>
            <div style={{ position: "relative" }}>
              <div style={{ width: "100%", height: "440px" }} />

              <div className={s.paris}>
                <div className={s.pardiv}>Par</div>
                <img src="/Group.svg" className={s.tower} />
                <div className={s.s}>s</div>
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                }}
              >
                <img
                  src="/u1.png"
                  style={{ width: "180px", height: "290px", margin: "0 auto" }}
                />
              </div>
              <div
                className={s.grad}
                style={{
                  position: "absolute",
                  bottom: "0px",
                  left: "0",
                  right: "0",
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                  width: "180px",
                  height: "50px",
                }}
              >
                <span className={s.dreamt}>MY dream Trip</span>

                {/* <img src="/grad.svg" style={{width:"180px",height:"50px",margin:"0 auto",position:"absolute",right:"100px"}} /> */}
                <div className={s.london}>
                  <span style={{ fontSize: "35px" }}>London</span>
                </div>
                <div className={s.rome}>
                  <span style={{ fontSize: "35px" }}>Rome</span>
                </div>
                <div className={s.crown}>
                  <img
                    src="/Crown.png"
                    style={{ width: "44px", height: "44px" }}
                  />
                </div>
                <div className={s.romec}>
                  <img
                    src="/rome_build.png"
                    style={{ width: "45px", height: "60px" }}
                  />
                </div>
                <div className={s.arrowr}>
                  <img
                    src="/right_fly_arrow.png"
                    style={{ width: "80px", height: "43px" }}
                  />
                </div>
                <div className={s.arrowl}>
                  <img
                    src="/left_fly_arrow.png"
                    style={{ width: "80px", height: "43px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PhoneView;
