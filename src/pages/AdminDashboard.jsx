import React, { useEffect, useState } from "react";
import { getDocuments, updateDocument } from "../firebase/firestore";

const AdminDashboard = () => {
  const [helpRequests, setHelpRequests] = useState([]);
  const [disasterReports, setDisasterReports] = useState([]);

  const fetchData = async () => {
    const requests = await getDocuments("helpRequests");
    setHelpRequests(requests);
    const reports = await getDocuments("disasterReports");
    setDisasterReports(reports);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStatusChange = async (collection, id, status) => {
    await updateDocument(collection, id, { status });
    fetchData();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Help Requests</h2>
        <ul className="space-y-2">
          {helpRequests.map((req) => (
            <li key={req.id} className="border p-2 rounded flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <p className="font-semibold">{req.email}</p>
                <p>{req.message}</p>
                <p className="text-sm text-gray-500">Status: {req.status}</p>
              </div>
              <div className="flex gap-2 mt-2 md:mt-0">
                <button onClick={() => handleStatusChange("helpRequests", req.id, "approved")} className="bg-green-500 text-white p-1 rounded">Approve</button>
                <button onClick={() => handleStatusChange("helpRequests", req.id, "rejected")} className="bg-red-500 text-white p-1 rounded">Reject</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Disaster Reports</h2>
        <ul className="space-y-2">
          {disasterReports.map((rep) => (
            <li key={rep.id} className="border p-2 rounded flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <p className="font-semibold">{rep.title} - {rep.email}</p>
                <p>{rep.description}</p>
                <p className="text-sm text-gray-500">Status: {rep.status}</p>
              </div>
              <div className="flex gap-2 mt-2 md:mt-0">
                <button onClick={() => handleStatusChange("disasterReports", rep.id, "approved")} className="bg-green-500 text-white p-1 rounded">Approve</button>
                <button onClick={() => handleStatusChange("disasterReports", rep.id, "rejected")} className="bg-red-500 text-white p-1 rounded">Reject</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
