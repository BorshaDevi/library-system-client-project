import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";




const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    
    if(loading){
        return <span className="loading loading-spinner loading-lg flex justify-center items-center ml-20 mx-auto"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;