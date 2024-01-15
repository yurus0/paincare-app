import React from "react";

const MiniCard = ({ title, description, children , backgroundColor}:{
    title: string;
    description: string;
    children: React.ReactNode;
    backgroundColor: string;
}) => {
    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-lg p-10" >
        <div className="flex flex-row items-center justify-center">
            {children}
        </div>
        <div className="text-lg font-bold text-left py-2">{title}</div>
        <div className="text-md text-left py-2">{description}</div>
        </div>
    );
};
export default MiniCard;

