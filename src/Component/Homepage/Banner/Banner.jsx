import React from 'react';
import './banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import item1 from '../../../assets/cover/cover-1-removebg-preview (1).png'
import item2 from '../../../assets/logo/rocket-png-40810 (1).png'
import { CgArrowLongRight } from 'react-icons/cg';


AOS.init();

const Banner = () => {
    return (
        <div className='banner'>
            <div className='flex justify-center gap-4 pt-6 mx-6 sm:mx-0 md:pt-12 md:pb-6'>
                <input type="text" placeholder="Type here" className="input input-bordered  w-full md:max-w-lg" /><button className="btn border-none bg-[#B9CF6A] hover:bg-[#B9CF6A]">Search</button>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 sm:mx-20  py-20'>
                <div className='mx-auto '>
                    <img src={item1} alt="" className='sz-img' />
                </div>

                <div>
                    <div className='mx-6 sm:mx-0'>
                        <div className=''>
                            <h1 className='text-lg md:text-4xl font-semibold'>
                                Try not to become a man of success rather become a man of value.
                            </h1>
                            <div className='mt-4'>
                                <p className='flex items-center gap-2 font-semibold'><CgArrowLongRight className='text-lg'></CgArrowLongRight><span>Albert Einstein</span></p>
                            </div>
                        </div>

                        <img src={item2} data-aos="fade-up-right" alt="" className='ms-52 sm:ms-72 mt-3 sm:mt-10 h-20' />

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;