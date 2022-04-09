import classes from "./navbar.module.css";
import "font-awesome/css/font-awesome.min.css";
import Image from "next/image";
import Logo from "../public/easycommunity.png";

import { Navbar, Container, Nav } from "react-bootstrap";

function MainNavbar(props) {
  return (
    <Navbar collapseOnSelect={true} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <Image
            className={classes.logoImage}
            alt="logo"
            src={Logo}
            height={50}
            width={230}
            quality={100}
            // layout="intrinsic"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={`${classes.Toggler}`}
          style={{
            transform: "translateY(-5%)",
            borderColor: "transparent",
            color: "#7ed957",
          }}
        >
          <i className={`fa fa-bars ${classes.Gradientbars}`}></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/questions?page=1" className={`${classes.a}`}>
              <button
                className={`${classes.btn} btn btn-sm ${classes.navButtons}`}
              >
                Questions?
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
            <Nav.Link href="/about" className={`${classes.a}`}>
              <button
                className={`${classes.btn} btn btn-sm ${classes.navButtons}`}
              >
                About
              </button>
            </Nav.Link>
            <Nav.Link href="/login" className={`${classes.a}`}>
              <button
                className={`${classes.btn} btn btn-sm ${classes.navButtons}`}
              >
                log in
              </button>
            </Nav.Link>
            <Nav.Link href="/profile" className={`${classes.a}`}>
              <button
                className={`${classes.btn} btn btn-sm ${classes.navButtons}`}
              >
                <i className="fa fa-trophy"></i>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
