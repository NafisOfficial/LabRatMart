import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { authContext } from '../AuthProvider/AuthProvider';
import { Form, useLocation, useNavigate } from 'react-router-dom';

const Register = () => {

    const MySwal = withReactContent(Swal)

    const navigate = useNavigate()
    const location = useLocation()

    const [error,setError] = useState("");

    const from = location?.state?.from?.pathname || '/login'

    const { createUserByEmailPassword } = useContext(authContext);

    const handleRegisterForm = (event) => {

        event.preventDefault();
        const name = event.target.name.value;
        const url = event.target.image.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, url, email, password)


        createUserByEmailPassword(email, password)
            .then((result) => {
                updateProfile(result.user, { displayName: name, photoURL: url })
                    .then(() => {
                        MySwal.fire(
                            {
                                position: 'top-center',
                                icon: 'success',
                                title: 'User have been created successfully',
                                showConfirmButton: false,
                                timer: 1300
                              }
                        )
                        event.target.reset();
                        navigate(from, { replace: true })
                    })
                    .catch(() => {

                    })

            })
            .catch((error) => {
                setError(error.message);
                console.error(error.message);
            })

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
                        {error?<h1 className='text-red-600'>{error}</h1>:<></>}
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