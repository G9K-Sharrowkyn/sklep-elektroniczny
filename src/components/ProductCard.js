import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="bg-black w-full h-48 mb-4 flex items-center justify-center">
        <img src={product.image} alt={product.name} className="h-48 object-contain" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-700">Cena: {product.price} PLN</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Dodaj do koszyka
      </button>
    </div>
  );
};

export default ProductCard;
