import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [Products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('Products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    return (
        <div id='Products' className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Our Products</h1>
            <div className="Products-container">
            {
                Products.map(product => <Product
                    key={product.id}
                    product={product}
                >
                </Product>)
            }
            </div>
            </div>
        </div>
    );
};

export default Products;