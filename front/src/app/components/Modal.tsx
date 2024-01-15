import React from 'react';

const Modal = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="hidden lg:flex lg:w-1/2 lg:ml-auto items-center justify-center">
        <div className="w-full max-w-md p-10 bg-white rounded-lg drop-shadow-[3px_1px_8px_rgba(0,0,0,0.08)] relative">
            {children}
        </div>
        </div>
    );
};

export default Modal;
