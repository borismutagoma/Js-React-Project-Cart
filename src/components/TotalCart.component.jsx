const TotalCart = ({ total }) => {
  return (
    <div className="total">
      <div>total commande :</div>
      <div style={{ fontWeight: 'bold', fontSize: 'x-large', marginLeft: '10px' }}>
        {total} €
      </div>
    </div>
  );
};

export default TotalCart;