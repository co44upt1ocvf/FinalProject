import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext.js';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToFavorites, addToCart } = useAppContext();

  useEffect(() => {
    axios.get(`http://localhost:1337/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container className='product-details'>
        <Row className="justify-content-center align-items-center">
          <Col md={10}>
            <Card>
              <Row noGutters>
                <Col md={6} className="d-flex align-items-center justify-content-center">
                  <Card.Img variant="top" src={product.image} alt={product.name} />
                </Col>
                <Col md={6}>
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.category}</Card.Text>
                    <Card.Text>${product.price}</Card.Text>
                    <Card.Text>{product.description}</Card.Text>
                    <Button variant="primary" onClick={() => addToFavorites(product)}>Add to Favorites</Button>{' '}
                    <Button variant="success" onClick={() => addToCart(product)}>Add to Cart</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default ProductDetails;
