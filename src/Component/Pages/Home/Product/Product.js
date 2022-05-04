import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {id, name, img, description, price} = product;
    const navigate = useNavigate();

    
    return (
        <div className='product'>
            <img className='w-100' src={img} alt="" />
            <h2 className='p-4'>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button className="updateButton">Update</button>
        </div>
    );
};

export default Product;