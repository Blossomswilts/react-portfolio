import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import PortfolioItems from "../data/portfolio.js";

function PortfolioCard() {
    return (
        <Row xs={1} md={2} className="g-4">
            {PortfolioItems.map((item, index) => (
                <div key={index} className="projectCard">
                    <Card style={{ width: "35em" }}>
                        <Card.Img variant="top" src={item.imgUrl} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.description}
                                <br />
                                <br />
                                <h4>Technologies Used:</h4>
                                {item.tech}
                            </Card.Text>
                            {/* if website show a button with web icon */}
                            {item.website && (
                                <Button
                                    variant="primary"
                                    href={item.website}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <PublicIcon />
                                </Button>
                            )}
                            {/* if github show a button with github icon */}
                            {item.github && (
                                <Button
                                    variant="secondary"
                                    href={item.github}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <GitHubIcon />
                                </Button>
                            )}
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </Row>
    );
}

export default PortfolioCard;
