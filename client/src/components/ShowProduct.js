import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Card, ListGroup } from "react-bootstrap";

const ShowProduct = ({ product }) => {

  if (!product) {
    return null;
  }

  return (
    <div>
      <div className="container row row-cols-1 row-cols-md-2">
        {product.image.length < 45 &&
          product.image1.length < 45 ? (
          <Carousel>
            <div>
              <img
                className="d-block w-100"
                src={product.image}
                alt="First slide"
              />
            </div>
          </Carousel>
        ) : (
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={product.image}
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={product.image1}
                alt="Second slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={product.image2}
                alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={product.image3}
                alt="Forth slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )}
        <div className="col mb-1">
          <br />
          <br />
          <br />
          <br />
          <Card border="secondary" style={{ width: "50rem" }}>
            <Card.Header>
              <h3>Details</h3>
            </Card.Header>
            <ListGroup variant="flush">
              <Card.Body>
                <ListGroup.Item>{product.title}</ListGroup.Item>
                <ListGroup.Item>
                  {product.description === undefined ? (
                    <p>No description</p>
                  ) : (
                    product.description
                  )}
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>Price: ${product.price}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/productspage"><button type="button" className="btn btn-primary mr-2">
                    See less...
                  </button></Link>
                </ListGroup.Item>
              </Card.Body>
            </ListGroup>
            <h3>Reviews</h3>

            {/* {product.reviews.length === 0
              ? "No reviews"
              : product.reviews.map((review, index) => (
                  <p>
                    {" "}
                    {index + 1}. {review.review_text}
                  </p>
                ))} */}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
