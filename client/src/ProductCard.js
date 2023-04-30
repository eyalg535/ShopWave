import React from 'react';
import { Card, Button } from 'react-bootstrap';
import BasicRating from './BasicRating';

function ProductCard(props) {
  const handleAddToCart = () => {
    props.onAddToCart(props.product);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.price}
        </Card.Text>
        <Card.Text>
          Quantity: {props.quantity}
        </Card.Text>
        <BasicRating />
        <Button variant="danger" onClick={props.onRemove}>
          Remove
        </Button>
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
