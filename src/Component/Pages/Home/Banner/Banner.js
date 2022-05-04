import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

import banner1 from '../../../../images/banner-1.jpg';
import banner2 from '../../../../images/banner-2.jpg';
import banner3 from '../../../../images/banner-3.jpg';
import banner4 from '../../../../images/banner-4.jpg';



const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-25 "
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className="text-light">
                    <h3>Be Fit And Fine</h3>
                    <p>Fitness is the key to success, be fit and be fine.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-25 "
                    src={banner2}
                    alt="First slide"
                />
                <Carousel.Caption className="text-dark">
                    <h3>Be Fit And Fine</h3>
                    <p>Fitness is the key to success, be fit and be fine.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-25 "
                    src={banner3}
                    alt="First slide"
                />
                <Carousel.Caption className="text-light">
                    <h3>Be Fit And Fine</h3>
                    <p>Fitness is the key to success, be fit and be fine.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-25 "
                    src={banner4}
                    alt="Second slide"
                />

                <Carousel.Caption className="text-dark">
                    <h3>Hard-working!</h3>
                    <p>Hard work makes a man perfect, works harder for a better end.</p>
                </Carousel.Caption>
            </Carousel.Item>
           
        </Carousel>
    );
};

export default Banner;