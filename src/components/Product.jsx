import '../assets/style/product.css';

const Product = ({ product }) => {
  return (
    <>
      <div className="info">
        <div className="name">{product.name}</div>
        <div className="description">{product.description}</div>
        <div className="weight">{product.weight}</div>
      </div>
      <div className="imageProduit">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="stock">
        qté<br />{product.stock}
      </div>
      <div className="price">{`${product.price}€`}</div>
    </>
  );
};

export default Product;