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
                        <label tabindex="0" className="" onClick={mobileMenu}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabindex="0"
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
                        <div class="dropdown dropdown-end">
                            <label
                                onClick={profileMenu}
                                tabindex="0"
                                class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
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
                                tabindex="0"
                                class={
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
                                        class="btn btn-link"
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
                                        class="btn btn-link"
                                        onClick={() => {
                                            navigate("/signup");
                                        }}>
                                        Sign Up
                                    </button>
                                </li>

                                <li>
                                    <button
                                        class="btn btn-link"
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
