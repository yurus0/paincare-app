import React from 'react';
import CommentsList from './CommentsList';

const PostView = ({ post }: { post: any }) => {

    const [comment, setComment] = React.useState({
        commentId: "",
        content: "",
        username: "",
        userImg: "",
        createdAt: "",
        updatedAt: "",
        postId: "",
        userId: ""
    }); // Define the type of comments as an array of CommentData objects
    const [loading, setLoading] = React.useState(true);

    
    return (
        <div>
        <div className="flex min-h-screen flex-col justify-between p-6">
        <div className="flex flex-col">
            <div className='flex flex-col justify-start'>
            <h1 className="text-4xl font-bold text-left">
                {post.title}
            </h1>
            <div>{<img src={post.imgUrl} alt={post.title} className='rounded-lg pb-6 pt-10'/>}</div>
            <div className='pt-10'>
            <p className='whitespace-pre-line'>{post.content}</p>
            </div>
            </div>
            <CommentsList comment={comment} />
        </div>
        </div>
    </div>
    
    );
};
export default PostView;