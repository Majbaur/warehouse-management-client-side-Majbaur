import React from 'react';
import useProducts from '../../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';
import './ManageProducts.css'
const ManageProducts = () => {
    const [products, setproducts] = useProducts();
    const navigate = useNavigate();

    const AddProduct = id => {
        navigate(`/addproduct`)
    }

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
                const remaining = products.filter(product => product._id !== id);
                setproducts(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your products</h2>
            {
                products.map(product => <div key={product._id}>
                    <h5>{product.name} <button onClick={() => handleDelete(product._id)}>X</button></h5>
                    
                </div>)
            }
            <button onClick={() => AddProduct()} className="AddProduct">Added New Product</button>

        </div>
    );
};

export default ManageProducts;




