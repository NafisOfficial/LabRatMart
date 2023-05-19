import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../../shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>

        </div>
    );
};

export default Home;