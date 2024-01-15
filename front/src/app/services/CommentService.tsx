import axios from "axios";

const base_url = (process.env.NODE_ENV === 'development') ? "http://localhost:3030/api" :"";
const comments_url = `${base_url}/comments`;

class CommentService {
  async saveComment(comment : any) {
    return await axios.post(comments_url + "/add", comment);
  }

  async getComments() {
    return await axios.get(comments_url);
  }

  async deleteComment(commentId : any) {
    return await axios.delete(comments_url + "/" + commentId);
  }

  async getCommentById(commentId : any) {
    return await axios.get(comments_url + "/" + commentId);
  }

  async updateComment(comment : any, commentId : any) {
    return await axios.put(comments_url + "/" + commentId, comment);
  }
}

export default new CommentService();