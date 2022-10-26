import { Row, Col } from "react-bootstrap";
import s from "./second_page_home.module.scss";
import React from "react";

function Second_page_tab () {
    return (
        <React.Fragment>
            <Row>
                <div className={s.mainContainer}>
                    <div className={s.topSection}>
                        <div className={s.sectionHead}>
                            <span className={s.p3h}>
                                Simplify your <span className={s.love}>travel</span> like <br />{" "}
                                never before.
                            </span>
                            <div>
                                <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/map1.png" className={s.mapp} />
                            </div>
                        </div>
                        <div className={s.p2div}>
                            <p className={s.p2}>
                                Planning a trip to somewhere new? Solo or in a group? Looking <br />
                                for recommendations? Need advice? Whether you're trying to <br />
                                figure out which city in Italy has the best gelato or how to pay <br />
                                for your hostel stay in New Zealand.
                            </p>
                        </div>
                    </div>
                </div>
            </Row>
            <Row>
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
            </Row>
        </React.Fragment>
    );
}

export default Second_page_tab;