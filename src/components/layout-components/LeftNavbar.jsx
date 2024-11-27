import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
      .then(res => res.json())
      .then(data => setCategories(data.data.news_category))
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
      <h2 className="font-semibold mb-3">All Category ({categories.length})</h2>
      <div className="flex flex-col gap-1  ">
        {categories.map(category => (
          <NavLink
            to={`/category/${category.category_id}`}
            className="px-3 py-1 bg-gray-50 border rounded-lg font-semibold text-gray-700 text-left"
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
