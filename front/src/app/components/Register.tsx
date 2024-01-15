'use client';
import React, { useState } from 'react';
import UserService from '../services/UserService';
import Input from './Input';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        setValue: React.Dispatch<React.SetStateAction<string>>
    ) => {
        setValue(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const user = {
            email,
            password,
            username,
            firstName,
            lastName,
        };

        try {
            const response = await UserService.saveUser(user).then((res) => {
                console.log(res);
            });
            console.log(response);

            setEmail('');
            setPassword('');
            setUsername('');
            setFirstName('');
            setLastName('');
            window.location.href = '/login';
        } catch (error) {
            console.error('Error saving user:', error);
        }
    };

    return (
        <div className='py-3'>
            <div className='flex flex-col pb-10'>
                <h1 className="text-xl font-bold text-center">Register</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit}>
                    <Input
                        label="Username"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e:any) => handleInputChange(e, setUsername)}
                        required
                    />
                    <Input
                        label="Email"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e:any) => handleInputChange(e, setEmail)}
                        required
                    />
                    <Input
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e:any) => handleInputChange(e, setPassword)}
                        required
                    />
                    <Input
                        label="First Name"
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e:any) => handleInputChange(e, setFirstName)}
                    />
                    <Input
                        label="Last Name"
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e:any) => handleInputChange(e, setLastName)}
                    />
                    <br />
                    <div className='flex flex-col items-center justify-center pt-1 font-bold'>
                        <button className='w-96 py-3 rounded-lg hover:shadow-inner' type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
