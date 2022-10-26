import { Row, Col } from "react-bootstrap";
import s from "./third_page_home.module.scss";
import React from "react";

function third_page_tab () {
    return (
        <React.Fragment>
            <Row>
                <div className={s.headingContainer}>
                    <div className={s.headingSection}>
                        <span className={s.p3h}>
                            <span>
                                <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/compass.png" className={s.compass} />
                            </span>
                            Welcome to the <span className={s.love}>Most lovable</span>
                            <span>
                                <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/arrl.png" className={s.arrl} />
                            </span>{" "}
                            <br />
                            travel community!
                        </span>
                    </div>
                </div>
            </Row>
            <Row>
                <div className={s.photosSection}>
                    <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/plane.png" className={s.plane} />
                    <div className={s.carddiv}>
                        <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/trio_1.png" className={s.card} />
                        <div className={s.card1Section}>
                            <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/tri.png" className={s.tri} />
                            <div className={s.ques}>
                                <p className={s.questext}>Solo or in a group? <br /> Need advice?</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.carddiv}>
                        <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/trio_2.png" className={s.card} />
                        <div className={s.card1Section}>
                            <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/tri.png" className={s.tri} />
                            <div className={s.ques}>
                                <p className={s.questext}>
                                    Looking for <br /> recommendations?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={s.carddiv}>
                        <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/trio_3.png" className={s.card} />
                        <div className={s.card1Section}>
                            <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/tri.png" className={s.tri} />
                            <div className={s.ques}>
                                <p className={s.questext}>Planning a trip to <br /> somewhere new?</p>
                            </div>
                        </div>
                    </div>
                    <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/bag1.png" className={s.bag1}></img>
                </div>
            </Row>
            <Row className={s.page2Container}>
                <Col className={s.leftText}>
                    <Row>
                        <Col>
                            <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/suitcase.png" className={s.suit}></img>
                        </Col>
                    </Row>
                    <Row>
                        <div className={s.outer}>
                            <p className={s.fontstyleouter}>
                                <span className={s.fontstyleinner}>Easycommunity</span> has <br />
                                answers to all of your questions! <br />
                                And if it doesn't yet ? <br /> Well,
                                <span className={s.fontstyleinner}> Just Ask!</span>
                            </p>
                        </div>
                    </Row>
                    <Row>
                        <Col>
                            <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/map2.png" className={s.maop} />
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/purpleglobe.png" className={s.globe}></img>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default third_page_tab;