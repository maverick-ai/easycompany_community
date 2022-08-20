import { Row } from "react-bootstrap";
import s from "./fourth_page.module.css";
import React from "react";

function Fourth_page() {
  return (
    <React.Fragment>
      <Row>
        <div
          style={{
            textAlign: "center",
            position: "relative",
            marginTop: "8%",
          }}
        >
          <img src="desktopHome/map1.png" className={s.mapp} />

          <span className={s.love1}>
            <span>
              <img
                src="desktopHome/arrow1.png"
                className={s.arorrr}
                style={{ position: "absolute" }}
              />
            </span>
            Who Are We?
          </span>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <div className={s.whop}>
              <p>
                A free digital space where hundreds of thousands of people can
                share their knowledge about travel and tourism in an open forum.
              </p>
            </div>
            <div className={s.vr} />
            <div className={s.whop}>
              <p>
                At Easycommunity, we believe you should see as much of the world
                as possible. Easycommunity is building a digital space to find
                and contribute answers regarding travel and tourism.
              </p>
            </div>
            <div className={s.vr} />
            <div className={s.whop}>
              <p>
                You might not be able to get your mom on the phone to know what
                to pack, but there's another way to find trusted answers before
                your trip: from Easycommunity.
              </p>
            </div>
          </div>
          <img src="desktopHome/map2.png" className={s.maop} />
        </div>
      </Row>
    </React.Fragment>
  );
}
export default Fourth_page;
