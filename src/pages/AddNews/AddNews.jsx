import React, { useState, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

const AddNews = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      image: e.target.image.value,
      location: e.target.location.value,
      severity: e.target.severity.value,
      reliefStatus: e.target.reliefStatus.value,
      userEmail: user.email,
      userName: user.displayName || user.name,
      createdAt: new Date(),
    };

    try {
      const res = await fetch("https://disaster-management-system-server.vercel.app/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("News added successfully!");
        e.target.reset();
      } else {
        toast.error(data.message || "Failed to add news");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Add New Disaster News
        </h2>

        {loading && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10 rounded-2xl">
            <h1>Loading...</h1>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 relative z-0">
          {/* Title */}
          <div>
            <label className="label font-medium text-gray-700">News Title</label>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter news title"
              className="input w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Category */}
          <div>
            <label className="label font-medium text-gray-700">Category</label>
            <select
              name="category"
              required
              className="select w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <option value="" disabled>Select category</option>
              <option value="Flood">Flood</option>
              <option value="Cyclone">Cyclone</option>
              <option value="Earthquake">Earthquake</option>
              <option value="Landslide">Landslide</option>
              <option value="Tsunami">Tsunami</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="label font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              required
              rows="4"
              placeholder="Enter news description"
              className="textarea w-full rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
          </div>

          {/* Location */}
          <div>
            <label className="label font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              required
              placeholder="City / District"
              className="input w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Severity */}
          <div>
            <label className="label font-medium text-gray-700">Severity</label>
            <select
              name="severity"
              required
              className="select w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <option value="" disabled>Select severity</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>

          {/* Relief Status */}
          <div>
            <label className="label font-medium text-gray-700">Relief Status</label>
            <select
              name="reliefStatus"
              className="select w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <option value="">Not started</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Image URL */}
          <div>
            <label className="label font-medium text-gray-700">Image URL (Optional)</label>
            <input
              type="text"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="input w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* User Info */}
          <div>
            <label className="label font-medium text-gray-700">User Email</label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="input w-full rounded-full bg-gray-100 border border-gray-300"
            />
          </div>

          <div>
            <label className="label font-medium text-gray-700">User Name</label>
            <input
              type="text"
              value={user.displayName || user.name}
              readOnly
              className="input w-full rounded-full bg-gray-100 border border-gray-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`btn w-full text-white mt-6 rounded-full transition ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {loading ? "Adding..." : "Add News"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNews;
