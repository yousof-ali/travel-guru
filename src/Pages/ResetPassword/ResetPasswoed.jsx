import { useContext, useState } from "react";
import { authProvider } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ResetPasswoed = () => {
    const {user,updateuserPasaword} = useContext(authProvider)
    const [error, setError]=useState("");
    const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    const userPassword = e.target.pass.value
    
    updateuserPasaword(user,userPassword)
    .then(()=>{
        console.log("password updated!");
        navigate('/profile')

    })
    .catch((error)=>{
        setError(error.message)
    })
    
  };
  return (
    <div className="pt-24">
       <div className="text-center max-w-[500px] mx-auto"> 
        <form onSubmit={handleSubmit}>
            <p className="font-bold mb-2">New password</p>
            <input className="border rounded-md p-2" name="pass" placeholder="new password" type="password" required/><br />
            {
                error&&<p className="text-red text-sm">{error}</p>
            }
            <button className="btn btn-primary my-4">change password</button>
        </form>

       </div>
    </div>
  );
};

export default ResetPasswoed;
