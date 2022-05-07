import React, { useEffect, useState } from 'react';
import './UserComments.css';
import UserComment from './../UserComment/UserComment';
import './UserComments.css'

const UserComments = () => {

    const [Usercomments, setUsercomments] = useState([]);

    useEffect( ()=>{
        fetch('https://desolate-gorge-07687.herokuapp.com/delear')
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