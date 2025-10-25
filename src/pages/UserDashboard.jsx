import React from "react";
import { Outlet, Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      <nav className="flex gap-4 mb-4">
        <Link to="help-request" className="text-blue-500">Help Request</Link>
        <Link to="disaster-report" className="text-blue-500">Disaster Report</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default UserDashboard;
