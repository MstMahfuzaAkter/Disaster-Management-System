import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://disaster-management-system-server.vercel.app/latest-news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setLoading(false);
      });
  }, []);

  const handleViewDetails = (newsId) => {
    if (user) {
      navigate(`/news/${newsId}`);
    } else {
      navigate("/auth/login");
    }
  };

  if (loading)
    return (
      <div className="text-center text-gray-600 mt-20 text-xl">
        Loading latest news...
      </div>
    );

  return (
    <div className="p-10 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Title Section */}
      <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-800">
        📰 Latest Disaster News
      </h1>
      <p className="text-center text-gray-600 mb-12 text-lg">
        Stay informed with the latest updates and reports from around the world.
      </p>

      {/* News Grid */}
      {news.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No latest news found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-3 line-clamp-4">
                  {item.description}
                </p>

                <div className="text-sm text-gray-500 mb-4 space-y-1">
                  <p>📍 Location: {item.location}</p>
                  <p>🌀 Category: {item.category}</p>
                  <p>⚠️ Severity: {item.severity}</p>
                  <p>💖 Relief Status: {item.reliefStatus}</p>
                  <p>🧑‍💼 Reported by: {item.userName || "Anonymous"}</p>
                </div>

                <button
                  onClick={() => handleViewDetails(item._id)}
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium px-4 py-2 rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestNews;
