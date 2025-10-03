import React, { useEffect, useState } from 'react';
import ProductCard from './card';


function CardContainer() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await fetch('http://localhost:5000/obtener');
        if (!res.ok) throw new Error('Error al obtener productos');

        const data = await res.json();
        
        console.log(data)

        setProductos(data)
        
      } 
      catch (error) {
        console.error('Error: ' + error)
      }
    };

    obtenerDatos();
  }, []);

  return (
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
  );
}

export default CardContainer;

