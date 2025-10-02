import '../../assets/css/card.css'
function ProductCard({ productImage, title, sizes, available, description, price }){
  return (
    <div className="card">
        <img src={productImage} alt="Tenis Pumba" className="product-img" /> 

        <div className="product-info">
          <h2 className="product-title">Titulo: {title}</h2>

          <div className="product-meta">
            <span>Talla: {sizes}</span>
            <span>{available}.</span>
          </div>

          <p className="product-description">
            Descripción: {description}
          </p>

          <p className="product-price">Precio: {price}</p>

          <button className="add-button">Agregar</button>
        </div>
    </div>
  );
};

export default ProductCard;