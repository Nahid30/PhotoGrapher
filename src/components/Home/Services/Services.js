import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('cardData.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    return (
        <div className='container'>
            <h2 className='text-primary text-center my-5'>My Services</h2>
            <div className='d-flex justify-content-center align-items-center mb-5'>
                {
                    carts.map(cart => <Service
                        key={cart.id}
                        cart={cart}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;