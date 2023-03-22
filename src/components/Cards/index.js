import react from 'react';
import Card from 'react-bootstrap/Card';

function PortfolioCards ({title, image, description, gitHub, link}) {
    return (
    <Card style={{ width: '30%' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
          <Card.Link href= {link}>
            Repository{gitHub}
          </Card.Link>
          <Card.Link  href= {link}>
            Site{link}
          </Card.Link>
      </Card.Body>
    </Card>
    )
}
export default PortfolioCards;