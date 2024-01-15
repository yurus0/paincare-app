'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import PostService from '../services/PostService';
import Post from './Post';

const PostsList = ( { post }:{ post:any; }) => {

    const [posts, setPosts] = useState<any[]>();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            console.log("fetching");
            try {
                const res = await PostService.getPosts();
                console.log(res);
                console.log("end of fetching");
                setPosts(res.data);
                console.log("2 nd of fetching");
                console.log(posts);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    
    return (
        <div className="flex flex-row items-stretch justify-center">
            { !loading && (
                <div className='p-2 flex items-stretch'>
                {posts?.map((post: any) => (
                    <Link href={`/posts/${post.postId}`}>
                    <Post
                    key={post.postId}
                    post={post}
                    />
                    </Link>
                ))}
                </div>
    )}
        </div>
    );
}
export default PostsList;