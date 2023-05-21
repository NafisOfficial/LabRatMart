import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../Hooks/useTitle';
import { authContext } from '../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import SubAlltoys from '../Alltoys/SubAlltoys';
import Mytoycard from './Mytoycard';
import Swal from 'sweetalert2';
const Mytoys = () => {

    useTitle('MyToys')
    const { user } = useContext(authContext)
    const [showAll, setShowAll] = useState(false);
    const [Alldata, setAlldatas] = useState([])

    useEffect(() => {
        fetch('https://toy-server-nafisofficial.vercel.app/user-submit-toy-details')
            .then(res => res.json())
            .then(data => setAlldatas(data))
    }, [])

    const myData = Alldata.filter(toy => toy.sellerEmail == user.email)
    console.log(myData)

    const handleShowMore = () => {

        setShowAll(true);

    }

    const handleShowless = () => {
        setShowAll(false)
    }
    const handleDelete=(_id)=>{
        Swal.fire({
            title: 'Are you sure?',
            
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-server-nafisofficial.vercel.app/user-submit-toy-details/${_id}`, {
                            method: 'DELETE'
                        })
                        .then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount>0)
            {
                const myToys=[...Alldata]
                
                const remainder=myToys.filter(toy=>toy._id!==_id)
                console.log(myToys)
                setAlldatas(remainder)
                
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
        })
              
            }
          })
    }

    return (
        <div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Seller</th>
                        <th>Toy name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Quantity</th>

                    </tr>

                </thead>
                <tbody>
                    {showAll ? Alldata.slice(0, 20)?.map(data => <Mytoycard key={data._id} data={data} delete={handleDelete}></Mytoycard>) : Alldata?.map(data => <Mytoycard key={data._id} data={data} delete={handleDelete}></Mytoycard>)}
                </tbody>
            </table>
            <div className=''>
                <button className={`bg-[#B9CF6A] hover:bg-[#a9c250] px-4 py-2 my-4 mx-auto ${showAll ? 'hidden' : 'block'} `} onClick={handleShowMore}>Show less</button>
                <button className={`bg-[#B9CF6A] hover:bg-[#a9c250] px-4 py-2 my-4 mx-auto ${showAll ? 'block' : 'hidden'}`} onClick={handleShowless}>Show More</button>
            </div>
        </div>
    );
};

export default Mytoys;