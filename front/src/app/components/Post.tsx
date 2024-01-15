import Card from './Card';
import React from 'react';

const Post = ({ post }: { post: any }) => {
    return (
        <div className='flex px-4'>
        <Card key={post.index}>

            <div className='text-left break-normal max-w-60'>
                <div className='pb-6'>
                {<img src={post.imgUrl} alt={post.title} className='rounded-lg h-40'/>}
                </div>
                <div className='items-bottom'>
                <p className='font-bold text-lg'>{post.title}</p>
                <p className='text-sm'>{post.author}</p>
                <p className='text-sm bg-gradient-to-b from-black text-transparent bg-clip-text break-normal whitespace-pre-line'>{post.content.substring(0, 100)}</p>
                </div>
            </div>
        </Card>
        </div>
    );
}
export default Post;
