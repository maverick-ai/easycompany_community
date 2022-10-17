import React from "react";
import s from "./page1.module.scss"
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import First_page from "./homepage_sections/first_page_home";
import Second_page from "./homepage_sections/second_page_home";
import Third_page from "./homepage_sections/third_home_page";
import Fourth_page from "./homepage_sections/fourth_page_home";
import Five_page from "./homepage_sections/five_page_home";
import Sixth_page from "./homepage_sections/sixth_page_home";
import SecondLast from "./homepage_sections/secondlast_home";
import LastPage from "./homepage_sections/lastpage_home";

function Page1() {
  return (
    <React.Fragment>
      <Container>
        <div className={s.initialPagesContainer}>
        <First_page />
        <Second_page />
        <Third_page />
        <Fourth_page />
        <Sixth_page />
        </div>
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
        <div className={s.lastPagesContainer}>
        <Five_page />
        <SecondLast />
        <LastPage />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Page1;
