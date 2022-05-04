import React from 'react';
import Usercomments from '../../UserComments/UserComments.js';
import Address from '../Address/Address.js';
import Banner from '../Banner/Banner';
import Products from '../Products/Products.js';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Products></Products>
            <Address></Address>
            <Usercomments></Usercomments>
        </>
    );
};

export default Home;