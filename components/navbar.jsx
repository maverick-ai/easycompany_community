import classes from "./navbar.module.scss";
import "font-awesome/css/font-awesome.min.css";
import GradientBtn from "../components/GradienButton";
import { useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useCookies } from "react-cookie";
import Cookies from "react-cookie";
function MainNavbar(props) {

  // console.log(cookie.token);
  const NavLinks = [
    {
      path: "/questions",
      name: "Questions",
    },
    {
      path: "/create",
      name: "Ask",
    },
    {
      path: "/search",
      name: "Search",
    },
    {
      path: "/profile",
      name: "Profile",
    },
  ];

  const router = useRouter();
  return (
    <Container>
      <Navbar collapseOnSelect={true} expand="lg" fixed="top" className={classes.bigback}>
        <Container>
          <Navbar.Brand href="/" className={classes.logo}>
            <img
              style={{ height: "40px", width: "196px" }}
              src="/icons/EASYCOMMUNITY_v2_1_1.png"
              alt="Company logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className={`${classes.Toggler}`}
            style={{
              transform: "translateY(20%)",
              borderColor: "transparent",
              color: "white",
              // marginTop: "2px"
            }}
          >
            <i className="fa fa-bars"></i>
          </Navbar.Toggle>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={classes.bignav}
          >
            <Nav className="m" style={{ justifyContent: "center" }}>
              {NavLinks.map(({ name, path }) => (
                <Nav.Link
                  // href={path}
                  key={name}
                  className={`${
                    router.pathname === path ? classes.active : ""
                  } ${classes.navLink}`}
                >
                  <p onClick={()=>{
                    router.push(path)
                  }}>{name}</p>
                </Nav.Link>
              ))}

              {!Cookies&&<Nav.Link href="/login" className={classes.login}>
                <GradientBtn>Log in</GradientBtn>
                
              </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default MainNavbar;



