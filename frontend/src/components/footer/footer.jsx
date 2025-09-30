import '../../assets/css/footer.css'
import logo from '../../assets/img/logo_sin_fondo.png'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logo} alt="logoFitlab" />
          <p>Transformando tu estilo de vida</p>
        </div>

        <div className="footer-links">
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
        </div>

        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Fitlab. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
export default Footer;