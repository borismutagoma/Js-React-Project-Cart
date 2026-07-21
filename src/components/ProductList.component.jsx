import { useState } from 'react';
import ProductFilter from './ProductFilter.component.jsx';
import ForSaleProduct from './ForSaleProduct.component.jsx';
import '../assets/style/productList.css';

const ProductList = ({ products, onAddToCart }) => {
  const [filterText, setFilterText] = useState('');

  // Filtrer les produits selon le texte saisi
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="productList">
      <ProductFilter onFilterTextChange={setFilterText} />
      <div> <h3>Boutique </h3></div>
      <div className="productsZone">
        {filteredProducts.map(product => (
          <ForSaleProduct 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;