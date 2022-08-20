import React from "react";
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
        <First_page />
        {/* -------------------------------------------second page ----------------------------------------------------- */}
        <Second_page />
        {/* -----------------------------------third page-------------------------------------------------------- */}
        <Third_page />
        {/* who are we */}
        <Fourth_page />
        {/* we are community */}

        <Sixth_page />
      </Container>
      <Row style={{ margin: "18% 0 10% 0" }}>
        <div style={{ position: "relative" }}>
          <img
            src="photos/bgpic.svg"
            style={{
              width: "100%",
              position: "absolute",
              zIndex: "0",
              bottom: "0",
              left: "0",
            }}
          />
        </div>
      </Row>
      <Container>
        <Five_page />
        <SecondLast />
        <LastPage />
      </Container>
    </React.Fragment>
  );
}

export default Page1;