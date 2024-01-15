//Edit email and username
import React from 'react';
import EditUser from '../../../components/EditUser';
import Navbar from '../../../components/Navbar';
import SideBar from '../../../components/SideBar';

export default function page() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center min-w-screen bg-white bg-gradient-to-t from-pink-50">
            <Navbar islogged={true} />
            <EditUser/>
            <div>
                <SideBar />
            </div>
        </div>
    );
}