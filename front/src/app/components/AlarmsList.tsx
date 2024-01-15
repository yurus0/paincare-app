//alarmsList.tsx
import React, { useEffect } from 'react';
import AlarmService from '../services/AlarmService';
import Alarm from './Alarm';

const AlarmsList= ({ alarm }:{alarm : any;}) => {

    const [alarms, setalarms] = React.useState<any[]>();
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [alarmId, setAlarmId] = React.useState(null);
    const [response, setResponse] = React.useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            console.log("fetching");
            try {
                const res = await AlarmService.getalarms();
                const alarms = await res.data;
                console.log("json");
                console.log(alarms);
                console.log("end json");
                setalarms(alarms);
                setLoading(false);
                
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [alarm]);

    return (
        <div className="container mx-auto my-8">
        <div className="flex shadow border-b">
            {!loading && (
                alarms?.map((alarm) => (

                    <Alarm alarm={alarm} />
                )))}
        </div>
        </div>
    );
};

export default AlarmsList;