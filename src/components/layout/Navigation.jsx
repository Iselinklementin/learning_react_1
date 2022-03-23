import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/home";
import About from "../routes/about";
import MyPortfolio from "../routes/my-portfolio";
import ContactMe from "../routes/contact-me";
import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  background-color: ${(props) => props.theme.secondaryBackgroundColour};
`;

export default function Navigation() {
  return (
    <Router>
      <StyledNavbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">My brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/my-portfolio">My portfolio</Nav.Link>
              <Nav.Link href="/contact-me">Contact me</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/my-portfolio" element={<MyPortfolio />} />
        <Route exact path="/contact-me" element={<ContactMe />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
