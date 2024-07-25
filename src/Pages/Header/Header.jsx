import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authProvider } from "../../AuthProvider/AuthProvider";
import "./Header.css"

const Header = () => {
  const { user, logOut } = useContext(authProvider);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/destination"}>Destination</NavLink>
      </li>
      {!user ? (
        <>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to={"/bookmarks"}>Bookmarks</NavLink>
          </li>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="navbar bg-white bg-opacity-70  fixed z-10 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-orange-500 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm font-bold text-orange-400 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a  className="  w-20  text-xl">
          <img
            className="w-full"
            src="/logo.png"
            alt=""
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-bold  menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div
              className="w-10 mr-2 lg:mr-4
           outline outline-orange-500 rounded-full"
            >
              {user.photoURL ? (
                <Link to={"/profile"}>
                  <img
                    title={user.displayName}
                    alt="user"
                    className="rounded-full"
                    src={user.photoURL}
                  />
                </Link>
              ) : (
                <Link to={"/profile"}>
                  <img
                    title={user.displayName}
                    alt="user"
                    className="rounded-full"
                    src="/src/assets/default-avatar-icon-of-social-media-user-vector.jpg"
                  />
                </Link>
              )}
            </div>
            <Link
              onClick={handleLogOut}
              className="btn border-0 bg-orange-500 text-white hover:bg-orange-300"
            >
              Logout
            </Link>
          </>
        ) : (
          <Link
            to={"/login"}
            className="btn border-0 bg-orange-500 text-white hover:bg-orange-300"
          >
            login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
