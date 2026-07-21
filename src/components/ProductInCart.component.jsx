import binImage from '../assets/images/poubelle.jpg';
const ProductInCart = ({ item, onUpdateQuantity, onRemoveFromCart }) => {
  const handleQuantityChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value < 1) value = 1;
    if (value > item.product.stock) value = item.product.stock; // Empêcher de dépasser le stock max
    onUpdateQuantity(item.product.id, value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', border: 'solid 1px #a44', marginBottom: '5px', padding: '2px', backgroundColor: '#eaeaea' }}>
      <div style={{ flexGrow: 1, paddingLeft: '5px' }}>{item.product.name}</div>
      
      <div className="imageProduit" style={{ margin: '0 5px' }}>
        <img src={item.product.image} alt={item.product.name} />
      </div>
      
      <input 
        type="number" 
        min="1" 
        max={item.product.stock} 
        value={item.quantity} 
        onChange={handleQuantityChange} 
      />
      
      <img 
        className="button" 
        src={binImage} 
        alt="Supprimer" 
        onClick={() => onRemoveFromCart(item.product.id)} 
      />
    </div>
  );
};

export default ProductInCart;