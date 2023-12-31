import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart, clearCart, children } = props;
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = (total * 0.1).toFixed(2);
  const taxPf = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + taxPf;

  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items : {quantity}</p>
      <p>Total Price : ${total}</p>
      <p>Total Shipping Charge : ${shipping}</p>
      <p>Tax : ${tax}</p>
      <p className="grand-total">Grand Total : ${grandTotal.toFixed(2)}</p>
      {/* <button onClick={clearCart}>Clear Cart </button> */}
      {children}
    </div>
  );
};

export default Cart;
