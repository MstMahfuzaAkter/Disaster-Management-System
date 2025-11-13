import React from 'react';
import NavBar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';


const MainLayout = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <NavBar />
                <div className="mt-4">
                    <Outlet />
                </div>
                <Footer></Footer>

            </div>
          

        </>

    );
};

export default MainLayout;