import { useContext } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { authProvider } from "../../AuthProvider/AuthProvider";
const Login = () => {
    const {user,login} = useContext(authProvider)
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("hi");
  };
  return (
    <div>
      <Header></Header>
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
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
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
