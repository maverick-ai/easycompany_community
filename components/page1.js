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
        <div style = {{maxWidth: '1400px', marginTop:"20px"}}>
        <First_page />
        <Second_page />
        <Third_page />
        <Fourth_page />
        <Sixth_page />
        </div>
      </Container>
      <Row style={{ margin: "21% 0 10% 0" }}>
        <div style={{ position: "relative", margin: "1% 0 0% 0" }}>
          <img
            src="desktopHome/bigpic.png"
            style={{
              width: "100%",
              position: "absolute",
              zIndex: "0",
              bottom: '0px',
              left: "0",
            }}
          />
        </div>
      </Row>
      <Container>
        <div style = {{maxWidth: '1366px'}}>
        <Five_page />
        <SecondLast />
        <LastPage />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Page1;
