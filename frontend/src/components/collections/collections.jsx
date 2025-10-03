// Collections.jsx
import React from 'react';
import { Zap, TrendingUp, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Collections.css';

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: 'Nueva Colección',
      subtitle: 'Primavera 2025',
      description: 'Descubre las últimas tendencias en ropa deportiva',
      discount: '30% OFF',
      icon: <Calendar className="collection-icon" />,
      color: 'purple',
      image: '🌸'
    },
    {
      id: 2,
      title: 'Best Sellers',
      subtitle: 'Los Más Vendidos',
      description: 'Productos favoritos de nuestros clientes',
      discount: '2x1',
      icon: <TrendingUp className="collection-icon" />,
      color: 'blue',
      image: '⭐'
    },
    {
      id: 3,
      title: 'Ofertas Relámpago',
      subtitle: 'Solo Por Hoy',
      description: 'Aprovecha descuentos increíbles por tiempo limitado',
      discount: 'Hasta 50%',
      icon: <Zap className="collection-icon" />,
      color: 'yellow',
      image: '⚡'
    },
    {
      id: 4,
      title: 'Premium Line',
      subtitle: 'Calidad Superior',
      description: 'Ropa deportiva de la más alta calidad',
      discount: 'Envío Gratis',
      icon: <Award className="collection-icon" />,
      color: 'green',
      image: '👑'
    }
  ];

  return (
    <div className="collections-section">
      <div className="collections-container">
        <div className="collections-header">
          <h2 className="collections-title">Colecciones Destacadas</h2>
          <p className="collections-subtitle">
            Descubre nuestras colecciones especiales y encuentra el estilo perfecto para ti
          </p>
        </div>
        <div className="collections-grid">
          {collections.map((collection) => (
            <div key={collection.id} className={`collection-card collection-${collection.color}`}>
              <div className="collection-badge">
                {collection.icon}
              </div>
              
              <div className="collection-emoji">{collection.image}</div>
              
              <div className="collection-content">
                <h3 className="collection-title">{collection.title}</h3>
                <p className="collection-subtitle">{collection.subtitle}</p>
                <p className="collection-description">{collection.description}</p>
                
                <div className="collection-discount">
                  <span className="discount-text">{collection.discount}</span>
                </div>
                
                
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Banner Promocional */}
        <div className="promo-banner">
          <div className="promo-content">
            <div className="promo-text">
              <h3 className="promo-title">🎉 ¡Únete al Club FitLab!</h3>
              <p className="promo-description">
                Suscríbete y recibe un 10% de descuento adicional en tu primera compra
              </p>
            </div>
              <Link to="sign-up">
                <button className="promo-btn">Registrarme Ahora</button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;