import { useState } from 'react';
import ProductList from './ProductList.component.jsx';
import ShoppingCart from './ShoppingCart.component.jsx';
import productsData from '../data/products.js';
import '../assets/style/app.css';

const App = () => {
  const [cart, setCart] = useState([]);

  
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        
        if (existingItem.quantity < product.stock) {
          return prevCart.map(item =>{
              if (item.product.id === product.id){
                return { ...item, quantity: item.quantity + 1 };
              }
              else{
                return item;
              }
            }    
          );
        }
        return prevCart;
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  
  const handleUpdateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map(item => {
        if (item.product.id === productId){
          return { ...item, quantity: quantity };
        }
        else{
          return item;
        }
      }
      )
    );
  };

  
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.product.id !== productId));
  };

  return (
    <div>
      <ProductList products={productsData} onAddToCart={handleAddToCart} />
      <ShoppingCart 
        cart={cart} 
        onUpdateQuantity={handleUpdateQuantity} 
        onRemoveFromCart={handleRemoveFromCart} 
      />
    </div>
  );
};

export default App;