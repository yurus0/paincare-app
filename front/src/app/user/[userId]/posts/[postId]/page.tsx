'use client';
import React, { useEffect, useState } from 'react';
import Card from '../../../../components/Card';
import Navbar from '../../../../components/Navbar';
import PostView from '../../../../components/PostView';
import SideBar from '../../../../components/SideBar';
import PostService from '../../../../services/PostService';

export default function page() {
    const [post, setPost] = useState({
            postId: "",
            title: "",
            url: "",
            bgimage: "",
        }
    );
    const [loading, setLoading] = useState(true);
    const [postId, setPostId] = useState(null);
    const [userId, setUserId] = useState(1);
    
    //get the post id from the url
    useEffect(() => {
        //set post content
    }, [post]);
    
    //fetch the post from the database
    useEffect(() => {
        const fetchData = async () => {
            console.log("fetching");
            try {
                const url =window.location.href;
                const postIdUrl = url.split("/")[url.split("/").length - 1];
                console.log("postIdUrl");
                console.log(postIdUrl);
                const res = await PostService.getPostById(postIdUrl);
                const data = res.data;
                console.log(res);
                console.log("end of fetching");
                console.log(data);
                console.log("2 nd of fetching");
                setPost(res.data);
                console.log("post");
                console.log(post);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchData();
    }
    , [post]);
    
    return (
        <div>
            <Navbar islogged={true} />
        <div className='bg-white bg-gradient-to-t from-pink-50 p-24'>
        <div className="flex min-h-screen flex-col justify-between">
            <div className='flex flex-row justify-between py-3 px-10'>
                <h1 className="text-4xl font-bold text-left">
                    Community
                </h1>
                </div>
                <div className='py-2 pl-2 pr-4'>
            <Card>
                <div className="flex flex-col p-6">
                    <div className='flex flex-col justify-center'>
                    <PostView post={post}/>
                    </div>
                </div>
                </Card>
                </div>
            </div>
            </div>
            <div>
            <SideBar userId={userId}/>
            </div>
            </div>
    );
}