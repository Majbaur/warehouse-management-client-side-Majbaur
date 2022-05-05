import React, { useEffect, useState } from 'react';
import './UserComments.css';
import Usercomment from './../UserComment/Usercomment';

const Usercomments = () => {

    const [Usercomments, setUsercomments] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/delear')
        .then(res => res.json())
        .then(data => setUsercomments(data));
    }, [])

    return (
        <div className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Our Usercomments</h1>
            <div className="Usercomments-container">
            {
                Usercomments.map(usercomment => <Usercomment
                    key={usercomment._id}
                    usercomment={usercomment}
                >
                </Usercomment>)
            }
            </div>
            </div>
        </div>
    );
};

export default Usercomments;