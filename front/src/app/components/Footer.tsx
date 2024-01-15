import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className='bg-white'>
            <div className='flex flex-row items-center justify-center bg-gradient-to-b from-pink-50 '>
            <Image src="/logo-name.svg" className="w-20 h-10" width="20" height="10" alt="PainCare"/>
            <div className='px-1 pb-1 flex flex-row'>
            <p className='text-xs pl-1'> © </p>
            <p className='text-xs pl-2'>2024 - All rights reserved</p>
            </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
