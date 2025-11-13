import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const MyNews = () => {
  const { user } = useContext(AuthContext);
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchNews = async () => {
    if (!user?.email) return;
    setLoading(true);
    try {
      const res = await fetch(`https://disaster-management-system-server.vercel.app/my-news/${user.email}`);
      const data = await res.json();
      setNewsList(data.result || []);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Failed to load news",
        text: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This news will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await fetch(`https://disaster-management-system-server.vercel.app/news/${id}`, { method: "DELETE" });
          setNewsList((prev) => prev.filter((n) => n._id !== id));
          Swal.fire("Deleted!", "Your news has been deleted.", "success");
        } catch (err) {
          console.error(err);
          Swal.fire("Error!", "Failed to delete news.", "error");
        }
      }
    });
  };

  if (loading)
    return (
      <div className="text-center mt-20 text-gray-600 text-xl">Loading News...</div>
    );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        📰 My Submitted News
      </h1>

      {newsList.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">
          You haven't added any news yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsList.map((news) => (
            <div
              key={news._id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-transform transform hover:-translate-y-1"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2 truncate">
                  {news.title}
                </h2>
                <p className="text-gray-600 mb-3 truncate">
                  {news.description || "No description provided."}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {news.category}
                  </span>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    Severity: {news.severity}
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Relief: {news.reliefStatus}
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                    Location: {news.location}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  Added on: {new Date(news.createdAt).toLocaleDateString()}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => navigate(`/news/${news._id}`)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-2 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition"
                  >
                    View
                  </button>
                  <button
                    onClick={() => navigate(`/update-news/${news._id}`)}
                    className="flex-1 bg-yellow-500 text-white px-3 py-2 rounded-xl hover:bg-yellow-600 transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(news._id)}
                    className="flex-1 bg-red-500 text-white px-3 py-2 rounded-xl hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyNews;
