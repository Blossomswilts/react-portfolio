import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const style = {
    position: "fixed",
    top: "0",
    right: "0",
    left: "0",
    zIndex: "100",
};

function Navigation() {
    const currentPage = useLocation().pathname;
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" expand="lg" style={style}>
                <Container>
                    <Navbar.Brand
                        as={Link}
                        to="/"
                        className={
                            currentPage === "/" ? "nav-link active" : "nav-link"
                        }
                        navbarScroll
                    >
                        Michael Tranquillo
                    </Navbar.Brand>
                    <Nav className="justify-content-end">
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
                        <Link
                            to="https://drive.google.com/file/d/1aG0iJS-b27Ez9i0mgJlAVpurfSIeqMop/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                type="button"
                                className="btn btn-outline-light"
                            >
                                Resume
                            </button>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;
