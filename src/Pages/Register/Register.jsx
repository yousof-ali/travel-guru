import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { authProvider } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { BiSolidHide } from "react-icons/bi";
import { IoEye } from "react-icons/io5";

const Register = () => {
  const { createUser } = useContext(authProvider);
  const [error, setError] = useState("");
  const navi = useNavigate();
  const [hide, setHide] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const userName = e.target.name.value;
    const userImgUrl = e.target.photo.value;
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;
    console.log(userName, userEmail, userImgUrl, userPassword);

    createUser(userEmail, userPassword)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: userName,
          photoURL: userImgUrl,
        })
          .then(() => {
            navi("/");
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleHide = () => {
    setHide(!hide);
  };

  return (
    
      
          <div className="py-24 max-w-[300px] mx-auto min-h-screen">
            <div className="rounded-xl shadow-2xl p-4">
              <form onSubmit={handleRegister}>
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
                  <div className="flex items-center gap-2">
                    <input
                      type={hide ? "text" : "password"}
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
                </div>
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <div className="form-control mt-6">
                  <button className="btn bg-orange-600 hover:bg-orange-300 text-white">
                    Register
                  </button>
                </div>
              </form>
              <p>
                Already register?{" "}
                <Link to={"/login"} className="btn btn-link">
                  login
                </Link>{" "}
              </p>
            </div>
          </div>
    
  );
};

export default Register;
