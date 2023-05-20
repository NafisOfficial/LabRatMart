import React from 'react';

const Addtoy = () => {
    return (
        <div className='flex flex-col justify-center items-center m-16'>

            <form className='p-12 border-2 border-[#B9CF6A] rounded-xl'>
                <h1 className='text-2xl font-semibold mb-12 text-center'>Add your product details</h1>
                <div className="form-control gap-4">
                    <label className="input-group input-group-sm">
                        <span>Product Name</span>
                        <input type="text" placeholder="Input product name" className="input input-bordered " />
                    </label>
                    <label className="input-group input-group-sm">
                        <span>Photo URL</span>
                        <input type="text" placeholder="Photo url" className="input input-bordered " />
                    </label>
                    <label className="input-group input-group-sm">
                        <span>Seller name</span>
                        <input type="text" placeholder="Seller name" className="input input-bordered " />
                    </label>
                    <label className="input-group input-group-sm">
                        <span>Seller email</span>
                        <input type="text" placeholder="Seller email" className="input input-bordered " />
                    </label>
                    <label className="input-group input-group-sm">
                        <span>Sub category</span>
                        <input type="text" placeholder="Sub catagory" className="input input-bordered " />
                    </label>
                    <div className='flex gap-3'>
                        <label className="input-group text-sm">
                            <span>Price</span>
                            <input type="number" placeholder="Add price" className="input input-bordered " />
                        </label>
                        <label className="input-group text-sm">
                            <span>Rating</span>
                            <input type="number" placeholder="Give rating" className="input input-bordered " />
                        </label>
                        <label className="input-group text-sm">
                            <span>Available quantity</span>
                            <input type="number" placeholder="How much items you have?" className="input input-bordered " />
                        </label>
                    </div>
                    <label className="input-group  input-group-sm w-full">
                        <span>Details description</span>
                        <textarea className=" active:border-[#E5E6E6] border-2 rounded-lg" rows="5" cols='80' placeholder="Write some description about your product"></textarea>
                    </label>
                </div>
                <div className='mx-96'>
                    <button type="submit" className='px-8 py-4 bg-[#B9CF6A] rounded text-center ms-16 mt-6'>Submit</button>
                </div>
            </form>

        </div>
    );
};

export default Addtoy;