import classes from "./navbar.module.css";
import "font-awesome/css/font-awesome.min.css";


import { Navbar,Container,Nav } from "react-bootstrap";


function MainNavbar(props) {
  return (
    <Navbar collapseOnSelect={true}  expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
        <span style={{boxShadow: "inset 0 -15px 0 0 #7ed957",fontSize:"40px",fontWeight:"700"}}>easycommunity</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={`${classes.Toggler}`} style={{ transform: "translateY(20%)" ,borderColor:"transparent",color: "#7ed957"}}>
        <i className="fa fa-bars"></i>
        </ Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
          <Nav.Link href="/search" className={`${classes.a}`}>
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
            <Nav.Link href="" className={`${classes.a}`}>
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