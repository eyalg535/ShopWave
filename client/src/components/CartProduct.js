// import React from "react";
// import CardCart from "./CardCart";

// export default function CartProduct(props) {
//   let image = props.product.image;

//   let price = props.product.price === undefined ? "120" : props.product.price;

//   return (
//     <div>
//       <CardCart
//         title={props.product.title}
//         description={props.product.description}
//         image={image}
//         price={price}
//         removeOrder={props.removeOrder}
//         order={props.order}
//       />
//     </div>
//   );
// }

// CartProduct.jsx
import React from "react";
import CardCart from "./CardCart";

function CartProduct({ product, order, removeOrder }) {
  //  const { image, title = "", description = "", price = "120" } = product;
  // let image = product.image;
console.log("product",product);
  return (
    <div>
      <CardCart
         image={product.image}
         title={product.title}
         description={product.description}
         price={product.price}
         order={product.order}
         removeOrder={removeOrder}
        product={product}
      />
    </div>
  );
}

export default CartProduct;
