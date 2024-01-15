// pages/index.tsx
'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import Navbar from '../../../components/Navbar';
import SideBar from '../../../components/SideBar';

export default function Page() {
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const [userId, setUserId] = useState(1);

    //get userid from url
    useEffect(() => {
        const url = window.location.href;
        const id = url.substring(url.lastIndexOf('/') + 1);
        setUserId(parseInt(id));
        console.log(id);
    }, [userId]);

    const topics = [
        "Endometriosis Quiz",
        "Fertility Quiz",
        "Menstrual Cycle Quiz",
        "Intimate Health Quiz",
    ];

    const handleTopicSelection = (topic: string) => {
        setSelectedTopic(topic);
    };

    return (
        <div className='bg-white'>
        <Navbar islogged={true} />
        <div className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-t from-pink-50 p-16">
            <Card>
                <div className='py-14 px-40'>
            <div className='flex flex-row justify-center'>
                <h1 className="text-4xl font-bold text-center">
                Quiz
                </h1>
            </div>
            <div className='pt-10 justify-center items-center'>
                <p className='text-center pb-2'>Take a quiz to learn more about your health. Select a quiz topic:</p>
                <ul className='grid grid-rows-4 gap-4 place-items-stretch py-6'>
                {topics.map((topic, index) => (
                    <li
                        key={index}
                        onClick={() => handleTopicSelection(topic)}
                        className={`drop-shadow-md p-4 rounded-md hover:shadow-inner ${selectedTopic === topic ? 'bg-pink-400 text-white font-bold' : 'bg-white'}`}
                    >
                        {topic}
                    </li>
                ))}
                </ul>
                {selectedTopic && (
                    <div className='justify-center items-center text-center'>
                        <Link href={`quiz/${encodeURIComponent(selectedTopic.replace(/\s+/g, ''))}`} >
                            <Button message="Start Quiz"/>
                        </Link>
                    </div>
                )}
            </div>
            </div>
            </Card>
            </div>
            <div>
            <SideBar userId={userId}/>
            </div>
        </div>
    );
}
