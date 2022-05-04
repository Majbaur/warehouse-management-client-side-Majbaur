import React from 'react';
import Usercomments from '../../UserComments/UserComments.js';
import Banner from '../Banner/Banner';
import ArrivalProduct from '../ArrivalProduct/ArrivalProduct.js';
import Products from '../Products/Products.js';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Products></Products>
            <ArrivalProduct></ArrivalProduct>
            <Usercomments></Usercomments>
        </>
    );
};

export default Home;