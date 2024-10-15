import React from 'react';
import ProductCard from './ProductCard';

const HomePage = ({ addToCart }) => {
  const laptopProducts = [
    { id: 1, name: 'Laptop Pro Trilon', price: 4500, image: '/images/laptop.jpg' },
    { id: 2, name: 'Laptop Ultra Vortex', price: 4700, image: '/images/laptop2.jpg' },
    { id: 3, name: 'Laptop Gamer Hyperion', price: 5000, image: '/images/laptop3.jpg' },
    { id: 4, name: 'Laptop Office Gipomu', price: 4200, image: '/images/laptop4.jpg' }
  ];

  const tvProducts = [
    { id: 5, name: 'Telewizor 4K Bumike', price: 3500, image: '/images/tv.jpg' },
    { id: 6, name: 'Telewizor Smart Trosper', price: 3600, image: '/images/tv2.jpg' },
    { id: 7, name: 'Telewizor LED Loshka', price: 3700, image: '/images/tv3.jpg' },
    { id: 8, name: 'Telewizor OLED Votrox', price: 3900, image: '/images/tv4.jpg' }
  ];

  const phoneProducts = [
    { id: 9, name: 'Smartfon Trilon Pro', price: 2000, image: '/images/phone.jpg' },
    { id: 10, name: 'Smartfon Vinate Ultra', price: 2200, image: '/images/phone2.jpg' },
    { id: 11, name: 'Smartfon Gipomu Max', price: 2300, image: '/images/phone3.jpg' },
    { id: 12, name: 'Smartfon Fonidor Elite', price: 2500, image: '/images/phone4.jpg' }
  ];

  const otherProducts = [
    { id: 13, name: 'Rower Sportowy Velocitron', price: 1500, image: '/images/bike.jpg' },
    { id: 14, name: 'Hulajnoga Elektryczna Vortex', price: 2200, image: '/images/scooter.jpg' },
    { id: 15, name: 'Głośnik Bluetooth Fonidor', price: 800, image: '/images/speaker.jpg' },
    { id: 16, name: 'Mikrofon Studyjny Quartrix', price: 300, image: '/images/mic.jpg' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Sklep Elektroniczny</h1>

      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Laptopy</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {laptopProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Telewizory</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {tvProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Smartfony</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {phoneProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Inne produkty</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {otherProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
