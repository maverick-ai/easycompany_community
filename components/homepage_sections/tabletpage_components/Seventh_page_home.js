import React from "react";
import { Row } from "react-bootstrap";
import sy from "./Seventh_page_home.module.scss";

function Seventh_page_tab () {
    return (
        <React.Fragment>
            <Row className={sy.pageContainer}>
                <div className={sy.headingContainer}>
                    <span className={sy.heading2last}>
                        With <span className={sy.heading2lastspan}>Easycommunity</span>,
                        you get to:
                        <span>
                            <img src="https://spaces-shortsqueeze.sgp1.digitaloceanspaces.com/static/easycommunity/camImg.png" className={sy.camImg} />
                        </span>
                    </span>
                </div>
                <div className={sy.listItemsContainer}>
                    <ul className={sy.points}>
                        <li className={sy.Li}>
                            <div className={sy.round} />
                            <div className={sy.vr} />
                            <div>Know exclusive details of travel locations from our network.</div>
                        </li>
                        <li className={sy.Li}>
                            <div className={sy.round} />
                            <div className={sy.vr} />
                            <div>Learn from other travellers’ experiences.</div>
                        </li>
                        <li className={sy.Li}>
                            <div className={sy.round} />
                            <div>Find help in planning your trip from the community.</div>
                        </li>
                    </ul>
                </div>
            </Row>
        </React.Fragment>
    );
}

export default Seventh_page_tab;