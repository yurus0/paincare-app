import axios from "axios";

const base_url = (process.env.NODE_ENV === 'development') ? "http://localhost:3030/api" :"";
const painevolutions_url = `${base_url}/painevolutions`;

class PainEvolutionService {
    async savePainEvolution(painevolution : any) {
        return await axios.post(painevolutions_url + "/add", painevolution);
    }

    async getPainEvolutions() {
        return await axios.get(painevolutions_url);
    }

    async deletePainEvolution(painevolutionId : any) {
        return await axios.delete(painevolutions_url + "/" + painevolutionId);
    }

    async getPainEvolutionById(painevolutionId : any) {
        return await axios.get(painevolutions_url + "/" + painevolutionId);
    }

    async updatePainEvolution(painevolution : any, painevolutionId : any) {
        return await axios.put(painevolutions_url + "/" + painevolutionId, painevolution);
    }
}
export default new PainEvolutionService();

