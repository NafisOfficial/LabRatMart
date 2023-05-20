import React, { useContext } from 'react';
import logo from '../../../assets/logo/logo-1.png'
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { authContext } from '../../AuthProvider/AuthProvider';
import profile from '../../../assets/logo/profile.webp'
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';


const Navbar = () => {

    const MySwal = withReactContent(Swal)

    const {user,logOut} = useContext(authContext);

    

    const handleLogOut =() =>{
        logOut()
        .then(()=>{
            MySwal.fire(
                {
                    position: 'top-center',
                    icon: 'success',
                    title: 'Logout successful',
                    showConfirmButton: false,
                    timer: 1300
                  }
            )
        })
        .catch((error)=>console.error(error.message))
    }

    return (
        <div className='sticky top-0'>
            <div className="navbar bg-[#b9cf6a]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/all-toys">All Toys</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            {user?<><li><Link to="/my-toys">My toys</Link></li>
                            <li><Link to='/add-a-toy'>Add toys</Link></li></>:<></>}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">

                    <a className="normal-case text-xl font-semibold ">LabRatMart</a>
                    <img src={logo} alt="logo" className='h-12 w-20' />
                </div>
                <div className="navbar-end">
                    <div className="avatar">
                        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?`${user.photoURL}`:profile} title={user?.displayName} />
                        </div>
                    </div>
                    {user?<button onClick={handleLogOut} className="btn btn-sm ms-2">logout</button>:<Link to='/login'><button className="btn btn-sm ms-2">login</button></Link>}
                </div>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Navbar;