import React from 'react';
import { Card, Button } from 'react-bootstrap';
// import Rating from 'react-rating';
import BasicRating from './BasicRating';

function ProductCard(props) {
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
        {/* <Rating initialRating={props.rating} readonly /> */}
        <Button variant="danger" onClick={props.onRemove}>
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
