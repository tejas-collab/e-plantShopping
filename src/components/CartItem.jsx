import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrease = (id) => {
    dispatch(updateQuantity({ id, amount: 1 }));
  };

  const handleDecrease = (id) => {
    dispatch(updateQuantity({ id, amount: -1 }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px"
              }}
            >
              <img src={item.image} alt={item.name} width="100" />
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>

              <button onClick={() => handleIncrease(item.id)}>+</button>
              <button onClick={() => handleDecrease(item.id)}>-</button>
              <button onClick={() => handleRemove(item.id)}>
                Delete
              </button>
            </div>
          ))}

          <h2>Total Cart Amount: ${totalAmount}</h2>

          <button onClick={() => alert("Checkout Coming Soon!")}>
            Checkout
          </button>

          <br />
          <br />

          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default CartItem;
