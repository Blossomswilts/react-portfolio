import Carousel from "react-bootstrap/Carousel";
import { Container, Row } from "react-bootstrap";
import PortfolioCard from "../components/PortfolioCard.jsx";
import stack from "../data/stack.js";
import "../styles/carousel.css";

function Portfolio() {
    return (
        <div>
            <Container>
                <h1>Portfolio</h1>
                <h2>Skills</h2>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../src/assets/images/hexrgb.jpg"
                            alt="FrontEnd"
                        />
                        <Carousel.Caption>
                            <h5>{stack[0].name}</h5>
                            <div className="stacks">
                            {stack[0].technologies.map((tech) => (
                                <p key={tech.id}>{tech.name}</p>
                            ))}
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../src/assets/images/hexrgb.jpg"
                            alt="BackEnd"
                        />
                        <Carousel.Caption>
                            <h5>{stack[1].name}</h5>
                            {stack[1].technologies.map((tech) => (
                                <p key={tech.id}>{tech.name}</p>
                            ))}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../src/assets/images/hexrgb.jpg"
                            alt="Database"
                        />
                        <Carousel.Caption>
                            <h5>{stack[2].name}</h5>
                            {stack[2].technologies.map((tech) => (
                                <p key={tech.id}>{tech.name}</p>
                            ))}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>

            <Container>
                <Row>
                    <h2>Projects</h2>
                </Row>
                <Row>
                    <PortfolioCard />
                </Row>
            </Container>
        </div>
    );
}

export default Portfolio;
