import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cart }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const cartItemsCount = Array.isArray(cart) ? cart.length : 0;

  const categories = [
    'Komputery i laptopy', 'Telewizory', 'Smartfony', 'Zegarki', 'Audio', 'Sprzęt AGD',
    'Rowery i hulajnogi', 'Monitory', 'Kable', 'Akcesoria komputerowe', 'Akcesoria do telefonów', 
    'Foto i kamery', 'Gaming', 'Fitness i sport', 'Dom', 'Warsztat i ogród', 'Drony', 
    'Karty graficzne', 'Procesory', 'Zasilacze komputerowe', 'Urządzenia peryferyjne'
  ];

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline">Strona główna</Link>
          
          <div className="relative dropdown">
            <button 
              onClick={toggleDropdown} 
              className="hover:underline"
            >
              Kategorie
            </button>
            {isDropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-72 bg-white text-black rounded-lg shadow-lg z-10"
              >
                <ul className="grid grid-cols-2 gap-4 p-4">
                  {categories.map((category) => (
                    <li key={category} className="hover:bg-blue-500 hover:text-white">
                      <Link to={`/category/${category}`} className="block px-4 py-2">{category}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link to="/promotions" className="hover:underline">Promocje</Link>
          <Link to="/contact" className="hover:underline">Kontakt</Link>
        </div>
        <Link to="/cart" className="hover:underline">
          Koszyk ({cartItemsCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
