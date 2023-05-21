import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';

const ViewDetails = () => {
    useTitle('Details')

    const details = useLoaderData()

    const { photoUrl, productName, sellerName, sellerEmail, price, rating, quantity, description } = details
    console.log(details);

    return (
        <div className='mt-32'>
            <div className="card flex items-center  bg-base-100 shadow-xl">
                <div className='flex flex-col justify-center items-center border-3 border-[#879c3b]'>
                    <figure><img src={photoUrl} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{productName}</h2>

                        <div>
                            <p><span className='font-semibold'>Seller name:</span>{sellerName}</p><p><span className='font-semibold'>Email:</span>{sellerEmail}</p>
                        </div>
                        <p><span className='font-semibold'>Quantity:</span>{quantity}</p>
                        <div>
                            <p><span className='font-semibold'>Price:</span>{price}</p><p><span className='font-semibold'>Rating</span></p>
                        </div>
                        <div className='flex gap-2'>
                            <span className='font-semibold'>Description:</span><p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;