import React from 'react';
import './About.css';
import myself from '../../images/Myself.jpg'

const About = () => {
    return (
        <div className='about'>
            <h2 className='text-center text-danger my-3'>About Me</h2>

            <div className='d-flex justify-content-center '>
                <img className='img-fluid rounded my-5' src={myself} alt="" />
            </div>

            <p className='container bg-light'>Hello, I am <span className='text-primary'><a href="https://www.linkedin.com/in/md-nahid-hossain-a8522218a/" target="blank"> MD Nahid Hossain</a></span>.<br /> Currently I am Learning Web Development from Programming Hero. Web development is not Easy to learn but its possible. From Last Six month I'm working hard to learn it & still learning. I want a prestigious job in this sector, and I will not stop before achieving it. I believe to get something I never had, I have to do something i never did.</p>



        </div>
    );
};

export default About;