import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Home from './Component/Homepage/Home/Home';
import Error from './Component/ErrorPage/Error';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Addtoy from './Component/Addtoys/Addtoy';
import Navbar from './Component/shared/Navbar/Navbar';
import Blog from './Component/Blog/Blog';
import Authprovider from './Component/AuthProvider/AuthProvider';
import Privateroute from './Component/Privateroute/Privateroute';
import Mytoys from './Component/Mytoys/Mytoys';
import Alltoys from './Component/Alltoys/Alltoys';
import ViewDetails from './Component/ViewDetails/ViewDetails';
import Update from './Component/Update/Update';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
   
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element: <Register></Register>
      },
      {
        path:"/add-a-toy",
        element:<Addtoy></Addtoy>
      },
      {
        path:"/blogs",
        element:<Blog></Blog>
      },
      {
        path:"/my-toys",
        element:<Privateroute><Mytoys></Mytoys></Privateroute>,

      },
      {
        path:"/all-toys",
        element:<Alltoys></Alltoys>,
      },
      {
        path:"/view-details/:id", 
        element:<Privateroute><ViewDetails></ViewDetails></Privateroute>,
        loader:({params})=>fetch(`https://toy-server-nafisofficial.vercel.app/user-submit-toy-details/${params.id}`)
      },
      {
        path:"/update/:id", 
        element:<Privateroute><Update/></Privateroute>,
        loader:({params})=>fetch(`https://toy-server-nafisofficial.vercel.app/user-submit-toy-details/${params.id}`)
      },
    ]
  },
  {      
    path:'*',
    element: <Error></Error>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
