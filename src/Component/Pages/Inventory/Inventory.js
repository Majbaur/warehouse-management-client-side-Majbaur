import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useProductDetail from '../../../hooks/useProductDetail.js';
import './Inventory.css'
import { useForm } from 'react-hook-form';

const Inventory = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const {productId} = useParams();
    const [product] = useProductDetail(productId);
    const photo=product.img
    console.log(photo)
    const Quantity=product.quantity
    const decrement=(Quantity)=>{
       console.log(product.quantity=product.quantity-1)
        
    }
    
    return (
        <div className=' mx-auto inventory'>
            <img className='w-100' src={product.img} alt="" />
            <h2 className='p-2'>Name: {product.name}</h2>
            <h2 className='p-2'>Id: {product._id}</h2>
            <p>Price: {product.price}</p>
            <p>Quantity: {Quantity}</p>
            <p>Supplier Name: {product.supplierName}</p>
            <p><small>{product.description}</small></p>
            <button onClick={() => decrement(Quantity)} className="decrementButton">Update</button>
            {/* <button onClick={() => increment(product._id)} className="incrementButton">Update</button> */}
        </div>
        );
    };

export default Inventory;
