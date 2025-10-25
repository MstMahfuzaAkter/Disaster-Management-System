import React from 'react';
import map from '../assets/Bangladesh_Map.jpg';

const Maps = () => {
    return (
        // 1. Full viewport container with padding and background color
        <div className="min-h-screen bg-gray-50 p-6 md:p-10 flex justify-center items-center">
            
            {/* 2. Map Container: Controls the overall size, shadow, and aspect ratio of the map block */}
            <div className="w-full max-w-7xl h-full rounded-xl shadow-2xl overflow-hidden aspect-video">
                
                {/* 3. Image element */}
                <img 
                    src={map} 
                    alt="Disaster Map of Bangladesh" 
                    className="w-full h-full"
                />
            </div>
        </div>
    );
};

export default Maps;