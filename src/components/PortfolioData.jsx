import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PortfolioData({ title, imgUrl, tech, link }) {
    return (
        <div>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {tech}
        </Card.Text>
        <Button variant="primary" src={link}>Check it out!</Button>
      </Card.Body>
    </Card>  
                    
        </div>
    );
}

export default PortfolioData;
