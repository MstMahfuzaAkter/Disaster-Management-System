import React, { useState } from "react";
import { useLoaderData } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const newsData = data?.result;
  const [news] = useState(newsData);

  if (!news)
    return (
      <p className="text-center mt-10 text-gray-700 text-lg">
        News not found
      </p>
    );

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6 md:px-8">
      <div className="bg-white shadow-lg border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 p-6">
          {/* News Image */}
          {news.image && (
            <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-auto flex-shrink-0 rounded-lg overflow-hidden shadow-inner">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}

          {/* News Info */}
          <div className="flex flex-col justify-start space-y-4 w-full md:w-1/2 text-gray-800">
            <h1 className="text-3xl sm:text-4xl font-bold break-words">
              {news.title}
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 border border-blue-500 text-blue-600 font-semibold rounded-full text-sm">
                {news.category}
              </span>
              <span className="px-3 py-1 border border-red-500 text-red-600 font-semibold rounded-full text-sm">
                Severity: {news.severity}
              </span>
              <span className="px-3 py-1 border border-green-500 text-green-600 font-semibold rounded-full text-sm">
                Relief: {news.reliefStatus}
              </span>
            </div>

            {/* Description */}
            <p className="mt-3 text-gray-700 leading-relaxed text-base sm:text-lg">
              {news.description}
            </p>

            {/* Meta Info */}
            <div className="mt-4 space-y-1 text-gray-600 text-sm">
              <p>
                <span className="font-semibold">Location:</span> {news.location}
              </p>
              <p>
                <span className="font-semibold">Created by:</span> {news.userName}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {news.userEmail}
              </p>
              <p>
                <span className="font-semibold">Created At:</span>{" "}
                {new Date(news.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
