'use client';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from './Card';

const CalendarItem = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate:any) => {
        setDate(newDate);
    };

    return (
        <div>
        <Card>
        <div className='flex flex-col p-2'>
        <div className="text-lg font-bold text-left pb-4">Calendar</div>
        <div className="p-4">
        <Calendar onChange={onChange} value={date} className="rounded-md py-2 border-gray-50 shadow-md"/>
        </div>
        <div className="pt-2">
        <p>Selected date: <span className='text-pink-500 py-1 px-3 border rounded-lg'>{date.toDateString()}</span></p></div>
        </div>
        </Card>
        </div>
    );
};

export default CalendarItem;
