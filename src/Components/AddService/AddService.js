import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result)
        })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a Service</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true})} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Supplier' {...register("Supplier", { required: true})} />
                <input className='mb-2' placeholder='sale' type="number" {...register("sale")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input  type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;