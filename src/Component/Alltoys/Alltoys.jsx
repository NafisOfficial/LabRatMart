import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SubAlltoys from './SubAlltoys';
import { FcSearch } from "react-icons/fc";
import Swal from 'sweetalert2';
import useTitle from '../Hooks/useTitle';

const Alltoys = () => {
    useTitle('AllToys')

    const [showAll, setShowAll] = useState(false);

    const [Alldata,setAlldatas] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/user-submit-toy-details')
        .then(res=>res.json())
        .then(data=>setAlldatas(data))
    },[])




    

    const handleShowMore = () => {

        setShowAll(true);

    }

    const handleShowless = () =>{
        setShowAll(false)
    }

    const handleSeacth = ()=>{
        Swal.fire({
            title: 'Name of product',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Search',
            showLoaderOnConfirm: true,
            preConfirm: (text) => {
              const searchedData = Alldata.filter(dt=>dt.productName.toLowerCase().includes(text.toLowerCase()))
              setAlldatas(searchedData);
            },
            allowOutsideClick: () => !Swal.isLoading()
          })
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th className='flex items-center'>Action<button onClick={handleSeacth} className='ms-6 text-xl'><FcSearch></FcSearch></button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        

                        {showAll?Alldata.slice(0,20)?.map(data => <SubAlltoys key={data._id} data={data}></SubAlltoys>):Alldata?.map(data => <SubAlltoys key={data._id} data={data}></SubAlltoys>)}


                    </tbody>
                </table>
            </div>
            <div className=''>
                <button className={`bg-[#B9CF6A] hover:bg-[#a9c250] px-4 py-2 my-4 mx-auto ${showAll?'hidden':'block'} `} onClick={handleShowMore}>Show less</button>
                <button className={`bg-[#B9CF6A] hover:bg-[#a9c250] px-4 py-2 my-4 mx-auto ${showAll?'block':'hidden'}`} onClick={handleShowless}>Show More</button>
            </div>
        </div>
    );
};

export default Alltoys;