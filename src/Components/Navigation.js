import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebase/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
const Navigation = () => {
    const [user, loading, error] = useAuthState(auth);
    const [showMenu, setShowMenu] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const mobileMenu = () => {
        setShowMenu(!showMenu);
    };
    const profileMenu = () => {
        setShowProfile(!showProfile);
    };
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="" onClick={mobileMenu}>
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
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className={
                                showMenu
                                    ? "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                                    : "hidden"
                            }>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/appoinment">Appoinment</Link>
                            </li>
                            <li>
                                <Link to="/reviews">Reviews</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className=" ml-1 text-xl">
                        Doctors Portal
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/appoinment">Appoinment</Link>
                        </li>
                        <li>
                            <Link to="/reviews">Reviews</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.emailVerified ? (
                        <div className="dropdown dropdown-end">
                            <label
                                onClick={profileMenu}
                                tabIndex="0"
                                className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        src={
                                            user?.photoURL
                                                ? user.photoURL
                                                : "https://api.lorem.space/image/face?hash=33791"
                                        }
                                    />
                                </div>
                            </label>
                            <ul
                                tabIndex="0"
                                className={
                                    showProfile
                                        ? "mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                                        : "hidden"
                                }>
                                <li>
                                    <Link to="/profile">Profile</Link>
                                </li>
                                <li>
                                    <Link to="/settings">Settings</Link>
                                </li>
                                <li>
                                    <button
                                        className="btn btn-link"
                                        onClick={() => {
                                            signOut(auth);
                                        }}>
                                        Logout
                                    </button>
                                    {/* <Link to="/logout">Logout</Link> */}
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <ul className="menu menu-horizontal p-0">
                                <li>
                                    <button
                                        className="btn btn-link"
                                        onClick={() => {
                                            navigate("/signup");
                                        }}>
                                        Sign Up
                                    </button>
                                </li>

                                <li>
                                    <button
                                        className="btn btn-link"
                                        onClick={() => {
                                            navigate("/login");
                                        }}>
                                        Login
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navigation;
