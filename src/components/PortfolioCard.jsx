import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PortfolioItems from "../data/portfolio.js";

function PortfolioCard() {
    return (
        <div>
            {PortfolioItems.map((item, index) => (
                <Card key={index} style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.imgUrl} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                            {item.tech}
                        </Card.Text>
                        <Button variant="primary" href={item.link}>
                            Check it out!
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default PortfolioCard;
