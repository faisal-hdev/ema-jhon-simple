import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {handleAddToCart, product} = props;
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <div className='card-information'>
            <p className='card-title'>{name}</p>
                <p className='card-price'>Price : ${price}</p>
            <div className='others-information'>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings}</small></p>
            </div>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;