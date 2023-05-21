import React from 'react';
import { Link } from 'react-router-dom';

const SubAlltoys = ({data}) => {

    
    const {sellerName,_id,productName,category,price,quantity} = data

    return (
        <tr>
            <th>{sellerName}</th>
            <td>{productName}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><Link to={`/view-details/${_id}`}><button className='bg-[#B9CF6A] px-4 py-2 hover:bg-[#a9c250]'>View details</button></Link></td>
        </tr>
    );
};

export default SubAlltoys;