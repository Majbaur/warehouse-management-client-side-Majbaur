import React from 'react';
import "./Common.css"

const Divider = () => {
    return (
        <article className='d-flex align-items-center justify-content-evenly divider'>
            <div className="horizental-line"></div>
            <p>OR</p>
            <div className="horizental-line"></div>
        </article>
    );
};

export default Divider;