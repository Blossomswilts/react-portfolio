import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PortfolioItems from "../data/portfolio.js";

function PortfolioCard() {
    return (
        <div>
            {PortfolioItems.map((item, index) => (
                <Card key={index} className="my-4">
                    <Row className="g-0">
                        {index % 2 === 0 ? (
                            <>
                                <Col md={6}>
                                    <Card.Img variant="top" src={item.imgUrl} className="w-100 h-auto" />
                                </Col>
                                <Col md={6} className="d-flex align-items-center">
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                            <br />
                                            <br />
                                            <h4>Technologies Used:</h4>
                                            {item.tech}
                                        </Card.Text>
                                        {item.website && (
                                            <Button
                                                variant="primary"
                                                href={item.website}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="me-2"
                                            >
                                                <PublicIcon />
                                            </Button>
                                        )}
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
                                </Col>
                            </>
                        ) : (
                            <>
                                <Col md={6} className="order-md-2">
                                    <Card.Img variant="top" src={item.imgUrl} className="w-100 h-auto" />
                                </Col>
                                <Col md={6} className="d-flex align-items-center order-md-1">
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                            <br />
                                            <br />
                                            <h4>Technologies Used:</h4>
                                            {item.tech}
                                        </Card.Text>
                                        {item.website && (
                                            <Button
                                                variant="primary"
                                                href={item.website}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="me-2"
                                            >
                                                <PublicIcon />
                                            </Button>
                                        )}
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
                                </Col>
                            </>
                        )}
                    </Row>
                </Card>
            ))}
        </div>
    );
}

export default PortfolioCard;
