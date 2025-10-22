import { useEffect, useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import CardProducts from './CardProducts';

const ProductList = ({ category = null }) => 
    {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


    useEffect(() => {
    let url = 'https://fakestoreapi.com/products';
    if (category){
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [category]);


    const handleAgregarAlCarrito = (product) => {
    alert(`Producto ${product.title.slice(0,10)} agregado al carrito`);
  };



  if (loading) {
    return <Spinner animation="border" variant="warning"/>;
  }  

  
  return (
    <Row>
      {products.map((product) => (
        <Col md={4} key={product.id} className="mb-4">
          <CardProducts product={product} agregarAlCarrito={handleAgregarAlCarrito} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;