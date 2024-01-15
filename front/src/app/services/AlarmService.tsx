import axios from "axios";

const base_url = (process.env.NODE_ENV === 'development') ? "http://localhost:3030/api" :"";
const alarms_url = `${base_url}/alarms`;

class AlarmService {
    async savealarm(alarm : any) {
        return await axios.post(alarms_url + "/add", alarm);
    }

    async getalarms() {
        return await axios.get(alarms_url);
    }

    async deletealarm(alarmId : any) {
        return await axios.delete(alarms_url + "/" + alarmId);
    }

    async getalarmById(alarmId : any) {
        return await axios.get(alarms_url + "/" + alarmId);
    }

    async updatealarm(alarm : any, alarmId : any) {
        return await axios.put(alarms_url + "/" + alarmId, alarm);
    }
}

export default new AlarmService();