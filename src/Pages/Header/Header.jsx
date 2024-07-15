import { NavLink } from "react-router-dom";



const Header = () => {
    const links = <>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/destination"}>Destination</NavLink></li>
    <li><NavLink to={"/register"}>Register</NavLink></li>
    <li><NavLink to={"/login"}>Login</NavLink></li>
    <li><NavLink to={"/bookmarks"}>Bookmarks</NavLink></li>
    
    <li><NavLink to={"/about"}>About</NavLink></li>

    </>
    return (
        <div className="navbar bg-opacity-20 fixed z-10 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-orange-300 lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm font-bold text-orange-400 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn  w-28 bg-white  text-xl"><img className="w-full text-white" src="/src/assets/logo.png" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu font-bold text-orange-400 menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Header;