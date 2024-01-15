import axios from "axios";

const base_url = (process.env.NODE_ENV === 'development') ? "http://localhost:3030/api" :"";
const posts_url = `${base_url}/posts`;

class PostService {
    async savePost(post : any) {
        return await axios.post(posts_url + "/add", post);
    }

    async getPosts() {
        return await axios.get(posts_url);
    }

    async deletePost(postId : any) {
        return await axios.delete(posts_url + "/" + postId);
    }

    async getPostById(postId : any) {
        return await axios.get(posts_url + "/" + postId);
    }

    async updatePost(post : any, postId : any) {
        return await axios.put(posts_url + "/" + postId, post);
    }
}

export default new PostService();