
import Product from './Product.jsx';
import AddToCart from './AddToCart.component.jsx';

const ForSaleProduct = ({ product, onAddToCart }) => {
  return (
    <div className="product">
      <Product product={product} />
      <AddToCart product={product} onAddToCart={onAddToCart} />
    </div>
  );
};

export default ForSaleProduct;