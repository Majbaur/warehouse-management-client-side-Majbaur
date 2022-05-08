import React, { useEffect, useState } from 'react';
import { axios } from 'axios';
import auth from './../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import UserProduct from './../UserProduct/UserProduct';
import './MyItems.css'
const MyItems = () => {
    const [user]= useAuthState(auth);
    const [addItems,setAddItems]=useState([])
    useEffect(() =>{
        const getAddItems=async () => {
            const email=user.email
            const url = `https://desolate-gorge-07687.herokuapp.com/addedItem?email=${email}`
            fetch(url, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                },
            })
            .then(res=>res.json())
            .then(result =>{
                setAddItems(result)
            })
            // const{data}= await axios.get(url)
            // setAddItems(data)
        }
        getAddItems()
    },[user])
    return (
        <div className='container'>
            <h2>your Add Items: {addItems.length}</h2>
            <div  className="row row-cols-1 row-cols-md-3 g-5">
            {
                addItems.map(addItem => <UserProduct
                    key={addItem._id}
                    addItem={addItem}
                >
                </UserProduct>)
            }
            </div>
        </div>
    );
};

export default MyItems;