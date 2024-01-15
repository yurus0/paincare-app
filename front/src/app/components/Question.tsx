// components/Question.tsx
import React from 'react';

const Question = ({ question, options, onSelect }:{
    question: string;
    options: string[];
    onSelect: (selectedOption: string) => void;
}) => {

    const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

    return (
        <div>
        <h3 className='text-center pb-2'>{question}</h3>
        <ul className='grid grid-rows-4 gap-4 place-items-stretch py-6'>
            {options.map((option, index) => (
            <li key={index} onClick={() => onSelect(option)} className={`drop-shadow-md p-4 rounded-md hover:shadow-inner ${selectedOption === option ? 'bg-pink-400 text-white font-bold' : 'bg-white'}`}>
                    {option}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default Question;
