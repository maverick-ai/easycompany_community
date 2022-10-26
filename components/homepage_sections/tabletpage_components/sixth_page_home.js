import { Row, Col } from "react-bootstrap";
import sy from "./sixth_page_home.module.scss";
import React from "react";

function Sixth_page_tab () {
    return (
        <React.Fragment>
            <Row>
                <Col className={sy.leftContainer}>
                    <Row>
                        <div className={sy.tw}>
                            <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/travel.png" className={sy.travel}></img>
                            <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/world.png" className={sy.world}></img>
                        </div>
                    </Row>
                    <Row>
                        <div className={sy.textDiv}>
                            <p className={sy.bigplace}>
                                The world is a big place, we're trying to bring it <br /> within your{" "}
                                <span className={sy.fontstyleinner}>reach.</span>
                            </p>
                        </div>
                    </Row>
                    <Row>
                        <div>
                            <span className={sy.dot}></span>
                            <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/Line3.png" className={sy.line3}></img>
                        </div>
                    </Row>
                    <Row>
                        <div className={sy.textDiv}>
                            <p className={sy.bigplace}>
                                Post a query about anything you need help <br /> with about your trip -
                                where to stay, what to <br /> do, where to eat, what to pack, how much <br />
                                cash you need, how to get around the city, <br /> anything!
                                <span className={sy.fontstyleinner}> Easycommunity</span> will
                                answer.
                            </p>
                        </div>
                        <img src="desktopHome/globe.png" className={sy.globe1}></img>
                    </Row>
                </Col>
                <Col>
                    <div className={sy.imgSection}>
                        <div className={sy.imgDiv}>
                            <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/sun1.png" className={sy.sun1}></img>
                        </div>
                        <div className={sy.imgDiv}>
                            <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/sun2.png" className={sy.sun2}></img>
                        </div>
                        <div className={sy.imgDiv}>
                            <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/sun4.png" className={sy.sun4}></img>
                        </div>
                        <div className={sy.imgDiv}>
                            <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/sun3.png" className={sy.sun3}></img>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className={sy.whiteContainer}>
                <div className={sy.white}>
                    <div className={sy.paraDiv}>
                        <p className={sy.whitep}>
                            <span className={sy.whites}>Easycommunity</span> offers a vast
                            collection of travel-related questions and answers. <br /> Improvise your
                            dream trip by asking us your queries about new and offbeat places,
                            food <br /> recommendations, or anything else. Find the best answer to
                            your travel questions or <br /> help others get their questions answered!
                        </p>
                    </div>
                </div>
                <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/sunb.png" className={sy.sunb}></img>
                <div className={sy.cardDiv}>
                    <img src="https://spaces-shortsqueeze.sgp1.cdn.digitaloceanspaces.com/static/easycommunity/polar1.png" className={sy.polar1}></img>

                    <img src="https://spaces-shortsqueeze.sgp1.cdn.digitaloceanspaces.com/static/easycommunity/polar2.png" className={sy.polar2}></img>

                    <img src="https://spaces-shortsqueeze.sgp1.cdn.digitaloceanspaces.com/static/easycommunity/polar3.png" className={sy.polar3}></img>

                    <img src="https://spaces-shortsqueeze.sgp1.cdn.digitaloceanspaces.com/static/easycommunity/polar4.png" className={sy.polar4}></img>
                </div>
            </Row>
        </React.Fragment>
    );
}

export default Sixth_page_tab;