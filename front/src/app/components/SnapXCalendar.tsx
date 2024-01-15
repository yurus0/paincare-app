import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SnapXCalendar = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate:any) => {
        setDate(newDate);
    };

    return (
        <div className="flex items-center justify-center h-screen overflow-x-scroll snap-x">
        <div className="flex flex-nowrap snap-x-mandatory">
            {/* Render multiple calendars for each day */}
            {([...Array(30).keys()] as number[]).map((index) => (
            <div key={index} className="mx-4">
                <Calendar onChange={handleDateChange} value={date} />
            </div>
            ))}
        </div>
        </div>
    );
};

export default SnapXCalendar;
