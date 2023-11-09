import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../fakeData/fakedb";

const Orders = () => {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const handleRemoveItem = (id) => {
    console.log(id);
    const remainingProduct = cart.filter((product) => product.id !== id);
    setCart(remainingProduct);
    removeFromDb(id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            handleRemoveItem={handleRemoveItem}
            product={product}
          ></ReviewItem>
        ))}
        {cart.length === 0 && (
          <h2>
            No items for Review. Please <Link to="shop">Shop more</Link>
          </h2>
        )}
      </div>
      <div className="card-container">
        <Cart clearCart={clearCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
