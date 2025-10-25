import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { addDocument, queryDocuments } from "../firebase/firestore";

const DisasterReport = () => {
  const { user } = useContext(AuthContext);
  const [reports, setReports] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchReports = async () => {
    if (!user) return;
    const userReports = await queryDocuments("disasterReports", "userId", "==", user.uid);
    setReports(userReports);
  };

  useEffect(() => {
    fetchReports();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) return;

    await addDocument("disasterReports", {
      userId: user.uid,
      email: user.email,
      title,
      description,
      status: "pending",
      createdAt: new Date()
    });

    setTitle("");
    setDescription("");
    fetchReports();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Disaster Report</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="border p-2"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="bg-red-500 text-white p-2">Submit</button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Your Reports</h2>
      <ul className="space-y-2">
        {reports.map((report) => (
          <li key={report.id} className="border p-2 rounded">
            <p className="font-semibold">{report.title}</p>
            <p>{report.description}</p>
            <p className="text-sm text-gray-500">Status: {report.status}</p>
            <p className="text-sm text-gray-400">{new Date(report.createdAt.seconds * 1000).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisasterReport;
