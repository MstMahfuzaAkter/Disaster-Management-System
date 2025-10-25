import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { addDocument, getDocuments, queryDocuments } from "../firebase/firestore";

const HelpRequest = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [message, setMessage] = useState("");

  const fetchRequests = async () => {
    if (!user) return;
    const userRequests = await queryDocuments("helpRequests", "userId", "==", user.uid);
    setRequests(userRequests);
  };

  useEffect(() => {
    fetchRequests();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await addDocument("helpRequests", {
      userId: user.uid,
      email: user.email,
      message,
      status: "pending",
      createdAt: new Date()
    });
    setMessage("");
    fetchRequests();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Help Request</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
        <textarea
          placeholder="Describe your help request"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Your Requests</h2>
      <ul className="space-y-2">
        {requests.map((req) => (
          <li key={req.id} className="border p-2 rounded">
            <p>{req.message}</p>
            <p className="text-sm text-gray-500">Status: {req.status}</p>
            <p className="text-sm text-gray-400">{new Date(req.createdAt.seconds * 1000).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpRequest;
