import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import s from "./tabletpage_home.module.scss";

import Section1 from "../components/homepage_sections/tabletpage_components/first_page_home";
import Section2 from "../components/homepage_sections/tabletpage_components/second_page_home";
import Section3 from "../components/homepage_sections/tabletpage_components/third_page_home";
import Section4 from "../components/homepage_sections/tabletpage_components/fourth_page_home";
import Section5 from "../components/homepage_sections/tabletpage_components/fifth_page_home";
import Section6 from "../components/homepage_sections/tabletpage_components/sixth_page_home";
import Section7 from "../components/homepage_sections/tabletpage_components/Seventh_page_home";
import Section8 from "../components/homepage_sections/tabletpage_components/eighth_page_home";

function TabletPage() {
    return (
        <React.Fragment>
            <Container>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
            </Container>
            <Row className={s.imgSection}>
                <div className={s.imgContainer}>
                    <img
                        src="desktopHome/bigpic.png"
                        className={s.mainImg}
                    />            
                </div>
            </Row>
            <Container>
                <Section6 />
                <Section7 />
                <Section8 />
            </Container>
        </React.Fragment>
    );
}

export default TabletPage;