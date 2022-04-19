import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div className='container  '>
                <h3 className='text-center text-danger my-5'>My Video Shoot For Wedding</h3>
                <div className='d-flex justify-content-center my-5'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CwLWV3k9h2Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

        </div>
    );
};

export default Home;