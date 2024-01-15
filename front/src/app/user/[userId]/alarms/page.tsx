'use client';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import AlarmsList from '../../../components/AlarmsList';
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
    const [alarm, setAlarm] = React.useState({
        alarmId: "",
        title: "",
        alarmDateTime: "",
        });
    return (
        <div>
            <Navbar islogged={true}/>
            <div className="flex min-h-screen flex-col justify-between p-32 bg-white bg-gradient-to-t from-pink-50">
            
        <div className="flex flex-col">
            <div className='flex flex-row justify-between'>
            <h1 className="text-4xl font-bold text-left">
                Alarms
            </h1>
            <div className='justify-end'>
                <div className='flex flex-row items-center cursor-pointer hover:text-pink-500'>
            <PlusCircleIcon className='h-10 w-10' /> <p className='text-md pl-3 font-bold'> Add new Alarm</p>
            </div>
            </div>
            </div>
            <div className='pt-10'>
            <AlarmsList alarm={alarm} /></div>
        </div>
        <div>
        <SideBar userId={userId}/>
        </div>
        </div>
        </div>
    )};