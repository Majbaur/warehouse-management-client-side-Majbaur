import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useProductDetail from '../../../hooks/useProductDetail.js';
import './Inventory.css'

const Inventory = () => {
    const [user] = useAuthState(auth);
    const {productId} = useParams();
    const [product] = useProductDetail(productId);
    
    
    
        return (
            <div className=' mx-auto inventory'>
            <img className='w-100' src={product.img} alt="" />
            <h2 className='p-2'>Name: {product.name}</h2>
            <h2 className='p-2'>Id: {product._id}</h2>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Supplier Name: {product.supplierName}</p>
            <p><small>{product.description}</small></p>
            {/* <button onClick={() => decrement(product._id)} className="updateButton">Update</button> */}
        </div>
        );
    };

export default Inventory;
