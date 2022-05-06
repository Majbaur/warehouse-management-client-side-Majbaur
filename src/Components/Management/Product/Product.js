import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import ProducttTable from './ProducttTable';
import GetProducts from './../../../Hooks/GetProducts';

const Product = (props) =>{
    
    const {item} = props;
    const [fruits , setFruits] = GetProducts()

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = fruits.filter(fruit => fruit._id !== id);
                setFruits(remaining);
            })
        }
    }
    return (
        <article>
            <div className="col">
                <div className="card h-100 border-0 p-2 shadow-lg rounded">
                    <div className="card-body text-center mx-auto mt-5">
                        <ProducttTable  item = {item}></ProducttTable>
                        <button className='inv-btn rounded mt-5'>Update Stock</button>

                        <Button variant='danger' className='d-block mt-5 mx-auto' onClick={() => handleDelete(item._id)}>Delete Item</Button>


                    </div>
                </div>
            </div>
        </article>
    );
};

export default Product;