import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { useContext, useState } from "react";
import { authProvider } from "../../AuthProvider/AuthProvider";


const Register = () => {
    const {user,createUser}=useContext(authProvider);
    const [error,setError]=useState("");
    const handleRegister = e =>{
        e.preventDefault();
        setError("");
        const userName = e.target.name.value;
        const userImgUrl = e.target.photo.value;
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;
        createUser(userEmail,userPassword)
        .then(()=>{

        })
        .catch((error)=>{
          setError(error.message);
        })
        
    }
  return (
    <div>
      <div className="hero py-24  bg-base-200 min-h-screen ">
        <div className="hero-content">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister} >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="photo url"
                    className="input input-bordered"
                    name="photo"
                    
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  
                </div>
                {
                  error&&<p className="text-red-600 text-sm">{error}</p>
                }
                <div className="form-control mt-6">
                  <button className="btn bg-orange-600 hover:bg-orange-300 text-white">
                    Register
                  </button>
                </div>
              </form>
              <p>Already register? <Link to={"/login"} className="btn btn-link">login</Link> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
