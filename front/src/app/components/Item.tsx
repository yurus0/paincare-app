'use client';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

const Item = ({
    Icon,
    title
    }:{
        Icon?: React.ReactElement;
        title: string;
}) => {
    return (
        <div className='p-2 relative'>
        <div className="flex items-center justify-between hover:shadow-inner rounded-md p-3 w-128 relative">
            <div className="flex items-center justify-left px-2">
                {Icon}
                <h1 className='pl-4'>{title}</h1>
            </div>
            <div className="flex items-center right-0 pl-48 justify-end">
                <ChevronRightIcon
                    className="h-6 w-6"
                />
            </div>
        </div>
        </div>
    );
};

export default Item;