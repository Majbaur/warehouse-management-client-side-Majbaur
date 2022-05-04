import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from './Item'
import './ArrivalProduct.css'

import first from '../../../../images/Efficientdynamics Electric.jpg'
import second from '../../../../images/EVs.jpg'
import third from '../../../../images/The VERGE.jpg'
import fourth from '../../../../images/Motorrad.jpg'
import fifth from '../../../../images/I3 Electric Car.jpg'
import sixth from '../../../../images/Hot Wheels.jpg'


const breakPoints = [
    { width: 1200, itemsToShow: 1 },
    { width: 1750, itemsToShow: 2 },
    { width: 1846, itemsToShow: 3 },
    { width: 2614, itemsToShow: 4 },

    
];
function ArrivalProduct() {
  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop:"50px" }}>New Arrival Products</h1>
      <div className="ArrivalProduct">
        <Carousel className='container' breakPoints={breakPoints}>
          <Item><img src={first} alt="" /></Item>
          <Item><img src={second} alt="" /></Item>
          <Item><img src={third} alt="" /></Item>
          <Item><img src={fourth} alt="" /></Item>
          <Item><img src={fifth} alt="" /></Item>
          <Item><img src={sixth} alt="" /></Item>          
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ArrivalProduct />, rootElement);

export default ArrivalProduct