import React from 'react';
import error from '../../../src/assets/error/21586054_Na_Nov_26.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-full h-full'>
            <div className='text-center relative top-20'>
                <Link to='/'><button className='px-6 py-3 bg-[#B9CF6A] rounded'>Back to Home</button></Link>
            </div>
            <img src={error} alt="" className='static' />
        </div>
    );
};

export default Error;