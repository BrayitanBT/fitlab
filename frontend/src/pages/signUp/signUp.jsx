import './signUp.css';
import {Link} from 'react-router-dom';
import { Undo2 } from 'lucide-react';
export default function SignUp({ handleSubmit, setName, setPassword, setEmail }) {
  return (
      <div className='signUp-page'>
        <div className="registro-container">
          <Link to="/"><p className='return-buton'>Inicio <Undo2/></p></Link>
          <h2 className="registro-title">Registrarse</h2>
          <form onSubmit={handleSubmit} className="registro-form">
            <label htmlFor="Nom" className="registro-label">Nombre:</label>
            <input
              type="text"
              name="Nom"
              id="Nom"
              onChange={(e) => setName(e.target.value)}
              required
              className="registro-input"
            />

            <label htmlFor="Tel" className="registro-label">Contraseña:</label>
            <input
              type="text"
              name="Tel"
              id="Tel"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="registro-input"
            />

            <label htmlFor="Cor" className="registro-label">Correo:</label>
            <input
              type="email"
              name="Cor"
              id="Cor"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="registro-input"
            />

            <button type="submit" className="registro-button">Crear cuenta</button>
          </form>

          <div className="registro-login-text">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/log-in">
              <p className="registro-login-link">Inicia sesión</p>
            </Link>
          </div>
        </div>
      </div> 
  );
}
