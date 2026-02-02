import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.stock ? (
                    <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                        Añadir al Carrito
                    </button>
                ) : (
                    <span className="out-of-stock">Agotado</span>
                )}
            </div>
            <div className="product-info">
                <span className="category-tag">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="price">${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductCard;
