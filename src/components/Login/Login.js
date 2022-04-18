import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');

    const location = useLocation()
    const from = location.state.from.pathname || '/';


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }


    const handleUserLogin = event =>{
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    if(user){
        navigate(from, {replace: true});
    }


    return (
        <div  className='container mt-5 py-4 bg-light'>
            <h2 className='text-danger text-center mt-4'>Please Login</h2>

            <div className='d-flex justify-content-center'>
                

                <Form onSubmit={handleUserLogin} className='w-50 '>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <p>Don't have account? <Link to='/signup'>Create New Account</Link> </p>


                    <Button variant="danger" type="submit">Login</Button>
                </Form>

            </div>
        </div>
    );
};

export default Login;