import classes from "./navbar.module.css";
import "font-awesome/css/font-awesome.min.css";
import GradientBtn from "../components/GradienButton";

import { Navbar, Container, Nav } from "react-bootstrap";

function MainNavbar(props) {
  return (
    <Navbar collapseOnSelect={true} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img src="/icons/EASYCOMMUNITY_ICON.png" alt="Company logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={`${classes.Toggler}`}
          style={{
            transform: "translateY(20%)",
            borderColor: "transparent",
            // color: "#7ed957",
            color: "white",
          }}
        >
          <i className="fa fa-bars"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            {/* <Nav.Link href="/home" className={`${classes.a}`}>
              <button
                className={`${classes.btn} btn btn-sm ${classes.navButtons}`}
              >
                Home
              </button>
            </Nav.Link> */}
            <Nav.Link href="/questions?page=1" className={`${classes.a}`}>
              <button
                className={`${classes.btn} btn btn-sm ${classes.navButtons}`}
              >
                Questions
              </button>
            </Nav.Link>
            <Nav.Link href="/create" className={`${classes.a}`}>
              <button
                className={`${classes.btn} btn btn-sm ${classes.navButtons}`}
              >
                Ask
              </button>
            </Nav.Link>
            <Nav.Link href="/search" className={`${classes.a}`}>
              <button
                className={`${classes.btn} btn btn-sm ${classes.navButtons}`}
              >
                Search
              </button>
            </Nav.Link>

            <Nav.Link href="/login">
              {/* <button
                className={`${classes.btn} btn btn-sm ${classes.navButtons}`}
              >
                Log in
              </button> */}
              <GradientBtn>Log in</GradientBtn>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
