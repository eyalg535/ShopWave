import React from "react";

function PrevCardCart(props) {
  return (
    <div className="col mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text"></p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: ${props.price}</li>
        </ul>
      </div>
    </div>
  );
}

export default PrevCardCart;
