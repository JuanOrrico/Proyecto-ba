
import ProductList from './ProductList';

const Mostrador = () => {
  return (
    <div className="container mb-10">
      <h3>Ropa Masculina</h3>
      <ProductList category="men's clothing" />
      <h3>Joyeria</h3>
      <ProductList category="jewelery" />
      <h3>Electrónica</h3>
      <ProductList category="electronics" />
    </div>
  );
};

export default Mostrador;