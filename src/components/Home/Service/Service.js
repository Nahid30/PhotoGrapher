import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = (props) => {
    const { id, name, img, text, price } = props.cart;
    return (
        <div>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" height={200} src={img} />
                    <Card.Body className='text-center'>
                        <Card.Title className='text-danger'>{name}</Card.Title>
                        <h6>Price: ${price}</h6>
                        <Card.Text>{text}</Card.Text>
                        <Button variant="danger">Book Now</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Service;