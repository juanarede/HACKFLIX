import "./navbar.css";
import image from "../../assets/img/hackflix.png";

import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Navbarapp() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="mb-1 navbar navbar-expand-lg navbar-dark info-color fixed-top p-md-3 scrolling-navbar"
      >
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img className="img-navbar" src={image} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="link colorlink" href="/search">
                <i class="bi bi-search"></i>SEARCH MOVIE
              </Nav.Link>
              <Nav.Link className="link colorlink" href="/About">
                ABOUT US
              </Nav.Link>
              <Nav.Link className="link colorlink" href="/contact">
                CONTACT
              </Nav.Link>
            </Nav>
            <Nav >
              <Nav.Link >
                <i  class="bi bi-bell-fill"></i>
              </Nav.Link>
              <Nav.Link  eventKey={2} href="#memes"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </div>
  );
}
