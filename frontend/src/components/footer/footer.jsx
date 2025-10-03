// Footer.jsx
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';
import logo from '../../assets/img/logo_sin_fondo.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Sección de Marca */}
          <div className="footer-section">
            <img src={logo} alt="logo" />
            <p className="footer-description">
              Transformando tu estilo de vida.
            </p>
            <div className="social-links">
              <Facebook  className="social-icon" />
              <Instagram className="social-icon" />
              <Twitter className="social-icon" />
            </div>
          </div>
          
          {/* Sección Tienda */}
          <div className="footer-section">
            <h4 className="footer-heading">Tienda</h4>
            <ul className="footer-links">
              <li>Hombre</li>
              <li>Mujer</li>
              <li>Accesorios</li>
              <li>Calzado</li>
              <li>Ofertas</li>
              <li>Nueva Colección</li>
            </ul>
          </div>
          
          {/* Sección Ayuda */}
          <div className="footer-section">
            <h4 className="footer-heading">Ayuda</h4>
            <ul className="footer-links">
              <li>Contacto</li>
              <li>Envíos y Entregas</li>
              <li>Devoluciones</li>
              <li>Cambios</li>
              <li>FAQ</li>
              <li>Guía de Tallas</li>
            </ul>
          </div>
          
          {/* Sección Contacto */}
          <div className="footer-section">
            <h4 className="footer-heading">Contacto</h4>
            <ul className="footer-contact">
              <li className="contact-item">
                <MapPin className="contact-icon" />
                <span>Bogotá, Colombia</span>
              </li>
              <li className="contact-item">
                <Phone className="contact-icon" />
                <span>+57 (1) 234-5678</span>
              </li>
              <li className="contact-item">
                <Mail className="contact-icon" />
                <span>hola@fitlab.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Línea divisoria y Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">&copy; 2025 FitLab. Todos los derechos reservados.</p>
            <div className="footer-legal">
              <span>Términos y Condiciones</span>
              <span className="separator">•</span>
              <span>Política de Privacidad</span>
              <span className="separator">•</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;