import React from 'react';

const Card = ({
    children, 
    hover
}:{
    children: React.ReactNode;
    hover?: string;
}) => {
    return (
        <div className="flex justify-center items-center relative">
        <div className={`drop-shadow-[1px_6px_15px_rgba(0,0,0,0.16)] py-6 px-12 mb-6 bg-white rounded-[15px] justify-center items-center ${hover ? `hover:${hover}` : ""}`}>
        {children}
        </div>
        </div>
    );
};
export default Card;