import { ArrowRightStartOnRectangleIcon, BellIcon, CalendarDaysIcon, CogIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import React from 'react';

const SideBar = ({
    children, userId
}: {
    children?: React.ReactNode;
    userId?:any;
}) => {

    return (
        <div className="w-20 bg-white fixed top-0 right-0 h-full justify-center items-center p-4">
            <div className="pt-10 justify-center items-center">
            <div className="pb-10">
            <Link href={"/user/"+userId}>
                    <UserCircleIcon
                        className="h-10 w-10 right-0 justify-end font-bold"
                    />
                    </Link>
            </div>
            <div className="pb-10">
                <Link href={"/user/"+userId+"/calendar"}>
            <CalendarDaysIcon className="w-10 h-10" /></Link></div>
            <div className="pb-10">
                <Link href={"/user/"+userId+"/alarms"}>
            <BellIcon className="w-10 h-10" /></Link></div>
            <div className="pb-10">
                <Link href={"/user/"+userId+"/posts"}>
            <UserGroupIcon className="w-10 h-10" /></Link></div>

            <div className="pt-64">
                <Link href={"/user/"+userId+"/settings"}>
            <CogIcon className="w-10 h-10" /></Link></div>
            <div className="items-end pt-24 pl-2 text-red-500">
                <Link href="/">
            <ArrowRightStartOnRectangleIcon className="w-8 h-8" /></Link></div>
            {children}
            </div>
            </div>
    );
};

export default SideBar;
