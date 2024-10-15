import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const generateRandomProducts = (category, count) => {
  const randomNames = [
    'Pro', 'Ultra', 'Max', 'Plus', 'Elite', 'Gipomu', 'Trosper', 'Hyperion', 'Vortex', 'Branox', 'Fonidor', 'Loshka', 'Trilon', 'Vinate'
  ];

  const randomProducts = [];

  for (let i = 0; i < count; i++) {
    const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
    const productName = `${category} ${randomName}`;
    const randomPrice = Math.floor(Math.random() * 9000) + 100;

    randomProducts.push({
      id: `${category}-${i}`,
      name: productName,
      price: randomPrice,
      image: '/images/placeholder.jpg'
    });
  }

  return randomProducts;
};

const CategoryPage = ({ addToCart }) => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsByCategory = {
      'Komputery i laptopy': generateRandomProducts('Laptop', 40),
      Telewizory: generateRandomProducts('Telewizor', 40),
      Smartfony: generateRandomProducts('Smartfon', 40),
      Zegarki: generateRandomProducts('Zegarek', 40),
      Audio: generateRandomProducts('Głośnik', 40),
      'Sprzęt AGD': generateRandomProducts('AGD', 40),
      Rower: generateRandomProducts('Rower', 40),
      Hulajnogi: generateRandomProducts('Hulajnoga', 40),
      Monitory: generateRandomProducts('Monitor', 40),
      Tostery: generateRandomProducts('Toster', 40),
      Miksery: generateRandomProducts('Mikser', 40),
      Głośniki: generateRandomProducts('Głośnik', 40),
      Kamery: generateRandomProducts('Kamera', 40),
      Mikrofony: generateRandomProducts('Mikrofon', 40),
      Kable: generateRandomProducts('Kabel', 40),
      'Akcesoria komputerowe': generateRandomProducts('Akcesoria komputerowe', 40),
      'Akcesoria do telefonów': generateRandomProducts('Akcesoria do telefonów', 40),
      'Foto i kamery': generateRandomProducts('Kamera', 40),
      Gaming: generateRandomProducts('Gaming', 40),
      'Fitness i sport': generateRandomProducts('Fitness', 40),
      Dom: generateRandomProducts('Dom', 40),
      'Warsztat i ogród': generateRandomProducts('Warsztat', 40),
      Procesory: generateRandomProducts('Procesor', 40),
      'Zasilacze komputerowe': generateRandomProducts('Zasilacz', 40),
      Drony: generateRandomProducts('Dron', 40)
    };

    setProducts(productsByCategory[categoryName] || []);
  }, [categoryName]);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-semibold mb-8">Kategoria: {categoryName}</h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Brak produktów w tej kategorii.</p>
      )}
    </div>
  );
};

export default CategoryPage;
