import axios from "axios";

const base_url = (process.env.NODE_ENV === 'development') ? "http://localhost:3030/api" :"";
const articles_url = `${base_url}/articles`;

class ArticleService {
    async saveArticle(article : any) {
        return await axios.post(articles_url + "/add", article);
    }

    async getArticles() {
        return await axios.get(articles_url);
    }

    async deleteArticle(articleId : any) {
        return await axios.delete(articles_url + "/" + articleId);
    }

    async getArticleById(articleId : any) {
        return await axios.get(articles_url + "/" + articleId);
    }

    async updateArticle(article : any, articleId : any) {
        return await axios.put(articles_url + "/" + articleId, article);
    }
}

export default new ArticleService();