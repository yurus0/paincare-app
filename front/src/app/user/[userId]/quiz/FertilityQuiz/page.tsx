'use client';
import React, { useState } from 'react';
import FertilityQuiz from '../../../../components/FertilityQuiz';
import Navbar from '../../../../components/Navbar';
import SideBar from '../../../../components/SideBar';
import Card from '../../../../components/Card';


export default function page(){
    
    const [userId, setUserId]=useState(1);

    return (
        <div className='bg-white'>
        <Navbar islogged={true} />
        <div className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-t from-pink-50 p-16">
            <Card>
            <div className='py-14 px-40'>
            <div className='flex flex-row justify-center'>
                <h1 className="text-4xl font-bold text-center">
                Fertility Quiz
            </h1>
            </div>
            <div className='pt-10 justify-center items-center'>
                <FertilityQuiz />
            </div>
        </div>
        </Card>
        <div>
        <SideBar userId={userId}/>
        </div>
        </div>
        </div>
    );
};
