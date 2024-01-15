'use client';
import React, { useState } from 'react';
import ArticlesList from '../../../components/ArticlesList';
import Navbar from '../../../components/Navbar';
import SideBar from '../../../components/SideBar';

export default function page() {

    const [article, setArticle] = useState({
    articleId: "",
    title: "",
    articleurl: "",
    imageurl: "",
    });

    //get userId from url

    const [userId, setUserId]=useState(1);

    return (
        <div>
            <Navbar islogged={true} />
        <div className="flex min-h-screen flex-col justify-between p-16 bg-white bg-gradient-to-t from-pink-50 px-24 py-20">
            
        <div className="flex flex-col">
            <div className='flex flex-row justify-between'>
            <h1 className="text-4xl font-bold text-left">
                Endo Information
            </h1>
            </div>
            <div className='pt-10'>
            <ArticlesList article={article} /></div>
        </div>
        </div>
        <div>
        <SideBar userId={userId} /></div>
    </div>
    )
}
