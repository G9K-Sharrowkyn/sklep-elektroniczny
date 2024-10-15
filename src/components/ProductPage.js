import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Szczegóły produktu {productId}</h1>
      <p className="text-lg mb-4">Generyczny opis produktu.</p>
      <p className="text-gray-600">Cena: XXX.</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Dodaj do koszyka</button>
    </div>
  );
};

export default ProductPage;
