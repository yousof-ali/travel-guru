import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";
import Destination from "../Pages/Destination/Destination";
import Details from "../Pages/Details/Details";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/destination',
                element:<Destination></Destination>,
                loader:()=>fetch('/public/data.json')
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:()=>fetch('/public/data.json')

            }
        ]
    }
])

export default router;