import React, { useState } from 'react';
import hero from '../assets/hero.jpg'; 

const Home = () => {
  const [activeButton, setActiveButton] = useState('latest'); // 'latest' or 'map'

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${hero})`, 
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundBlendMode: 'multiply'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full p-4 md:p-12 text-white">
        
        <div className="max-w-4xl mb-8">
          <p className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            Welcome to
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Disaster Management System
          </h1>
        </div>
        
        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          
          <button
            onClick={() => setActiveButton('latest')}
            className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-xl 
                        border transition duration-300 ease-in-out
                        ${activeButton === 'latest' 
                          ? 'bg-blue-600 hover:bg-blue-700 border-blue-600' 
                          : 'bg-white text-gray-800 hover:bg-gray-100 border-white'}`}>
            Latest Updates
          </button>
          
          <button
            onClick={() => setActiveButton('map')}
            className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-xl 
                        border transition duration-300 ease-in-out
                        ${activeButton === 'map' 
                          ? 'bg-blue-600 hover:bg-blue-700 border-blue-600 text-white' 
                          : 'bg-white text-gray-800 hover:bg-gray-100 border-white'}`}>
            Disaster Map
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
