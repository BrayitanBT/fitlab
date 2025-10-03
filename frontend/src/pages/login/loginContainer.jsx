import { useState } from 'react';
import Login from './login'; 
import { useNavigate } from 'react-router-dom';
import './login.css'
export default function LoginContainer() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8000/loginUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await res.json();

      if (res.ok) {
        alert(`✅ Bienvenido, ${result.nombre}`);
        localStorage.setItem('usuario', JSON.stringify(result));
        navigate('/');
      } else {
        alert(`❌ ${result.error}`);
      }
    } catch (err) {
      console.error('Error en login:', err);
    }
  };

  return (
    <Login
      handleSubmit={handleSubmit}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
}
