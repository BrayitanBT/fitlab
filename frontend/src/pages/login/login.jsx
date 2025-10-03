import { Link } from 'react-router-dom';
import './login.css';
import { Undo2 } from 'lucide-react';
export default function Login({ handleSubmit, setEmail, setPassword }) {
  return (
    <div className='login-page'>
      <div className="login-container">
        <Link to="/"><p className='return-buton'>Inicio <Undo2/></p></Link>
        <h2 className="login-title">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email" className="login-label">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />

          <label htmlFor="password" className="login-label">Contraseña:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />

          <button type="submit" className="login-button">Ingresar</button>
        </form>

        <p className="login-register-text">
          ¿No tienes una cuenta?{" "}
          <Link to="/sign-up" className="login-register-link">
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
}