import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Home';
import Login from './Login';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/home",
            element:<Home/>
        },
        {
            path:"/login",
            element:<Login/>
        }
    ])
  return (
    <div>
        <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default Body