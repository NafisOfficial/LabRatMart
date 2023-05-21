import React from 'react';
import { Link } from 'react-router-dom';

const Mytoycard = (props) => {

    
    const {sellerName,_id,productName,category,price,quantity} = props.data
    const handleDelete=props.delete

    return (
        <tr>
            <th>{sellerName}</th>
            <td>{productName}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><div className=''><Link to={`/update/${_id}`}><button className='bg-[#B9CF6A] px-4 py-2 hover:bg-[#a9c250]'>Update</button></Link>
            <button onClick={()=>handleDelete(_id)} className='bg-[#B9CF6A] px-4 py-2 hover:bg-[#a9c250] mx-4'>Delete</button>
                </div></td>
        </tr>
    );
};

export default Mytoycard;