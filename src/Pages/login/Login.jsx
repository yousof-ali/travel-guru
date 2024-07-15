import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { authProvider } from "../../AuthProvider/AuthProvider";
const Login = () => {
  const {login,resetPassword}=useContext(authProvider)
  const[sucess,setSucess]=useState("");
  const[error,setError]=useState("");
  const emailref = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("")
    const userEmail = e.target.email.value ;
    const userPassword = e.target.password.value;

    login(userEmail,userPassword)
    .then(()=>{
      console.log("successfully login")
    })
    .catch((error)=>{
      setError(error.message)
    })
  };

  const handleForGetPassword = ()=>{
    setSucess("");
    setError('');
    const userEmail = emailref.current.value
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail)){
      setError("type a valid email!")
      return;
    }
    resetPassword(userEmail)
    .then(()=>{
      setSucess("check your mail "+ userEmail)
    })

  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content">
            
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    ref={emailref}
                    required
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
                  <label className="label">
                    <a onClick={handleForGetPassword} href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                {
                  error?<p className="text-sm text-red-600">{error}</p>:<p className="text-sm text-green-600">{sucess}</p>
                }
                <div className="form-control mt-6">
                  <button className="btn bg-orange-600 hover:bg-orange-300 text-white">Login</button>
                </div>
              </form>
              <p> No account? <Link to={"/register"} className="btn btn-link">register</Link> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
