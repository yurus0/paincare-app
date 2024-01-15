// components/Quiz.tsx
'use client';
// components/Quiz.tsx
import React, { useState } from 'react';
import Question from './Question';

const Quiz: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const questions: { question: string; options: string[]; correctAnswer: string }[] = [
        {
            question: 'What is a key aspect of maintaining intimate health?',
            options: ['Regular exercise', 'Proper hygiene', 'High caffeine intake', 'Irregular sleep'],
            correctAnswer: 'Proper hygiene',
        },
        {
            question: 'What can contribute to intimate discomfort?',
            options: ['Wearing loose-fitting clothes', 'Frequent bathing', 'Hydrating well', 'Using mild soaps'],
            correctAnswer: 'Wearing loose-fitting clothes',
        },
        {
            question: 'How can one promote intimate health?',
            options: ['Avoiding regular check-ups', 'Using harsh soaps', 'Wearing tight clothing', 'Practicing safe sex'],
            correctAnswer: 'Practicing safe sex',
        },
    ];
    

    const handleAnswer = (selectedOption: string) => {
        const currentAnswer = questions[currentQuestion]?.correctAnswer;
        if (selectedOption === currentAnswer) {
        setScore(score + 1);
        }

        // Move to the next question if available
        if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        }
        else {
            setQuizCompleted(true);
        }
    };

    // Check if all questions have been answered
    

    return (
        <div className='flex flex-col'>
        {quizCompleted ? (
            // Render final score if quiz is completed
            <div className='items-center justify-center'>
            <h2 className='text-center pb-2'>Quiz Completed</h2>
            <div className='pt-4'>
            <div className='border-2 border-pink-500 rounded-md'>
            <p className='justify-end items-end text-center p-4 '><b>Final Score:</b> {score}</p>
            </div>
            </div>
            </div>
        ) : (
            // Render current question if quiz is not completed
            <div>
            <Question
                question={questions[currentQuestion].question}
                options={questions[currentQuestion].options}
                onSelect={handleAnswer}
            />
            <div className='pt-4'>
            <div className='border-2 border-pink-500 rounded-md'>
            <p className='justify-end items-end text-center p-4 '><b>Score:</b> {score}</p>
            </div>
            </div>
            </div>
        )}
        </div>
    );
};

export default Quiz;
