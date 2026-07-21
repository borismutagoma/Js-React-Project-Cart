const ProductFilter = ({ onFilterTextChange }) => {
  return (
    <div className="filter">
      <input 
        type="text" 
        placeholder="filtrer les produits" 
        onChange={(e) => onFilterTextChange(e.target.value)} 
      />
    </div>
  );
};

export default ProductFilter;