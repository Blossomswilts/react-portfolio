import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';

const style = {
    position: 'fixed',
    top: '0',
    right: '0',
    left: '0',
    zIndex: '100',
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
                        className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                        navbarScroll>
                        Michael Tranquillo
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                as={Link}
                                to="/About"
                                className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>
                                About
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/Portfolio"
                                className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
                                Portfolio
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/Contact"
                                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                                Contact
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="https://docs.google.com/document/d/1IA56Tr76s3DzaGczNo1gafR3hOkMQDmWGeGp9bu7X20/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer">
                                <button type="button" className="btn btn-outline-light">
                                    Resume
                                </button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;
