import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Divider from '../Common/Divider';
import RegisterWithEmail from './Providers/RegisterWithEmail';
import RegisterWithGithub from './Providers/RegisterWithGithub';
import RegisterWithGoogle from './Providers/RegisterWithGoogle';
import  './Register.css';

const Register = () => 
{

    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, GoogleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const handleEmailPasswordRegister = (event) =>
    {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email , password)
        
    }

    const handleGoogleRegister = () =>
    {
        signInWithGoogle();
    }

    return (
        <div>
           <div className="container">
               <div className="row">
                   <div className="col-md-8 col-12 shadow-lg p-5 mx-auto">
                       <RegisterWithEmail emailRegister = {handleEmailPasswordRegister}></RegisterWithEmail>
                       <Divider></Divider>
                       <div className='text-center social-btn'>
                           <RegisterWithGithub></RegisterWithGithub>
                           <RegisterWithGoogle googleSignup = {handleGoogleRegister}></RegisterWithGoogle>
                       </div>
                   </div>
               </div>
           </div> 
        </div>
    );
};

export default Register;