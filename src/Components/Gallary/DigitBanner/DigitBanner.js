import React from 'react';
import "./DigitBanner.css"

const DigitBanner = () => {
    return (
        <section className='counters p-5'>
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-4 col-12">
                        <p className='display-4'>6500+</p>
                        <p className='text-muted display-4'>Customers</p>
                    </div>
                    <div className="col-md-4 col-12">
                        <p className='display-5'>350+</p>
                        <p className='text-muted display-4'>Clients</p>
                    </div>
                    <div className="col-md-4 col-12">
                        <p className='display-4'>100+</p>
                        <p className='display-4 text-muted'>Suppliers</p>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default DigitBanner;