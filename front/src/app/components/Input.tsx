import React from 'react';

const Input = ({
    type,
    label,
    value,
    id,
    onChange,
    required
}:{
    type: any;
    label: any;
    value: any;
    id: any;
    onChange?: any;
    required?: any;
}) => {
    return (
        <div className='p-2'>
            <label className='p-2' htmlFor={label}>{label}{required?" *": ""}</label><br />
            <div className='p-2'>
                <input
                    className='border border-gray-100 hover:shadow-inner rounded-lg p-2 w-96'
                    type={type}
                    id={id}
                    value={value}
                    onChange={onChange}
                    required={false}
                />
            </div>
        </div>
    );
};
export default Input;