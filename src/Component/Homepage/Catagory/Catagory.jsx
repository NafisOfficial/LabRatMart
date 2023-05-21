import React from 'react';
import { Link } from 'react-router-dom';


const Catagory = ({ data }) => {

    console.log(data);

    const { photoUrl,_id, productName, sellerName, sellerEmail, price, rating, quantity } = data;

    return (
        <div>
            <div className='border-2 border-[#B9CF6A] p-6'>
                <img src={photoUrl} alt="" className='w-full h-20 sm:h-40' />
                <div className='mt-4'>
                    <div>
                        <p><span className='font-semibold'>Toy Name:</span> {productName}</p>
                        
                    </div>
                    <div className='flex  justify-between mt-2'>
                        <p><span className='font-semibold'>Price:</span> {price} $</p>
                        <p><span className='font-semibold'>Rating:</span> {rating}</p>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-between items-center'>
                        <p><span className='font-semibold'>Quantity:</span> {quantity}</p>
                        <Link to={`/view-details/${_id}`}><button className='bg-[#B9CF6A] hover:bg-[#a9c250] px-4 py-2 my-4'>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catagory;