
import React from 'react';
import { Carousel } from 'react-bootstrap';
import CardGroup1 from './QuotesCards/CardGroup1';
import CardGroup2 from './QuotesCards/CardGroup2';
import "./Quotes.css"

const Quotes = () => {
    return (
        <div className='mar-20 '>
            <div className="text-center py-4 my-5">
                <p>Our Client's</p>
                <h3>Quotes</h3>
            </div>
            
            <div className='qoute-cards'>

                <Carousel>
                    <Carousel.Item className='p-5'>
                        <CardGroup1></CardGroup1>
                    </Carousel.Item>
                    <Carousel.Item className='p-5'>
                        <CardGroup2></CardGroup2>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    );
};

export default Quotes;