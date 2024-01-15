'use client';
import React, { useState } from 'react';
import CalendarItem from "../../../components/Calendar";
import Navbar from '../../../components/Navbar';
import SideBar from '../../../components/SideBar';

export default function page() {
    const [userId, setUserId] = useState(1);

    const getUserId = () => {
        const url = window.location.href;
        //url is like /user/1/settings
        //get the id from the url
        const parts = url.split('/');
        const id = parts[4];
        console.log("id");
        console.log(id);
        setUserId(parseInt(id));
    }
    return (
        <div>
        <Navbar islogged={true}/>
        <div className="flex min-h-screen min-w-screen bg-white items-center justify-center bg-gradient-to-t from-pink-50 p-16">
            <div className="flex flex-row min-h-screen min-w-screen items-center justify-between">
            <CalendarItem />
            <div>
                <SideBar userId={userId}/>
            </div></div>
        </div>
        </div>
    );
}