import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((acc, product) => acc + parseFloat(product.price), 0).toFixed(2);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Koszyk</h1>
      {cart.length === 0 ? (
        <p>Koszyk jest pusty. <Link to="/" className="text-blue-500">Wróć do sklepu.</Link></p>
      ) : (
        <div>
          <ul>
            {cart.map((product, index) => (
              <li key={index} className="mb-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p>Cena: {product.price} PLN</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Usuń
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold mt-6">Całkowita cena: {totalPrice} PLN</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
