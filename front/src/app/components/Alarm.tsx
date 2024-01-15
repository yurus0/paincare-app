import React from "react";

const Alarm = ({ alarm } : { alarm : any }) => {

  return (
    <tr key={alarm.alarmId}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{alarm.title}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{alarm.url}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{alarm.bgimage}</div>
      </td>
      </tr>
  );
};

export default Alarm;
