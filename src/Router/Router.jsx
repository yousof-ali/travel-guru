import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";
import Destination from "../Pages/Destination/Destination";
import Details from "../Pages/Details/Details";
import Bookmarks from "../Pages/Bookmarks/Bookmarks";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Profile from "../Pages/Profile/Profile";
import ResetPasswoed from "../Pages/ResetPassword/ResetPasswoed";


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
                loader:()=>fetch('/data.json')
            },
            {
                path:'/details/:id',
                element:<PrivateRouter><Details></Details></PrivateRouter>,
                loader:()=>fetch('/data.json')

            },
            {
                path:'/bookmarks',
                element:<PrivateRouter><Bookmarks></Bookmarks></PrivateRouter>,
                loader:()=>fetch('/data.json')
            },
            {
                path:'/profile',
                element:<PrivateRouter><Profile></Profile></PrivateRouter>
            },
            {
                path:"/resetpassword",
                element:<PrivateRouter><ResetPasswoed></ResetPasswoed></PrivateRouter>
            }
            
        ]
    }
])

export default router;