import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserDashboard from "../pages/UserDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import DisasterReport from "../pages/DisasterReport";
import HelpRequest from "../pages/HelpRequest";
import Contact from "../pages/Contact";
import ProtectedRoute from "../components/ProtectedRoute";
import News from "../pages/News";
import Maps from "../pages/Maps";
import Report from "../pages/Report";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/news", element: <News /> },
            { path: "/maps", element: <Maps /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/contact", element: <Contact /> },
            { 
                path: "/report", 
                element: (
                    <ProtectedRoute>
                        <Report />
                    </ProtectedRoute>
                )
            },
            {
                path: "/user",
                element: (
                    <ProtectedRoute>
                        <UserDashboard />
                    </ProtectedRoute>
                ),
                children: [
                    { path: "help-request", element: <HelpRequest /> },
                    { path: "disaster-report", element: <DisasterReport /> },
                ],
            },
            {
                path: "/admin",
                element: (
                    <ProtectedRoute adminOnly={true}>
                        <AdminDashboard />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);

export default router;
