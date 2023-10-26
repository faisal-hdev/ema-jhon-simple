import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product
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
            <button onClick={() =>props.handleAddToCart(props.product)} className='btn-card'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;