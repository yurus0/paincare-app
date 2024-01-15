//ArticlesList.tsx
import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import ArticleService from '../services/ArticleService';
import Article from './Article';

const ArticlesList= ({ article }:{ article:any; }) => {

    const [articles, setArticles] = React.useState<any[]>(); // Define the type of articles as an array of ArticleData objects
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [articleId, setArticleId] = React.useState(null);
    const [response, setResponse] = React.useState(null);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            console.log("fetching");
            try {
                const res = await ArticleService.getArticles();
                console.log(res);
                console.log("end of fetching");
                setArticles(res.data);
                console.log("2 nd of fetching");
                console.log(articles);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [article]);

    return (
        <div className="p-3 flex flex-row items-center justify-center">
        <div className="flex ">
            { !loading && (
                <div className='p-2 flex-row'>
                {articles?.map((article: any) => (
                    <motion.div
                    className="card-container"
                    initial={{y:100, opacity:0}}
                    whileInView={{
                        y: 0,
                        opacity:100,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 1.5
                        }}}
                    viewport={{ once: true, amount: 1 }}
                    >
                    <Article
                    key={article.articleId}
                    article={article}
                    />
                    </motion.div>
                ))}
                </div>
)}
        </div>
        </div>
    );
};

export default ArticlesList;