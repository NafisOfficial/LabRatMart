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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    errorElement:<Error></Error>,
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
        element:<Privateroute><Mytoys></Mytoys></Privateroute>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
