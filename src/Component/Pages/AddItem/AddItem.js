import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../api/axiosPrivate';
import auth from '../../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const [addItems, setAddItems] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        
        const getAddItems = async() =>{
            const email = user?.email;
            const url = `http://localhost:5000/addItems?email=${email}`;
            try{
                const {data} = await axiosPrivate.get(url);
                setAddItems(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getAddItems();

    }, [user])
    return (
        <div className='w-50 mx-auto'>
            <h2>Your orders: {addItems.length}</h2>
            {
                addItems.map(addItems =><div key={addItems._id}>
                    <p>{addItems.email} : {addItems.product}</p>
                </div>)
            }
        </div>
    );
};

export default AddItem;