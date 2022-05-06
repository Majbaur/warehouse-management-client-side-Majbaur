import React from 'react';
import Inventories from '../../Products/Inventories/Inventories';
import Banner from '../Banner/Banner';
import ArrivalProduct from './../../ArrivalProduct/ArrivalProduct';
import UserComments from './../../UserComments/UserComments';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <ArrivalProduct></ArrivalProduct>
            <UserComments></UserComments>
        </div>
    );
};

export default Home;