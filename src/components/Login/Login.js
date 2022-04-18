import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    return (
        <div  className='container mt-5 py-4 bg-light'>
            <h2 className='text-danger text-center mt-4'>Please Login</h2>

            <div className='d-flex justify-content-center'>
                

                <Form className='w-50 '>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="danger" type="submit">Login</Button>
                </Form>

            </div>
        </div>
    );
};

export default Login;