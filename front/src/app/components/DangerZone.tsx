import React from 'react';

const DangerZone = ({
    children
}:{
    children: React.ReactNode;
}
) => {
    
    return (
        <div className=" px-6 border rounded-lg border-red-500">
            <div className="py-3 font-bold text-red-500">
                <p>Danger Zone</p>
            </div>
            <div className="py-3">
            {children}
            </div>
        </div>
    );
};
export default DangerZone;