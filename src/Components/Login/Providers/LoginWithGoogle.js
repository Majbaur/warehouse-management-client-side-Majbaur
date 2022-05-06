import React from 'react';

const LoginWithGoogle = (props) => 
{
    const { googleLogin } = props;
    return (
        <div>
           <button className="w-50 mx-auto p-2 mb-3 rounded" onClick={googleLogin}>Log in with Google</button> 
        </div>
    );
};

export default LoginWithGoogle;