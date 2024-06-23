import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { useAppContext } from '../context/AppContext.js';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { favorites, addToFavorites, removeFromFavorites, cart, addToCart, removeFromCart } = useAppContext();

  const isInFavorites = favorites.some(favorite => favorite.id === product.id);
  const isInCart = cart.some(item => item.id === product.id);

  const handleAddToFavorites = () => {
    addToFavorites(product);
  };

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(product.id);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  return (
    <Card className="product-card">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.category}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
        <Link to={`/product/${product.id}`} className="btn btn-primary">Описание</Link>
        <ButtonGroup className="btn-group">
          {isInFavorites ? (
            <Button variant="danger" onClick={handleRemoveFromFavorites}>
              <img src='https://i.ibb.co/HtnDpkL/recycle-bin.png' alt="Remove from Favorites" />
            </Button>
          ) : (
            <Button variant="success" onClick={handleAddToFavorites}>
              <img src='https://i.ibb.co/b2mBmbR/heart.png' alt="Add to Favorites" />
            </Button>
          )}
          {isInCart ? (
            <Button variant="danger" onClick={handleRemoveFromCart}>
              <img src='https://i.ibb.co/HtnDpkL/recycle-bin.png' alt="Remove from Cart" />
            </Button>
          ) : (
            <Button variant="primary" onClick={handleAddToCart}>
              <img src='https://i.ibb.co/4JGpy2t/shopping-cart.png' alt="Add to Cart" />
            </Button>
          )}
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
