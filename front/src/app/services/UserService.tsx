import axios from "axios";

const base_url = (process.env.NODE_ENV === 'development') ? "http://localhost:3030/api" :"";
const users_url = `${base_url}/users`;

class UserService {
    async saveUser(user : any) {
        return await axios.post(users_url, user);
    }

    async getUsers() {
        return await axios.get(users_url);
    }

    async getUser(userId : any) {
        return await axios.get(users_url + "/" + userId);
    }

    async checkUser(userEmail : any, userPassword : any) {
        return await axios.get(users_url + "/check/" + userEmail + "+" + userPassword);
    }

    async getUserId(userEmail : any, userPassword : any) {
        return await axios.get(users_url + "/get/" + userEmail + "+" + userPassword);
    }

    async deleteUser(userId : any) {
        return await axios.delete(users_url + "/" + userId);
    }

    async updateUser(user : any, userId : any) {
        return await axios.put(users_url + "/" + userId, user);
    }
}

export default new UserService();