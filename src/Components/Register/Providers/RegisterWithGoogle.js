import React from 'react';

const RegisterWithGoogle = (props) => 
{
    const { googleSignup } = props;
    return (
        <div>
            <button className='w-50 mx-auto p-2 mb-3' onClick={googleSignup}>Register with Google</button>
        </div>
    );
};

export default RegisterWithGoogle;