import React from 'react';

const SubAlltoys = ({data}) => {

    console.log(data);
    const {sellerName,productName,category,price,quantity} = data

    return (
        <tr>
            <th>{sellerName}</th>
            <td>{productName}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button className='bg-[#B9CF6A] px-4 py-2 hover:bg-[#a9c250]'>View details</button></td>
        </tr>
    );
};

export default SubAlltoys;