import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/login");
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center">
                <Link to="/">
                    <div className="bg-white text-blue-800 font-extrabold text-xl py-2 px-3 rounded flex items-center">
                        WARM <span className="font-light mx-0.5">HANDS</span>
                        <span className="w-4 h-4 bg-orange-300 ml-1 rounded-full border border-gray-400"></span>
                    </div>
                </Link>
            </div>

            <div className="flex gap-8 items-center text-white text-lg font-medium">
                <Link to="/" className="hover:text-gray-300 transition duration-150">HOME</Link>
                <Link to="/news" className="hover:text-gray-300 transition duration-150">NEWS</Link>
                <Link to="/maps" className="hover:text-gray-300 transition duration-150">MAP</Link>
                <Link to="/contact" className="hover:text-gray-300 transition duration-150">CONTACT</Link>
            </div>

            <div className="flex gap-4 items-center">
                {user ? (
                    <>
                        <Link
                            to="/report"
                            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-150"
                        >
                            REPORT
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-150"
                        >
                            LOGOUT
                        </button>
                    </>
                ) : (
                    <>
                        <Link 
                            to="/login" 
                            className="bg-white text-gray-800 font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition duration-150"
                        >
                            Sign in
                        </Link>
                        <Link 
                            to="/register" 
                            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-150"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
