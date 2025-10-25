import React, { useContext, useState } from 'react';
import registerBg from '../assets/Login.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    province: '',
    district: '',
    city: '',
    nic: '',
    mobile: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await register(formData.email, formData.password, "user"); // Default role: user
      navigate('/'); // Redirect after successful registration
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex bg-white rounded-xl shadow-2xl overflow-hidden max-w-6xl w-full">

        {/* Left image section */}
        <div className="hidden md:block w-1/3 relative">
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${registerBg})`,
              background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${registerBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center bg-black bg-opacity-30">
              <p className="text-white text-sm">Already have an account?</p>
              <Link to="/login" className="px-4 py-2 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-md transition duration-200">
                Sign In
              </Link>
            </div>
          </div>
        </div>

        {/* Right form section */}
        <div className="w-full md:w-2/3 p-6 sm:p-10 lg:p-12">

          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-lg text-gray-700 font-bold">🤝</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
            Tell us about yourself!
          </h2>

          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="text-gray-700 text-sm font-medium">First Name</label>
                <input id="firstName" type="text" required
                  value={formData.firstName} onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="lastName" className="text-gray-700 text-sm font-medium">Last Name</label>
                <input id="lastName" type="text" required
                  value={formData.lastName} onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="text-gray-700 text-sm font-medium">Email</label>
                <input id="email" type="email" required
                  value={formData.email} onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="password" className="text-gray-700 text-sm font-medium">Password</label>
                <input id="password" type="password" required
                  value={formData.password} onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="text-gray-700 text-sm font-medium">Confirm Password</label>
                <input id="confirmPassword" type="password" required
                  value={formData.confirmPassword} onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="text-gray-700 text-sm font-medium">Home Address</label>
              <input id="address" type="text" required
                value={formData.address} onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            {/* Province, District, City */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="province" className="text-gray-700 text-sm font-medium">Province</label>
                <select id="province" required value={formData.province} onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="" disabled>Select province</option>
                  <option value="p1">Province 1</option>
                  <option value="p2">Province 2</option>
                </select>
              </div>
              <div>
                <label htmlFor="district" className="text-gray-700 text-sm font-medium">District</label>
                <select id="district" required value={formData.district} onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="" disabled>Select district</option>
                  <option value="d1">District 1</option>
                </select>
              </div>
              <div>
                <label htmlFor="city" className="text-gray-700 text-sm font-medium">City</label>
                <select id="city" required value={formData.city} onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="" disabled>Select city</option>
                  <option value="c1">City 1</option>
                </select>
              </div>
            </div>

            {/* NIC & Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nic" className="text-gray-700 text-sm font-medium">NIC</label>
                <input id="nic" type="text" required
                  value={formData.nic} onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="mobile" className="text-gray-700 text-sm font-medium">Mobile Number</label>
                <input id="mobile" type="tel" required
                  value={formData.mobile} onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            {/* Submit button */}
            <div className="pt-4 flex justify-center">
              <button type="submit"
                className="w-1/2 px-6 py-3 text-white font-semibold rounded-md bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
