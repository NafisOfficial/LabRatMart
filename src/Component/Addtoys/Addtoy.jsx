import React from 'react';


const hanleAddatoys = (event) =>{
    event.preventDefault();
    const form = event.target;

    const productName = form.productName.value;
    const photoUrl = form.photoUrl.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const category = form.catagory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const productDetails={productName,photoUrl,sellerName,sellerEmail,category,price,rating,quantity,description};

    fetch('http://localhost:5000/user-submit-toy-details',{
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(productDetails)
    })

}





const Addtoy = () => {
    return (
        <div className='flex flex-col justify-center items-center m-16'>

            <form className='p-12 border-2 border-[#B9CF6A] rounded-xl' onSubmit={hanleAddatoys}>
                <h1 className='text-2xl font-semibold mb-12 text-center'>Add your product details</h1>
                <div className="form-control gap-4">
                    <label className="input-group input-group-sm">
                        <span>Product Name</span>
                        <input type="text" placeholder="Input product name" name='productName' className="input input-bordered " required/>
                    </label>
                    <label className="input-group input-group-sm">
                        <span>Photo URL</span>
                        <input type="text" placeholder="Photo url" name='photoUrl' className="input input-bordered " required/>
                    </label>
                    <label className="input-group input-group-sm">
                        <span>Seller name</span>
                        <input type="text" placeholder="Seller name" name='sellerName' className="input input-bordered " required/>
                    </label>
                    <label className="input-group input-group-sm">
                        <span>Seller email</span>
                        <input type="text" placeholder="Seller email" name='sellerEmail' className="input input-bordered " required/>
                    </label>
                    <label className="input-group input-group-sm">
                        <span>Sub category</span>
                        <input type="text" placeholder="Sub catagory" name='catagory' className="input input-bordered " required/>
                    </label>
                    <div className='flex gap-3'>
                        <label className="input-group text-sm">
                            <span>Price</span>
                            <input type="text" placeholder="Add price" name='price' className="input input-bordered " required/>
                        </label>
                        <label className="input-group text-sm">
                            <span>Rating</span>
                            <input type="text" placeholder="Give rating" name='rating' className="input input-bordered " required/>
                        </label>
                        <label className="input-group text-sm">
                            <span>Available quantity</span>
                            <input type="text" placeholder="How much items you have?" name='quantity' className="input input-bordered " required/>
                        </label>
                    </div>
                    <label className="input-group  input-group-sm w-full">
                        <span>Product description</span>
                        <textarea className=" active:border-[#E5E6E6] border-2 rounded-lg" name='description' rows="5" cols='80' placeholder="Write some description about your product"></textarea>
                    </label>
                </div>
                <div className='mx-96'>
                    <button type="submit" className='px-8 py-4 bg-[#a4bd49] rounded text-center ms-16 mt-6 text-white'>Submit</button>
                </div>
            </form>

        </div>
    );
};

export default Addtoy;