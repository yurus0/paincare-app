'use client';
import { ArrowRightStartOnRectangleIcon, BellAlertIcon, ClockIcon, GlobeAltIcon, InformationCircleIcon, PencilSquareIcon, TrashIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import Card from '../../../components/Card';
import DangerZone from '../../../components/DangerZone';
import Item from '../../../components/Item';
import Navbar from '../../../components/Navbar';
import SideBar from '../../../components/SideBar';
import UserService from '../../../services/UserService';

export default function page() {
    const [user, setUser] = useState({
        userId: '',
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        profilePicUrl: ''
    });
    const [userId, setUserId] = useState('1');
    const [username, setUsername] = useState('imane');
    const islogged =true;


    useEffect(()=>{
        if(user){
            setUsername(user.username);}
    }, [user])

    useEffect(() => {
        const url = window.location.href;
        //url is like /user/1/settings
        //get the id from the url
        const parts = url.split('/');
        const id = parts[4];
        console.log("id");
        console.log(id);
        setUserId(id);
        const getUser = async (userId:any) => {
            const response = await UserService.getUser(userId);
            const user = response.data;
            console.log(user);
            setUsername(user.username);
            setUser(user);
        };
        getUser(id);
        console.log("username");
        console.log(username);

    }
    , [userId, user]);


    return (
        <div><Navbar islogged={true} />
        <div className="bg-white flex flex-col min-h-screen items-center justify-center min-w-scree bg-gradient-to-t from-pink-50 p-16n">
        <div className="py-24 ">
        <Card>
            {/*Close button*/}
            <div className="flex flex-row items-center absolute top-3 right-3">
            <button
                className=" text-gray-400 hover:text-gray-700 cursor-pointer"
                >
                <XMarkIcon className="h-4 w-4" />
            </button>
            </div>
        <div className="text-lg font-bold text-left pb-6">Settings</div>
        <div className="flex items-center justify-center pt-2">
            {user.profilePicUrl === null? (

                <UserCircleIcon
                className="h-20 w-20 text-lg font-bold text-center"
            />):(
                <img className="h-20 w-20 rounded-full" src={user.profilePicUrl} alt="profile picture" />
            )
            }
            
        </div>
        <p className="text-lg font-bold text-center py-5">{user.username}</p>
        <Item
            title="Alarm"
            Icon={<ClockIcon className="h-6 w-6" />}
        />
        <Link href={`/user/${user.userId}/edit`}>
        <Item
            title="Edit profile"
            Icon={<PencilSquareIcon className="h-6 w-6" />}
        />
        </Link>
        <Item
            title="Change Language"
            Icon={<GlobeAltIcon className="h-6 w-6" />}
        />
        <Item
            title="Notifications settings"
            Icon={<BellAlertIcon className="h-6 w-6" />}
        />
        <Link href="/about">
        <Item
            title="About Us"
            Icon={<InformationCircleIcon className="h-6 w-6" />}
        /></Link>
        <Link href="/" >
        <Item
            title="Logout"
            Icon={<ArrowRightStartOnRectangleIcon className="h-6 w-6" />}
        /></Link>
        <br/>
        <br/>
        <DangerZone >
            <div className="text-center text-red-500">
            
        <Item
            title="Delete Account"
            Icon={<TrashIcon className="h-6 w-6 text-red-500" />}
        />
        </div>
        </DangerZone>
        </Card>
        </div>
        <div>
        <SideBar userId={userId}/>
        </div>
        </div>
        </div>
    );
}