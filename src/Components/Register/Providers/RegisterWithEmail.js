import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegisterWithEmail = (props) => {
    const { emailRegister } = props;
    return (
        <div>
            <section className='text-center register-form'>

                <h2>Please register here first!</h2>


                <Form onSubmit={emailRegister}>

                    <Form.Group className="mb-3 " controlId="formBasicName">
                        <Form.Control className='w-50 mx-auto' type="text" name='name' placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Control className='w-50 mx-auto' type="email" name='email' placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPasswor">
                        <Form.Control type="password" className='w-50 mx-auto' name='password' placeholder="Enter your Password" />
                    </Form.Group>
                    <Button className='w-25 my-3' type="submit">
                        Register
                    </Button>
                </Form>

                <p>Already Register in <span>Fruity</span>? <Link className='text-decoration-none text-success' to='/login' >Log in Here!</Link></p>
            </section>
        </div>
    );
};

export default RegisterWithEmail;