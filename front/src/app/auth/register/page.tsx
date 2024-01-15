'use client';
import Spline from '@splinetool/react-spline';
import Link from "next/link";
import React from 'react';
import Modal from '../../components/Modal';
import Navbar from '../../components/Navbar';
import Register from '../../components/Register';

export default function page() {

    return (
        <div className="pt-24 flex min-h-screen w-full bg-white bg-gradient-to-t from-pink-50">
            <div className="flex flex-col absolute scale-80 top-0 left-3">
    <Spline scene="https://prod.spline.design/kjRkvsu18xkfylrL/scene.splinecode" />
    {/*<Spline scene="https://prod.spline.design/kjRkvsu18xkfylrL/scene.splinecode" />*/}
    </div>
    <Navbar isregister={true}/>
        <Modal>
            <Register />
            <br/>
            <div className='flex flex-col items-center justify-center'>
            <p className='text-xs text-center'>You already have an account ? <Link href="/login" className='hover:text-pink-500'><u>Log in here</u></Link></p>
            </div>
        </Modal>
        </div>
    );
}

