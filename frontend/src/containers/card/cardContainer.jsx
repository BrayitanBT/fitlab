import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';


function CardContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await fetch('http://localhost:5000/obtener');
        if (!res.ok) throw new Error('Error al obtener productos');
        const data = await res.json();
        setProductos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <div className="App">
      <h1>Catálogo Fitlab</h1>
      {loading && <p>Cargando productos...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="card-container">
        {productos.map((producto) => (
          <ProductCard
            key={producto._id}
            title={producto.Nombre}
            productImage={producto.endpoint}
            price={producto.precio}
            description={producto.descripcion}
            sizes={producto.tallas}
            available={producto.disponible}
          />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;

