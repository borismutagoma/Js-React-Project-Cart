import cartImage from '../assets/images/panier.jpg';
const AddToCart = ({ product, onAddToCart }) => {
  return (
    <img 
      className="button" 
      src={cartImage}
      alt="Ajouter au panier" 
      onClick={() => onAddToCart(product)} 
    />
  );
};

export default AddToCart;