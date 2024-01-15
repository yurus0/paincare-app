import { Dialog, Transition } from "@headlessui/react";
import React, { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import TimePicker from 'react-time-picker';
import alarmService from "../services/AlarmService";
import AlarmsList from "./AlarmsList";

interface alarmState {
    title: string;
    url: string;
    bgimage: File | null;
}

const AddAlarm: React.FC = () => {
    const base_url = (process.env.NODE_ENV === 'development') ? "http://localhost:3030/api" :"";
    const add_alarm_url = `${base_url}/alarms/add`;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState('10:00');
    const [alarmId, setAlarmId] = React.useState(null);

    const update = (value : any) => {
        setSelectedDate(value);
    }

    function toggle() {
        setIsOpen(isOpen => !isOpen);
    }

    const [alarm, setalarm] = useState<alarmState>({
        title: '',
        url: '',
        bgimage: null,
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setalarm((prevalarm) => ({
            ...prevalarm,
            [name]: value,
        }));
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = (event.target.files as FileList)[0];
        setalarm((prevalarm) => ({
            ...prevalarm,
            bgimage: file,
        }));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // Add logic to save the alarm
        console.log(alarm);
        // Reset form fields
        setalarm({
            title: '',
            url: '',
            bgimage: null,
        });
        savealarm(alarm);
    };

    const savealarm = async (alarm: alarmState) => {
        try {
            alarmService.savealarm(alarm)
            .then(response => {
                console.log(response.data);
                setalarm(response.data);
            }
            )
            .catch(e => {
                console.log(e);
            });
        } catch (error) {
            console.log(error);
        }
    }
    const reset = (e:any) => {
        e.preventDefault();
        setalarm({
            title: '',
            url: '',
            bgimage: null,
        });
        setIsOpen(false);
    };

    return (
        <div>
        <div className="container mx-auto my-8">
        <div className="h-12">
        <button
            onClick={toggle}
            className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
            Add alarm
        </button>
        </div>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={toggle}>
            <div className="min-h-screen px-4 text-center">
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900">
                Add new alarm
                </Dialog.Title>
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" name="title" value={alarm.title} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Alarme set to :
                <TimePicker value={selectedDate} onChange={update}/>
            </label>
            <br />
            <div className="h-14 my-4 space-x-4 pt-4">
            <button type="submit"
                className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
                Save
            </button>
            <button
                onClick={reset}
                className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
                Close
            </button>
            </div>
        </form>
            </div>
        </Transition.Child>
        </div>
        </Dialog>
    </Transition>
    <AlarmsList
    alarm={alarm}
    />
    </div>
    );
};

export default AddAlarm;
