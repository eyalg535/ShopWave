import React from "react";

function CardCart({ image, title, price, removeOrder }) {
  return (
    <div className="col mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* <p className="card-text">{description}</p> */}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: ${price}</li>
        </ul>
        <div className="card-body">
          <button
            type="button"
            className="btn btn-danger mr-2 md-"
             onClick={removeOrder}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardCart;

