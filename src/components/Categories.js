import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = ['Komputery', 'Telewizory', 'Kable', 'Monitory', 'Akcesoria'];

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold mb-4">Kategorie produktów</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map(category => (
          <Link to={`/category/${category}`} key={category} className="p-4 bg-blue-500 text-white rounded-lg">
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
