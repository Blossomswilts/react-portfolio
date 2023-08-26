import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function Navigation() {
    const currentPage = useLocation().pathname;
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand
                        as={Link}
                        to="/"
                        className={
                            currentPage === "/" ? "nav-link active" : "nav-link"
                        }
                    >
                        Michael Tranquillo
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link
                            as={Link}
                            to="/About"
                            className={
                                currentPage === "/About"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/Portfolio"
                            className={
                                currentPage === "/Portfolio"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Portfolio
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/Contact"
                            className={
                                currentPage === "/Contact"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Contact
                        </Nav.Link>
                        <button type="button" className="btn btn-outline-light">
                            Resume
                        </button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;
