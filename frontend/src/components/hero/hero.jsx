// Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-page'>
      <div className="hero">
        {/* Overlay oscuro sobre la imagen */}
        <div className="hero-overlay"></div>
        
        {/* Contenido del Hero */}
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-label">Nueva Colección 2025</span>
              <h1 className="hero-title">Tu Mejor Versión Empieza Aquí</h1>
              <p className="hero-subtitle">
                Descubre la colección de ropa deportiva que se adapta a tu estilo de vida activo
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">
                  Comprar Ahora
                  <span className="btn-arrow">→</span>
                </button>
                <button className="btn btn-secondary">Ver Colección</button>
              </div>
              
              {/* Stats */}
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">10k+</span>
                  <span className="stat-label">Clientes</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Productos</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                  <span className="stat-number">4.9★</span>
                  <span className="stat-label">Rating</span>
                </div>
              </div>
            </div>
            
            <div className="hero-badge">
              <div className="badge-content">
                <div className="badge-icon">🔥</div>
                <div className="badge-number">50%</div>
                <div className="badge-text">Descuento</div>
                <div className="badge-subtext">Primera Compra</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;