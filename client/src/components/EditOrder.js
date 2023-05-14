// import React from "react";
// import CartProduct from "./CartProduct";

// function EditOrder({ cart, removeOrder, product }) {
//   console.log("second",cart);
//   return (
//     <div className="row">
//       {cart && cart.map((product, index) => (
//         <CartProduct
//           key={index}
//           product={product}
//           removeOrder={removeOrder}
//           product_index={index}
//           isEditable={true}
//         />
//       ))}
//     </div>
//   );
// }


// export default EditOrder;

import React from "react";
import CartProduct from "./CartProduct";

export default function EditOrder({ order, product, removeOrder }) {
  return (
    <div>
      <CartProduct
        product={product}
         removeOrder={removeOrder}
        order={order}
      />
    </div>
  );
}
