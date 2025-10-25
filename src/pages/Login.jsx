import React, { useContext, useState } from 'react';
import loginBg from '../assets/Login.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            // Note: In a real app, this should redirect to the main dashboard/home page, 
            // which in this case seems to be the one showing the welcome message 
            // and the latest updates/map buttons.
            await login(email, password);
            navigate('/'); 
        } catch (err) {
            // Handle error messages securely and user-friendly
            setError("Login failed. Please check your email and password."); 
            console.error(err);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 font-inter">
            <div className="flex bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full">

                {/* Left image section */}
                <div className="hidden md:block w-1/2 relative bg-gray-900">
                    <div
                        className="h-full bg-cover bg-center p-6 flex flex-col justify-end"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${loginBg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="flex justify-between items-center text-white p-2">
                            <p className="text-md">Don't have an account?</p>
                            <Link 
                                to="/register" 
                                className="px-6 py-2 text-md font-semibold text-gray-800 bg-white hover:bg-gray-200 rounded-lg transition duration-200 shadow-lg"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right form section */}
                <div className="w-full md:w-1/2 p-10 lg:p-16">

                    {/* Handshake/Logo Icon */}
                    <div className="flex justify-center mb-8">
                        {/* Using inline SVG to create the multi-colored handshake circle as seen in the screenshot */}
                        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="45" fill="#f0f0f0"/>
                            {/* Simplified hand/people representation */}
                            <path d="M50 15C33.4315 15 20 28.4315 20 45C20 61.5685 33.4315 75 50 75C66.5685 75 80 61.5685 80 45C80 28.4315 66.5685 15 50 15Z" fill="#ffcc99"/>
                            <path d="M50 15C58.8366 15 66 22.1634 66 31C66 39.8366 58.8366 47 50 47V15Z" fill="#808080"/>
                            <path d="M50 47C41.1634 47 34 39.8366 34 31C34 22.1634 41.1634 15 50 15V47Z" fill="#ff6666"/>
                            <path d="M50 75C58.8366 75 66 67.8366 66 59C66 50.1634 58.8366 43 50 43V75Z" fill="#6699ff"/>
                            <path d="M50 43C41.1634 43 34 50.1634 34 59C34 67.8366 41.1634 75 50 75V43Z" fill="#99ff99"/>
                        </svg>
                    </div>

                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
                        Welcome Back!
                    </h2>

                    {error && (
                        <p className="text-red-500 text-center mb-6 text-sm bg-red-100 p-2 rounded-md border border-red-200">{error}</p>
                    )}

                    <form onSubmit={handleSubmit}>

                        {/* Email Input */}
                        <div className="mb-6 flex items-center">
                            <label className="text-gray-700 text-lg font-medium w-1/3" htmlFor="email">Email</label>
                            <input
                                className="w-2/3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                                id="email"
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-10 flex items-center">
                            <label className="text-gray-700 text-lg font-medium w-1/3" htmlFor="password">Password</label>
                            <input
                                className="w-2/3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                                id="password"
                                type="password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* Sign in Button */}
                        <div className="flex justify-center">
                            <button
                                className="w-full md:w-2/3 px-6 py-3 text-white font-semibold text-lg rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-xl transform hover:scale-[1.02]"
                                type="submit"
                            >
                                Sign in
                            </button>
                        </div>
                        
                        {/* Mobile Register Link */}
                        <div className="md:hidden mt-8 text-center">
                            <p className="text-gray-600 mb-2">Don't have an account?</p>
                            <Link 
                                to="/register" 
                                className="text-blue-600 font-semibold hover:text-blue-700 transition duration-200"
                            >
                                Register Now
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;