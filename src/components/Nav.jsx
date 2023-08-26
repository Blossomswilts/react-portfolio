import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";

function Navigation() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Michael Tranquillo
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/portfolio">
                            Portfolio
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact">
                            Contact
                        </Nav.Link>
                        <button type="button" className="btn btn-outline-light">
                            Resume
                        </button>
                    </Nav>
                </Container>
            </Navbar>
            <div>
                <Routes>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
}

export default Navigation;
