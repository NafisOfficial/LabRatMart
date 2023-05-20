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
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
