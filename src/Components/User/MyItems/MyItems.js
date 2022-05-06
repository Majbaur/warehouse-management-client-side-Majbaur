import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItems = () => {
    const [ currentUser, error, loading ] = useAuthState(auth);

    console.log(currentUser);

    let message;
    let success;

    if (loading) {
        message = <p>Loading</p>
    }
/* 
    if (user) {
        success = <p>current user {user.email}</p>
    } */


    return (
        <div className='mar-20' data-aos="fade-up">
            <div>
                {message}
                {success}
            </div>
        </div>
    );
};

export default MyItems;