'use client';
import React, { useState } from 'react';
import Navbar from '../../../../components/Navbar';
import PainEvolutionForm from '../../../../components/PainEvolutionForm';
import SideBar from '../../../../components/SideBar';
export default function page(){
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
    return(
        <div>
            <Navbar islogged={true} />
            <div className="flex min-h-screen flex-col justify-between p-16 bg-white">
            
        <div className="flex flex-col">
            <div className='flex flex-row justify-between'>
            <h1 className="text-4xl font-bold text-left">
                Pain Evolution
            </h1>
            </div>
            <div className='pt-10'>
            <PainEvolutionForm/></div>
        </div>
        <div>
        <SideBar userId={userId} />
        </div>
        </div>
        </div>
    );
}