// Features.jsx
import React from 'react';
import { Truck, Shield, Heart, Star } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Truck className="feature-icon" />,
      title: 'Envío Gratis',
      description: 'En compras superiores a $150.000'
    },
    {
      icon: <Shield className="feature-icon" />,
      title: 'Compra Segura',
      description: 'Protegemos tus datos 100%'
    },
    {
      icon: <Heart className="feature-icon" />,
      title: 'Garantía Total',
      description: '30 días para devoluciones'
    },
    {
      icon: <Star className="feature-icon" />,
      title: 'Calidad Premium',
      description: 'Productos certificados'
    }
  ];

  return (
    <div className="features-section">
      <div className="features-container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;