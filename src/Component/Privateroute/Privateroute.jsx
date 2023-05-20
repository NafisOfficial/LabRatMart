import React, { Children, useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import { FadeLoader } from 'react-spinners';

const Privateroute = ({children}) => {

    const location = useLocation();

    const [clr,setClr] = useState("#EFF7E2")

    const {loading,user} = useContext(authContext);

    if(loading){
        return <>
            <FadeLoader color={clr}></FadeLoader>
        </>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default Privateroute;