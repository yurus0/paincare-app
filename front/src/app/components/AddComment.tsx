import React, { useState } from 'react';


//add comment component, comment has an id, a content, a date, a post id and a user id

const AddComment = () => {
    const [content, setContent] = useState('');
    const [postId, setPostId] = useState('');
    const [userId, setUserId] = useState('');

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!content) {
            alert('Please add a comment');
            return;
        }
        else{
            alert('Comment added!');
            const comment = {
                content,
                postId,
                userId,
            };
        }
        setContent('');
    };

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <input
                    type='text'
                    placeholder='Add Comment'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>

            <input type='submit' value='Save Comment' className='btn btn-block' />
        </form>
    );
};