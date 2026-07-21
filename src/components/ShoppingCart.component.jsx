import ProductInCart from './ProductInCart.component.jsx';
import TotalCart from './TotalCart.component.jsx';
import '../assets/style/cart.css';

const ShoppingCart = ({ cart, onUpdateQuantity, onRemoveFromCart }) => {
  // Calculer les totaux
  const totalWeight = cart.reduce((total, item) => total + (item.product.weight * item.quantity), 0);
  const totalPrice = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  return (
    <div className="cart">
      <div style={{ textAlign: 'right', fontSize: 'smaller', color: '#999', fontStyle: 'italic' }}>
        poids total {totalWeight} g
      </div>
      <h2>Panier</h2>
      <div className="cart-items">
        {cart.map(item => (
          <ProductInCart 
            key={item.product.id} 
            item={item} 
            onUpdateQuantity={onUpdateQuantity} 
            onRemoveFromCart={onRemoveFromCart} 
          />
        ))}
      </div>
      <TotalCart total={totalPrice} />
    </div>
  );
};

export default ShoppingCart;