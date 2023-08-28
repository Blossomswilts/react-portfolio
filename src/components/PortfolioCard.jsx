import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PortfolioItems from "../data/portfolio.js";


function PortfolioCard() {
    return (
        <div>
            {PortfolioItems.map((item, index) => (
                
                <div key={index} className="projectCard">
                <Card style={{ width: "18rem" }}>
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
                        <Button variant="primary" href={item.link}>
                            Check it out!
                        </Button>
                    </Card.Body>
                </Card>
                </div>
            ))}
        </div>
    );
}

export default PortfolioCard;
