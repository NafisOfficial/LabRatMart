import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const CustomerReview = () => {




    return (
        <div>
            <h1 className='text-center bolded text-[#B9CF6A] text-6xl mt-12'>Customer review</h1>
            <div className='sm:mx-20 sm:my-32 flex flex-col gap-12 my-16'>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                    <div className="card w-80 sm:w-96 bg-[#B9CF6A] text-primary-content ms-4">
                        <div className="card-body">
                            <div className="avatar">
                                <div className="w-12 rounded-xl">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-anchor-placement="top-center">
                    <div className="card w-80 sm:w-96 bg-[#B9CF6A] text-primary-content ms-auto me-4">
                        <div className="card-body">
                            <div className="avatar">
                                <div className="w-12 rounded-xl">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                    <div className="card w-80 sm:w-96 bg-[#B9CF6A] text-primary-content ms-4">
                        <div className="card-body">
                            <div className="avatar">
                                <div className="w-12 rounded-xl">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default CustomerReview;