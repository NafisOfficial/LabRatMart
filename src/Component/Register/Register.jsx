import React from 'react';
import { Form } from 'react-router-dom';

const Register = () => {

    const handleRegisterForm = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const url = event.target.image.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name,url,email,password)


    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Please Register</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <Form onSubmit={handleRegisterForm}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="User name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type='text' name='image' placeholder="Provite your image link" className="input input-bordered" required />
                                </div>
                                
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </Form>
                            <label className="label">
                                <p>You already have an account ?<a href="/login" className="label-text-alt link link-hover text-base ms-2 text-[#4406CB] ">Login</a></p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;