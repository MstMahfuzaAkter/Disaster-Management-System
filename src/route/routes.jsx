import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

import MainLayout from "../layouts/MainLayout";
import AddNews from "../pages/AddNews/AddNews";
import BrowsePublicNews from "../pages/BrowserNews/BrowserNews";
import PrivateRoute from "./PrivateRouter";
import NotFound from "../pages/NotFound/NotFound";
import VolunteersSection from "../Component/VolunteersSection";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import DoctorsSection from "../Component/Doctors";
import MyNews from "../pages/MyNews/MyNews";
import UpdateNews from "../pages/UpdatedNews/UpdatedNews";
import NewsDetails from "../pages/NewsDetails/NewsDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "add-news",
                element: (
                    <PrivateRoute>
                        <AddNews />
                    </PrivateRoute>
                ),
            },
            {
                path: "browse-public-news",
                element: <BrowsePublicNews />,
                loader: () => fetch("https://disaster-management-system-server.vercel.app/news"),
            },
            {
                path: "/auth/login",
                element: <Login />,
            },
            {
                path: "/auth/register",
                element: <Register />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
            {
                path: "volunteers",
                element: <VolunteersSection></VolunteersSection>
            },
            {
                path: "doctors",
                element: <DoctorsSection></DoctorsSection>
            },
            {
                path: "my-news",
                element: <MyNews></MyNews>
            },
            {
                path: "/update-news/:id",
                element: (
                    <PrivateRoute>
                        <UpdateNews></UpdateNews>
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`https://disaster-management-system-server.vercel.app/news/${params.id}`)
            },
            {
                path: "/news/:id",
                element: <PrivateRoute>
                    <NewsDetails></NewsDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://disaster-management-system-server.vercel.app/news/${params.id}`)



            },
        ],

    },
]);
