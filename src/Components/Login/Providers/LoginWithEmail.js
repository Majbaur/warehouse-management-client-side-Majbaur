import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginWithEmail = (props) => 
{
    const { emailLogin } = props
    return (
        <div>
            <section className='text-center'>

                <h2>Please Log in here first!</h2>

                <h3>Enter your email and password here</h3>

                <Form onSubmit={emailLogin} className="mt-5 mb-5 login-form">
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Control className='w-50 mx-auto' type="email" name='email' placeholder="Enter your email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPasswor">
                        <Form.Control type="password" className='w-50 mx-auto' name='password'  placeholder="Enter your Password" required/>
                    </Form.Group>
                    <Button className='w-25 mt-3 mb-3' type="submit">
                        Log in
                    </Button>
                </Form>

                <p>New in <span>Fruity</span>? <Link className='text-decoration-none text-danger' to='/register'>Register Now!</Link></p>
            </section>

        </div>
    );
};

export default LoginWithEmail;