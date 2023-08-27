import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const style = {
    width: "100%",
    height: "auto",
    bottom: "0",
    position: "fixed",
    marginTop: "20px",
};

const linkStyles = {
    color: 'green',
    fontSize: '2.5em',
    transition: 'color .15s ease-in-out',
    margin: '.5em',
  }

function Footer() {
    return (
        <div style={style}>
            <Card
                className="text-center"
                bg="dark"
                data-bs-theme="dark"
                expand="lg"
            >
                <Card.Body>
                    <Card.Title>
                        &quot;Don&apos;t judge each day by the harvest you reap
                        but by the seeds that you plant.&quot; - Robert Louis
                        Stevenson
                    </Card.Title>
                    <Card.Text>Check out my LinkedIn and GitHub!</Card.Text>
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
                </Card.Body>
                <Card.Footer className="text-muted">
                    Michael Tranquillo
                </Card.Footer>
            </Card>
        </div>
    );
}

export default Footer;
