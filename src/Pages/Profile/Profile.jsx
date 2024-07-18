import { useContext, useState } from "react";
import { authProvider } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user,emailVerified } = useContext(authProvider);
  const [success,setSuccess]=useState("");
  const [error,setError]=useState("");
  const [button,setButton]=useState(true)
  console.log(user)
  const handleVerifiedEmail= ()=>{
    setSuccess("")
    setError("")
    setButton(false);
    emailVerified()
    .then(()=>{
        setSuccess("check your "+ user.email + "inbox")
    })
    .catch((error)=>{
        setError(error.message)
    })
  }
  console.log(user)
  return (
    <div className="pt-24 ">
      <div className="max-w-[600px] mx-auto bg-base-200 py-4 rounded-xl">
        <div className="w-24 mx-auto rounded-full ">
          <img className="rounded-full" src={user.photoURL} alt="" />
        </div>
        <h2 className="text-center text-2xl">{user.displayName}</h2>
        
          <div className="ml-6 mt-6">
            <div className="flex items-center gap-2 my-4">
            <p className="font-bold">Email : </p>
            <p className="bg-white p-2 rounded-xl">{user.email}</p>
            </div>
            <div className="flex items-center gap-2 my-4">
            <p className="font-bold">Email Status : </p>
            {
                user.emailVerified?<p>Verified</p>
                :button && <button onClick={handleVerifiedEmail} className="btn btn-primary">Verified Email</button>
            }
            {
                success?<p className="text-green-600">{success}</p>
                :<p className="text-green-600">{error}</p>
            }
            </div>
            <div className="flex items-center gap-2 my-4">
            <p className="font-bold">Password : </p>
            <Link to={"/resetpassword"} className="btn btn-primary">Reset Password</Link>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Profile;
