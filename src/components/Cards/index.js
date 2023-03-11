import react from 'react';
import Card from 'react-bootstrap/Card';
function PortfolioCards ({title,image,description}) {
    return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
    )
}
export default PortfolioCards;