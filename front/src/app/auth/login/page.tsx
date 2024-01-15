'use client';
import Spline from '@splinetool/react-spline';
import Link from "next/link";
import { default as React, useEffect, useState } from 'react';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import Navbar from '../../components/Navbar';
import UserService from '../../services/UserService';

export default function page() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [v, setV] = useState(false);
    const [userId, setUserId] = useState(1);


    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    useEffect(() => {
        //get user Id
        console.log("logged 2");
        console.log(v);
        console.log("userId");
        console.log(userId);
    }, [userId]);

    useEffect(() => {
        if (v) {
            console.log("logged 1");
            console.log(v);
            setLoading(false);
            //get the user from service
            const fetchData = async () => {
                setLoading(true);
                console.log("fetching");
                try {
                    const res = await UserService.getUserId(email, password);
                    console.log(res);
                    const userIddata = res.data;
                    console.log("2 nd of fetching");
                    console.log(userIddata);
                    console.log(typeof userIddata);
                    console.log("3 rd of fetching");
                    setUserId(userIddata);
                    console.log(userId);
                    console.log("end of fetching");
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            }
            fetchData();
            console.log("userId");
            console.log(userId);
            window.location.href = `/user/${userId}`;
        }
    }, [v, userId]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        window.location.href = `/user/${userId}`;
        try {
            setV(true);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen min-w-screen bg-white bg-gradient-to-t from-pink-50">
            <div className="flex flex-col absolute scale-80 top-0 left-3">
        <Spline scene="https://prod.spline.design/kjRkvsu18xkfylrL/scene.splinecode" />
        {/*<Spline scene="https://prod.spline.design/kjRkvsu18xkfylrL/scene.splinecode" />*/}
        </div>
        <Navbar islogged={false}/>
        <Modal>
        <div className='pb-3'>
            <div className='flex flex-col pb-10'>
                <h1 className="text-xl font-bold text-center">Log in</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit}>
                    <div className='p-1'>
                        <Input
                            label="Email"
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className='p-1'>
                        <Input
                            label="Password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <br />
                    <div className='flex flex-col items-center justify-center pt-1 font-bold'>
                        <button className='w-96 py-3 rounded-lg hover:shadow-inner' type="submit" disabled={loading}>
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <br/>
        <div className='flex flex-col items-center justify-center'>
        <p className='text-xs text-center'>You don't have an account ? <Link href="/register" className='hover:text-pink-500'><u>Create an account here</u></Link></p>
        </div>
        </Modal>
        </div>
    );
};


