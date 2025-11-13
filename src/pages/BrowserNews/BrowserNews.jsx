import { useLoaderData } from "react-router";
import { useNavigate } from "react-router";
import { useState, useMemo, useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

const BrowsePublicNews = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading News...</div>;
  }

  const handleSeeDetails = (newsId) => {
    if (!user) {
      toast.error("Please log in to view news details!");
      setTimeout(() => navigate("/auth/login"), 1000);
    } else {
      navigate(`/news/${newsId}`);
    }
  };

  const categories = useMemo(() => {
    const cats = data.map((h) => h.category);
    return ["All", ...new Set(cats)];
  }, [data]);

  const filteredNews = useMemo(() => {
    return data.filter((news) => {
      const matchesSearch =
        news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "" || selectedCategory === "All"
          ? true
          : news.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [data, searchTerm, selectedCategory]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen transition-all">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
        🌍 Explore All Disaster News
      </h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
        <input
          type="text"
          placeholder="Search by title or keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-full px-4 py-2 w-full md:w-1/2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded-full px-4 py-2 w-full md:w-1/4 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* News Grid */}
      {filteredNews.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No news found. Try adjusting your filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <div
              key={news._id}
              className="bg-white shadow-md rounded-lg p-5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {news.title}
              </h2>
              <p className="text-gray-600 mb-3 line-clamp-3">
                {news.description}
              </p>

              <div className="text-sm text-gray-500 mb-4 space-y-1">
                <p>📍 Location: {news.location}</p>
                <p>🌀 Category: {news.category}</p>
                <p>⚠️ Severity: {news.severity}</p>
                <p>💖 Relief Status: {news.reliefStatus}</p>
                <p>🧑‍💼 Reported by: {news.userName}</p>
              </div>

              <button
                onClick={() => handleSeeDetails(news._id)}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-cyan-600 transition"
              >
                See Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowsePublicNews;
