import PortfolioCard from "../components/PortfolioData.jsx";
import { Container, Col, Row } from "react-bootstrap";
import stack from "../data/stack.js";

function Portfolio() {
    return (
        <div>
            <h2>Skills I&apos;ve acquired</h2>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <h3>{stack[0].name}</h3>
                        {stack[0].technologies.map((tech) => (
                            <p key={tech.id}>{tech.name}</p>
                        ))}
                    </Col>
                    <Col xs={6} md={4}>
                        <h3>{stack[1].name}</h3>
                        {stack[1].technologies.map((tech) => (
                            <p key={tech.id}>{tech.name}</p>
                        ))}
                    </Col>
                    <Col xs={6} md={4}>
                        <h3>{stack[2].name}</h3>
                        {stack[2].technologies.map((tech) => (
                            <p key={tech.id}>{tech.name}</p>
                        ))}
                    </Col>
                </Row>
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
