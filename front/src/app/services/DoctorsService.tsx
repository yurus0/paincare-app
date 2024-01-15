import axios from "axios";

const base_url = (process.env.NODE_ENV === 'development') ? "http://localhost:3030/api" :"";
const Doctors_url = `${base_url}/doctors`;

class DoctorService {
    async saveDoctor(Doctor : any) {
        return await axios.post(Doctors_url + "/add", Doctor);
    }

    async getDoctors() {
        return await axios.get(Doctors_url);
    }

    async deleteDoctor(DoctorId : any) {
        return await axios.delete(Doctors_url + "/" + DoctorId);
    }

    async getDoctorById(DoctorId : any) {
        return await axios.get(Doctors_url + "/" + DoctorId);
    }

    async updateDoctor(Doctor : any, DoctorId : any) {
        return await axios.put(Doctors_url + "/" + DoctorId, Doctor);
    }
}

export default new DoctorService();