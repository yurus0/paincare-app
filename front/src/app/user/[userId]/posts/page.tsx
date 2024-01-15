'use client';
import React, { useState } from 'react';
import AddPost from '../../../components/AddPost';
import Navbar from '../../../components/Navbar';
import PostsList from '../../../components/PostsList';
import SideBar from '../../../components/SideBar';

export default function page() {

    const [userId, setUserId]=useState(1);

    const [post, setPost] = useState({
        postId: "",
        title: "",
        url: "",
        bgimage: "",
    });
    return (
        <div>
            <Navbar islogged={true} />
        <div className="flex min-h-screen w-full bg-white bg-gradient-to-t from-pink-50 p-24">
            <div className='flex flex-col'>
        <div className="flex flex-row justify-between">
                <h1 className="text-4xl font-bold text-left">
                Community
                </h1>
                <div className='justify-end'>
                <AddPost /></div>
            </div>
            <div className='pt-10'>
            <PostsList post={post} />
            </div>
            </div>
        

        <div>
        <SideBar userId={userId}/>
            </div>
        </div>
        </div>

    );
}