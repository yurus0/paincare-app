'use client';
import { BookOpenIcon, ClipboardDocumentCheckIcon, PresentationChartLineIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'; // Import the necessary icons
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import CalendarItem from '../../components/Calendar';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import ScoreZone from '../../components/ScoreZone';
import SideBar from '../../components/SideBar';
import UserService from '../../services/UserService';

export default function Page() {
    //find user by id then get username
    const [user, setUser] = useState({
        userId: '',
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    });
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('John Doe');


    //get user by id
    useEffect(() => {
        const url = window.location.href;
        const id = url.substring(url.lastIndexOf('/') + 1);
        setUserId(id);
        const getUser = async (userId:any) => {
            const response = await UserService.getUser(userId);
            const user = response.data;
            console.log(user);
            setUser(user);
            setUsername(user.username);
            console.log("username");
        };
        getUser(id);
        console.log("username");
        console.log(username);

    }
    , [userId, user]);



  // Dashboard mini cards
    const items = [
        { title: 'Diagnostic test', description: 'Discover your potential endometriosis diagnosis.', iconName: ClipboardDocumentCheckIcon, href: '' },
        { title: 'Endo Information', description: 'Stay informed about endometriosis.', iconName: BookOpenIcon, href: `/user/${userId}/articles` },
        { title: 'Pain Evolution', description: 'Explore your pain journey.', iconName: PresentationChartLineIcon, href: `/user/${userId}/pain-evolution` },
        { title: 'Quiz', description: 'Test your knowledge about endometriosis.', iconName: QuestionMarkCircleIcon, href: `/user/${userId}/quiz` },
    ];

    return (
        <div>
            <Navbar islogged={true} />
        <div className="bg-white flex flex-row min-h-screen min-w-screen items-center justify-between bg-gradient-to-t from-pink-50 p-16">
            <div className='pl-10'>
            <div className='text-4xl items-center justify-center px-10 py-6'>
                <div className='text-left'>
                    <p className='font-bold text-2xl'>Dashboard</p>
                </div>
                <div className='text-left pt-6 pb-10'>
                    <h1>Welcome back, <span className='font-bold'>{user.username}</span></h1>
                </div>
            </div>
        <div className='flex flex-row justify-center items-center'>
        <div className='px-2 pb-20 w-2/3'>
            <ScoreZone>
            <div className="pt-3 pb-1 text-2xl font-bold text-pink-500">
                <p>Last score</p>
            </div>
            <div className="pb-3">
                <div className='flex flex-row items-center justify-between'>
                    <p className='text-left text-lg'>Update your score regularly</p>
                    <div className='pl-20 items-center pb-6' >
                        <p className='text-center text-2xl font-bold justify-end'>0</p>
                        <p className='text-center text-sm justify-end'>Score</p>
                    </div>
                </div>
            </div>
            </ScoreZone>
        </div>
        </div>
        <div className='flex flex-row justify-between items-center px-20 pb-10 pt-3 text-xl font-bold text-left'>
            <h2 className=''> What are you looking for :</h2>
        </div>
        <div className='items-center justify-center flex flex-row'>
        {items.map((item, index) => (
            <div className='p-4'>
                <Link href={item.href}>
            <Card key={index}>

            <div className='text-left break-normal max-w-[180px] min-h-[150px]'>
                <div className='pb-6'>
                {React.createElement(item.iconName, { className: 'w-10 h-10' })}
                </div>
                <div className='items-bottom'>
                <p className='font-bold text-lg'>{item.title}</p>
                <p className='text-sm'>{item.description}</p>
                </div>
            </div>
            </Card>
            </Link>
            </div>
        ))}
        </div>

        <div className='py-14'>
            {/*show days as snap-x*/}
            <h1 className='text-4xl font-bold text-left px-10 pb-10'>Cycle tracking</h1>
            <CalendarItem />
            </div>
        </div>

        <div>
        <SideBar userId={userId} /></div>
        </div>
        </div>
    );
}
