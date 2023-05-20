import React, { useContext } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from 'firebase/auth';
import { authContext } from '../AuthProvider/AuthProvider';

const Login = () => {

    const {signInByEmailAndPass, singInByGoogle } = useContext(authContext);

    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/'


    const handleLoginButton = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInByEmailAndPass(email, password)
            .then(() => {
                navigate(from,{replace:true})
            })
            .catch((error) => {
                console.error(error.message);
            })


    }

    const handleGoogleButton = (event) => {
        event.preventDefault();

        const provider = new GoogleAuthProvider()

        singInByGoogle(provider)
        .then(()=>{
            navigate(from,{replace:true});
        })
        .catch((error)=>{
            console.error(error.message);
        })

    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-[#788d2b]">Please Login !</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <Form onSubmit={handleLoginButton}>
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
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#9cb445] hover:bg-[#788d2b]">Login</button>
                                </div>
                            </Form>
                            <div><button onClick={handleGoogleButton} className="btn w-full btn-outline text-[#788d2b] hover:bg-slate-100 hover:text-[#788d2b] hover:border-[#788d2b]"><FcGoogle className='text-3xl mr-3 '></FcGoogle> Continue with google</button></div>
                            <label className="label">
                                <p>You don't have an account ?<a href="/register" className="label-text-alt link link-hover text-base ms-2 text-[#788d2b] ">Register</a></p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;