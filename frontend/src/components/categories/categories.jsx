// Categories.jsx
import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    { name: 'Hombre', image: '🏃‍♂️', color: 'blue' },
    { name: 'Mujer', image: '🏃‍♀️', color: 'pink' },
    { name: 'Accesorios', image: '🎒', color: 'purple' },
    { name: 'Calzado', image: '👟', color: 'green' }
  ];

  return (
    <div className="categories-section">
      <div className="categories-container">
        <h2 className="categories-title">Explora las categorías</h2>
        <div className="categories-grid">
          {categories.map((cat) => (
            <div key={cat.name} className="category-card">
              <div className={`category-content category-${cat.color}`}>
                <div className="category-icon">{cat.image}</div>
                <h3 className="category-name">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;