import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from '../components/ContactForm/ContactForm.js';
import ProductCard from '../components/ProductCard.js';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/products?_limit=10')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Container className="home">
      <h1>Добро пожаловать в DNR</h1>
      <p>
        Лучшая техника для вас! Любые способы оплаты! Документы на технику и гарантийный срок имеется. Остались вопросы?
        Напиши нам!
      </p>
      <ContactForm />
      <h2>Топ продаж</h2>
      <Row>
        {products.map(product => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
