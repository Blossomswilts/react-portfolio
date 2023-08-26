import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
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
                    >
                        <FaLinkedin />
                    </Link>
                    <Link
                        to="https://github.com/Blossomswilts"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
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
