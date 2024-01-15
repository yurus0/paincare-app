import React, { useEffect } from "react";
import CommentService from "../services/CommentService";
import Comment from "./Comment";


const CommentsList = ({comment}:{
    comment: any
}) => {
    const [comments, setComments] = React.useState<any[]>(); // Define the type of comments as an array of CommentData objects
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const res= await CommentService.getComments();
                console.log(res);
                console.log("end of fetching comments");
                const comments = res.data;
                console.log(comments);
                setComments(comments);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }
    , []);

    return (
        <div className="pt-6">
        <div className="p-3 flex flex-row items-center grid grid-flow-col">
        <div className="flex ">
            { !loading && (
                <div>
                <h1 className="text-xl font-bold pb-4">Comments</h1>
                <div className='flex-row pl-1'>
                {comments?.map((comment: any) => (
                    <div className="flex flex-row">
                        <Comment key={comment.commentId} comment={comment} />
                    </div>
                ))}
                </div>
                </div>
            )}
        </div>
        </div>
        </div>
    );
};
export default CommentsList;