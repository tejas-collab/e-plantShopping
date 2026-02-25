import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  {
    category: "Indoor Plants",
    items: [
      { id: 1, name: "Snake Plant", price: 20, image: "https://via.placeholder.com/150" },
      { id: 2, name: "Peace Lily", price: 25, image: "https://via.placeholder.com/150" },
      { id: 3, name: "Spider Plant", price: 18, image: "https://via.placeholder.com/150" },
      { id: 4, name: "Aloe Vera", price: 15, image: "https://via.placeholder.com/150" },
      { id: 5, name: "Pothos", price: 22, image: "https://via.placeholder.com/150" },
      { id: 6, name: "Rubber Plant", price: 30, image: "https://via.placeholder.com/150" }
    ]
  },
  {
    category: "Outdoor Plants",
    items: [
      { id: 7, name: "Rose", price: 12, image: "https://via.placeholder.com/150" },
      { id: 8, name: "Lavender", price: 14, image: "https://via.placeholder.com/150" },
      { id: 9, name: "Tulip", price: 10, image: "https://via.placeholder.com/150" },
      { id: 10, name: "Hibiscus", price: 16, image: "https://via.placeholder.com/150" },
      { id: 11, name: "Jasmine", price: 13, image: "https://via.placeholder.com/150" },
      { id: 12, name: "Bougainvillea", price: 19, image: "https://via.placeholder.com/150" }
    ]
  },
  {
    category: "Succulents",
    items: [
      { id: 13, name: "Echeveria", price: 8, image: "https://via.placeholder.com/150" },
      { id: 14, name: "Jade Plant", price: 9, image: "https://via.placeholder.com/150" },
      { id: 15, name: "Cactus", price: 7, image: "https://via.placeholder.com/150" },
      { id: 16, name: "Haworthia", price: 11, image: "https://via.placeholder.com/150" },
      { id: 17, name: "Sedum", price: 6, image: "https://via.placeholder.com/150" },
      { id: 18, name: "Crassula", price: 10, image: "https://via.placeholder.com/150" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#eee" }}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </nav>

      <h1>Our Plants</h1>

      {plants.map((group) => (
        <div key={group.category}>
          <h2>{group.category}</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {group.items.map((plant) => (
              <div key={plant.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
                <img src={plant.image} alt={plant.name} width="150" />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>

                <button
                  onClick={() => handleAdd(plant)}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
