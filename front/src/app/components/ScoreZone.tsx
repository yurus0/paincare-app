import React from 'react';

const ScoreZone = ({
    children
}:{
    children: React.ReactNode;
}
) => {
    
    return (
        <div className=" px-6 border rounded-lg border-pink-500">
            {children}
        </div>
    );
};
export default ScoreZone;