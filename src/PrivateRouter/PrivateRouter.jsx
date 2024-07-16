import { useContext } from "react";
import { authProvider } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({children}) => {
    const location = useLocation()
    console.log(location);
    const{user,loader}=useContext(authProvider);  
    if(loader){
        return <p className="text-center text-2xl pt-24"><span className="loading loading-spinner text-error"></span></p>
    } 
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>


};

export default PrivateRouter;