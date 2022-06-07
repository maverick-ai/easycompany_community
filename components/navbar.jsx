import classes from "./navbar.module.scss";
import "font-awesome/css/font-awesome.min.css";
import GradientBtn from "../components/GradienButton";
import { useRouter } from "next/router";
import { Navbar, Container, Nav } from "react-bootstrap";

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
    path: "/search_new2",
    name: "Search",
  },
];

function MainNavbar(props) {
  const router = useRouter();
  return (
    <Navbar collapseOnSelect={true} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/" className={classes.logo}>
          <img src="/icons/EASYCOMMUNITY_ICON.png" alt="Company logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={`${classes.Toggler}`}
          style={{
            transform: "translateY(20%)",
            borderColor: "transparent",
            color: "white",
            // marginTop: "2px",
          }}
        >
          <i className="fa fa-bars"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto" style={{ justifyContent: "center" }}>
            {NavLinks.map(({ name, path }) => (
              <Nav.Link
                href={path}
                key={name}
                className={`${router.pathname === path ? classes.active : ""} ${
                  classes.navLink
                }`}
              >
                <p>{name}</p>
              </Nav.Link>
            ))}

            <Nav.Link href="/login" className={classes.login}>
              <GradientBtn>Log in</GradientBtn>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
