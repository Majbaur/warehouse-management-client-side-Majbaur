import React from 'react';
import Q1 from '../Q1/Q1';
import Q2 from '../Q2/Q2';
import Q3 from '../Q3/Q3';
import Q4 from '../Q4/Q4';

const Blog = () => {
    return (
        <div className='mar-20' data-aos="fade-up">
            <h2>A Good developer must to know</h2>

            <article>
                <Q1></Q1>
                <Q2></Q2>
                <Q3></Q3>
                <Q4></Q4>
            </article>
        </div>
    );
};

export default Blog;