import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

const UpdateNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch news data
  useEffect(() => {
    fetch(`https://disaster-management-system-server.vercel.app/news/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.result) setNews(data.result);
        else toast.error("Failed to load news data");
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error loading news");
        setLoading(false);
      });
  }, [id]);

  // 🔹 Handle Update
  const handleSubmit = (e) => {
    e.preventDefault();
    const { _id, ...updatedData } = news;

    fetch(`https://disaster-management-system-server.vercel.app/news/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("News updated successfully!", { duration: 3000 });
          setTimeout(() => navigate("/my-news"), 600);
        } else toast.error("Failed to update news!");
      })
      .catch(() => toast.error("Server error. Please try again!"));
  };

  if (loading) return <p className="text-center py-10 text-gray-600">Loading news...</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md transition-all duration-300">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Update News</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">Title</label>
          <input
            type="text"
            value={news.title || ""}
            onChange={(e) => setNews({ ...news, title: e.target.value })}
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">Category</label>
          <input
            type="text"
            value={news.category || ""}
            onChange={(e) => setNews({ ...news, category: e.target.value })}
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">Description</label>
          <textarea
            value={news.description || ""}
            onChange={(e) => setNews({ ...news, description: e.target.value })}
            rows="4"
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">Location</label>
          <input
            type="text"
            value={news.location || ""}
            onChange={(e) => setNews({ ...news, location: e.target.value })}
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Severity */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">Severity</label>
          <input
            type="text"
            value={news.severity || ""}
            onChange={(e) => setNews({ ...news, severity: e.target.value })}
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Relief Status */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">Relief Status</label>
          <input
            type="text"
            value={news.reliefStatus || ""}
            onChange={(e) => setNews({ ...news, reliefStatus: e.target.value })}
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">Image URL</label>
          <input
            type="text"
            value={news.image || ""}
            onChange={(e) => setNews({ ...news, image: e.target.value })}
            placeholder="https://example.com/image.jpg"
            className="border w-full p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* User Info */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">User Name</label>
          <input type="text" value={news.userName || ""} disabled className="border w-full p-2 rounded-md bg-gray-100" />
        </div>
        <div>
          <label className="block font-semibold mb-1 text-gray-700">User Email</label>
          <input type="email" value={news.userEmail || ""} disabled className="border w-full p-2 rounded-md bg-gray-100" />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all shadow-md">
            Update News
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateNews;
