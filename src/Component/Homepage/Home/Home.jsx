import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Gallary from '../Gallary/Gallary';
import CustomerReview from '../../CustomerReview/CustomerReview';
import FlashSell from '../../FlashSell/FlashSell';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Catagory from '../Catagory/Catagory';


const Home = () => {


    const [Alldata, setAlldatas] = useState([])

    useEffect(() => {
        fetch('https://toy-server-nafisofficial.vercel.app/user-submit-toy-details')
            .then(res => res.json())
            .then(data => setAlldatas(data))
    }, [])

    console.log();

    return (
        <div>
            <Banner></Banner>
            <Gallary></Gallary>
            <FlashSell></FlashSell>
            <div className='m-6 sm:m-12 mx-auto'>
                <Tabs>
                    <TabList>
                        <Tab>Math Toys</Tab>
                        <Tab >Language Toys</Tab>
                        <Tab>Science Toys</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-1 sm:grid-cols-3 mx-6 sm:mx-12 gap-4'>
                            {Alldata.filter(dt => dt.category == "Math Toys").map(data => <Catagory key={data._id} data={data}></Catagory>)}
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 sm:grid-cols-3 mx-6 sm:mx-12 gap-4'>
                            {Alldata.filter(dt => dt.category == "Language Toys").map(data => <Catagory key={data._id} data={data}></Catagory>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 sm:grid-cols-3 mx-6 sm:mx-12 gap-4'>
                            {Alldata.filter(dt => dt.category == "Science Toys").map(data => <Catagory key={data._id} data={data}></Catagory>)}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            <CustomerReview></CustomerReview>

        </div>
    );
};

export default Home;