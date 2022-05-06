import React, { useEffect, useState } from 'react';
import './UserComments.css';
import UserComment from './../UserComment/UserComment';
import './UserComments.css'

const UserComments = () => {

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
                Usercomments.map(usercomment => <UserComment
                    key={usercomment._id}
                    usercomment={usercomment}
                >
                </UserComment>)
            }
            </div>
            </div>
        </div>
    );
};

export default UserComments;