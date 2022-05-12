import React, { useRef } from "react";
import { Link } from "react-router-dom";
import auth from "../../Firebase/FirebaseConfig";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Progress from "../../Components/Progress";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    if (loading) {
        return <Progress />;
    }
    if (error) {
        console.log(error.message);
    }
    if (user) {
        console.log(user);
    }
    const loginFormSubmit = (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
    };

    return (
        <div
            className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-coolGray-900 dark:text-coolGray-100 m-auto border-solid border-2 border-sky-500

        ">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form
                className="space-y-6 ng-untouched ng-pristine ng-valid"
                onSubmit={loginFormSubmit}>
                <div className="space-y-1 text-sm">
                    <label
                        for="username"
                        className="block dark:text-coolGray-400">
                        Email
                    </label>
                    <input
                        type="email"
                        required={true}
                        ref={emailRef}
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100 "
                    />
                </div>
                <div className="space-y-1 text-sm">
                    <label
                        for="password"
                        className="block dark:text-coolGray-400">
                        Password
                    </label>
                    <input
                        type="password"
                        required={true}
                        ref={passwordRef}
                        placeholder="Password"
                        className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100 "
                    />
                </div>
                <button
                    className="block w-full p-3 text-center text-white rounded bg-[#3A4256] dark:text-coolGray-900 dark:bg-pink-400"
                    type="submit">
                    Sign in
                </button>
            </form>
            <div className="flex justify-end text-xs dark:text-coolGray-400">
                <a rel="noopener noreferrer" href="#">
                    Forgot Password?
                </a>
            </div>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-coolGray-700"></div>
                <p className="px-3 text-sm dark:text-coolGray-400">
                    Login with social accounts
                </p>
                <div className="flex-1 h-px sm:w-16 dark:bg-coolGray-700"></div>
            </div>
            <GoogleLogin />
            <p className="text-xs text-center sm:px-6 dark:text-coolGray-400">
                Don't have an account?
                <Link
                    rel="noopener noreferrer"
                    to="/signup"
                    className="ml-2 underline dark:text-coolGray-100">
                    Sign up
                </Link>
            </p>
        </div>
    );
};

export default Login;
