import Card from 'react-bootstrap/Card';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const style = {
    position: 'fixed',
    bottom: '0',
    right: '0',
    left: '0',
};

const linkStyles = {
    color: 'green',
    fontSize: '2.5em',
    transition: 'color .15s ease-in-out',
    margin: '.5em',
};

function Footer() {
    return (
        <div style={style}>
            <Card className="text-center" bg="dark" data-bs-theme="dark" expand="lg">
                <Card.Body>
                    <Card.Title>Check out my Social Media!</Card.Title>
                    <Link
                        to="https://www.linkedin.com/in/michael-tranquillo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyles}>
                        <FaLinkedin />
                    </Link>
                    <Link
                        to="https://github.com/Blossomswilts"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyles}>
                        <FaGithub />
                    </Link>
                    <Link
                        to="https://www.instagram.com/blossomswilt/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyles}>
                        <FaInstagram />
                    </Link>
                </Card.Body>
                <Card.Footer className="text-muted">Michael Tranquillo</Card.Footer>
            </Card>
        </div>
    );
}

export default Footer;
