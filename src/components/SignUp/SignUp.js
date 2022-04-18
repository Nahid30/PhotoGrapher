import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SignUp = () => {
    return (
        <div className='container mt-5 py-4 bg-light'>
            <h2 className='text-danger text-center mt-4'>Please Login</h2>

            <div className='d-flex justify-content-center'>


                <Form className='w-50 '>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Your Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="danger" type="submit">Register</Button>
                </Form>

            </div>
        </div>
    );
};

export default SignUp;