import React from 'react';
import Banner from '../Banner/Banner';
import Gallary from '../Gallary/Gallary';
import CustomerReview from '../../CustomerReview/CustomerReview';
import FlashSell from '../../FlashSell/FlashSell';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallary></Gallary>
            <FlashSell></FlashSell>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;