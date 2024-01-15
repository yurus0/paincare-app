import React, { useEffect } from "react";
import SimpleDateTime from 'react-simple-timestamp-to-date';
import UserService from "../services/UserService";

const Comment = ({ comment }: { comment: any }) => {

    const [user, setUser] = React.useState({
        userId: "",
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        profilePicUrl: "",
    });
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const res= await UserService.getUser(comment.user);
                console.log(res);
                console.log("end of fetching user");
                const user = res.data;
                console.log(user);
                setUser(user);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return(
        <div>
        <div className="flex items-center justify-between bg-white rounded-md p-2">
            <div className="flex items-center pr-20 pt-4 justify-start">
            {user.profilePicUrl != null && user.profilePicUrl !="" ? (
            <img
                src={user.profilePicUrl}
                alt={user.username}
                className="h-14 w-14 rounded-lg"
            />
            ) : (
            <img src='/bg.png' alt="user"  className="h-14 w-14 rounded-lg" />)}
            </div>
            <div className="flex flex-col">
            <p className="text-sm">{user.username}</p>
            <p className="p-1 text-lg whitespace-pre-line">{comment.content}</p>
            <p className="pt-1 text-xs"><SimpleDateTime dateFormat="DMY" dateSeparator="/"  timeSeparator=":">{comment.dateCreated}</SimpleDateTime></p>
            </div>
            </div>
        </div>
    );

};
export default Comment;
