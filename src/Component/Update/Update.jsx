import React from 'react';
import useTitle from '../Hooks/useTitle';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    useTitle('Update')
    const navigate=useNavigate()
    const data=useLoaderData()
    const {_id,price,quantity,description}=data
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;
        console.log(quantity, price, description);
        const updatedtoy = { quantity, price, description };
        fetch(`http://localhost:5000/user-submit-toy-details/${_id}`, {
            method: 'PATCH',
            headers: {
            'content-type': 'application/json'
        },
            body: JSON.stringify(updatedtoy)
                })
                    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {

            Swal.fire({
                icon: 'success',
                title: 'Item updated',
                text: 'This toy is updated in the database',

            })
            form.reset();
            navigate('/my-toys')
        }
    })
        
    }
return (
    <div className='mx-52 my-3'>
        <form onSubmit={handleUpdate} className='flex flex-col gap-2 items-center'>
            <label htmlFor="price">
                set price
            </label><input className='border-2 border-gray-700' defaultValue={price} type="text" id='price' name='price' />
            <label htmlFor="quantity">
                set quantity
            </label><input className='border-2 border-gray-700' defaultValue={quantity} type="text" id='quantity' />
            <div> <textarea className='border-2 border-gray-700' defaultValue={description} name="description" id="description" cols="30" rows="10"></textarea></div>
           
            <input className='border-2 bg-yellow-100 p-3 border-gray-700' value={'Update'} type="submit" name="" id="" />
        </form>
    </div>
);
};

export default Update;