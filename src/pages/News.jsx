import React from 'react';
import disasterMap from '../assets/Bangladesh_Map.jpg';
import resultImage from '../assets/Fire.jpg'; 

const News = () => {
    
    const handleSearch = (e) => {
        e.preventDefault();
    };

    const resultData = {
        title: "Title 1",
        location: "Colombo",
        date: "2024-07-28",
        timeAgo: "13 days ago",
        snippet: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, voluptates beatae cumque, numquam consectetur soluta iusto harum quasi ut aspernatur eos neque molestias illum"
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            <div className="max-w-7xl mx-auto">
                
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Search Results for <span className="text-blue-600">Colombo</span>
                </h1>

                <form onSubmit={handleSearch} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                    <input
                        type="text"
                        placeholder="Disaster Location"
                        className="w-full sm:w-1/3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Disaster Type"
                        className="w-full sm:w-1/3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full sm:w-1/6 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Search
                    </button>
                </form>

                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    
                    <div className="w-full lg:w-3/5 space-y-6">
                        {[resultData, resultData].map((item, index) => (
                            <div key={index} className="flex bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 p-4">
                                
                                <div className="w-40 h-40 flex-shrink-0 mr-4">
                                    <img
                                        src={resultImage}
                                        alt="Disaster Rescue"
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                </div>

                                <div className="flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {item.title}
                                        </h3>
                                        <span className="text-md font-semibold text-gray-600">
                                            {item.location}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-3 line-clamp-4">
                                        {item.snippet}
                                    </p>

                                    <div className="flex space-x-3 text-xs">
                                        <span className="px-2 py-1 bg-red-100 text-red-700 font-medium rounded">
                                            {item.date}
                                        </span>
                                        <span className="px-2 py-1 bg-gray-200 text-gray-700 font-medium rounded">
                                            {item.timeAgo}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full lg:w-2/5 mt-10 lg:mt-0">
                        <div className="bg-white rounded-lg shadow-lg h-full max-h-[800px] overflow-hidden">
                            <img
                                src={disasterMap}
                                alt="Disaster Map of Sri Lanka"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;