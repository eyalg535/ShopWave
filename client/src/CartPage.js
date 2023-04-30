export default function CartPage({ cartItems }) {
    return (
      <div>
        <h1>Cart</h1>
        {cartItems && cartItems.length > 0 ? (
  <ul>
    {cartItems.map(item => (
      <li key={item && item.id}>{item && item.name} - ${item && item.price}</li>
    ))}
  </ul>
) : (
  <p>Your cart is empty.</p>
)}

      </div>
    );
  }
  