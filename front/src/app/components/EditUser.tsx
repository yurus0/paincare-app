//Edit email and username
'use client';
import { UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect } from 'react';
import UserService from '../services/UserService';
import Card from './Card';
import Input from './Input';

const EditUser = () => {
    
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [birthdate, setBirthdate] = React.useState('');
    const [profilePicUrl, setProfilePicUrl]= React.useState('');
    const [userId, setUserId] = React.useState('');
    const [user, setUser] = React.useState({
        userId: '',
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        profilePicUrl: ''
    });
    
    //get user ID from url
    /*const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);
    setUserId(id);*/

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleBirthdateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBirthdate(event.target.value);
    };

    useEffect(() => {
        const url = window.location.href;
        //url is like /user/1/settings
        //get the id from the url
        const parts = url.split('/');
        const id = parts[4];
        console.log("id");
        console.log(id);
        setUserId(id);
        const getUser = async (userId:any) => {
            const response = await UserService.getUser(userId);
            const user = response.data;
            console.log(user);
            setUsername(user.username);
            setUser(user);
        };
        getUser(id);
        console.log("username");
        console.log(username);

    }
    , [userId, user]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Perform login logic here
        const user = {

            username,
            email,
            birthdate,
        };
        console.log(user);
        //save user
        UserService.updateUser(user, userId).then((res) => {
            console.log(res);
        });
        //redirect to dashboard
        window.location.href = `/user/${userId}`;
    };



    return (
        <div className="flex flex-col min-h-screen items-center justify-center min-w-screen">
            <div className="items-center justify-center">
            <Card>
            <div className="py-3 font-bold text-center">
                <h1>Edit Profile</h1>
            </div>
            <div className="flex flex-row items-center absolute top-3 right-3">
            <button
                className=" text-gray-400 hover:text-gray-700 cursor-pointer"
                >
                <XMarkIcon className="h-4 w-4" />
            </button>
            </div>
            <div className="py-3">
            <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit}>
            <div className="flex items-center justify-center pt-2">
                {user.profilePicUrl === null? (

                    <UserCircleIcon
                    className="h-20 w-20 text-lg font-bold text-center"
                />):(
                    <img className="h-20 w-20 rounded-full" src={user.profilePicUrl} alt="profile picture" />
                )
                }
                
            </div>
                <div className='p-0'>
                    <Input
                        label="Username"
                        type="text"
                        id="username"
                        value={user.username}
                        onChange={handleUsernameChange}
                    />
                    </div>
                <div className='p-0'>
                    <Input
                        label="Email"
                        type="email"
                        id="email"
                        value={user.email}
                        onChange={handleEmailChange}
                    />
                    </div>
                <div className='p-0'>
                    <Input
                        label="Birth date"
                        type="date"
                        id="birthdate"
                        value={null}
                        onChange={handleBirthdateChange}
                    />
                    </div>
                <br />
                <div className='flex flex-col items-center justify-center pt-1 font-bold'>
                <button className='w-96 py-3 rounded-lg hover:shadow-inner' type="submit">Save changes</button>
                </div>
            </form>
            </div>
            </Card>
            </div>
        </div>
    );
};
export default EditUser;