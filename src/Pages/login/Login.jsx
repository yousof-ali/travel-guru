import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authProvider } from "../../AuthProvider/AuthProvider";
import { BiSolidHide } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Login = () => {
  const { login, resetPassword,loginGoogle,loginGitHub } = useContext(authProvider);
  const [sucess, setSucess] = useState("");
  const [error, setError] = useState("");
  const emailref = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const [hide,setHide]=useState(false);
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;

    login(userEmail, userPassword)
      .then(() => {
        console.log("successfully login");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleForGetPassword = () => {
    setSucess("");
    setError("");
    const userEmail = emailref.current.value;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail)) {
      setError("type a valid email!");
      return;
    }
    resetPassword(userEmail).then(() => {
      setSucess("check your mail " + userEmail);
    });
  };

  const handleHide=()=>{
    setHide(!hide);
  }

  const handleGoogleLogin = ()=>{
    loginGoogle()
    .then(()=>{
      console.log("google login done")
      navigate(location?.state ? location.state : "/");
    })
    .catch((error)=>{
      console.log(error.message);
    })
  }

  const handleGitHubLogin = ()=>{
    loginGitHub()
    .then(()=>{
      console.log("github login done")
      navigate(location?.state ? location.state : "/");
    })
    .catch((error)=>{
      console.log(error.message);
    })
  }
  return (
    <div>
      <div className="hero min-h-screen ">
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
                  <div className="flex items-center gap-2">
                    <input
                      type={hide?"text":"password"}
                      placeholder="password"
                      name="password"
                      className="input input-bordered"
                      required
                    />
                    <div className="text-2xl" onClick={handleHide}>
                      {
                        hide?<BiSolidHide />
                        :<IoEye/>
                      }
                    
                  
                    </div>
                  </div>
                  <label className="label">
                    <a
                      onClick={handleForGetPassword}
                      href="#"
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                {error ? (
                  <p className="text-sm text-red-600">{error}</p>
                ) : (
                  <p className="text-sm text-green-600">{sucess}</p>
                )}
                <div className="form-control mt-6">
                  <button className="btn bg-orange-600 hover:bg-orange-300 text-white">
                    Login
                  </button>
                </div>
              </form>
              <p>
                {" "}
                No account?{" "}
                <Link to={"/register"} className="btn btn-link">
                  register
                </Link>{" "}
              </p>
              <div className="divider">or</div>
              <div className="flex items-center justify-center text-2xl gap-4">
                <div onClick={handleGoogleLogin}>
                <FaGoogle />
                </div>
                <div onClick={handleGitHubLogin}>
                <FaGithub />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
