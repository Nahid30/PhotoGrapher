import React from 'react';
import { Row } from 'react-bootstrap';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-dark text-muted text-center'>
            <p className='py-5'>Copyrights &copy; {year} | All Rights Reserved by PhotoGrapher.com  </p>
        </div>
    );
};

export default Footer;