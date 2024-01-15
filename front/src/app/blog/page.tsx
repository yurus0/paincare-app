'use client';
import { useState } from 'react';
import ArticlesList from '../components/ArticlesList';
import Navbar from '../components/Navbar';
import { motion } from "framer-motion";

export default function page() {

    const [article, setArticle] = useState({
    articleId: "",
    title: "",
    articleurl: "",
    imageurl: "",
    });

    return (
        <div>
            <Navbar islogged={false} />
        <div className="flex min-h-screen flex-col justify-between p-16 bg-white bg-gradient-to-t from-pink-50 px-24 py-20">
            
        <div className="flex flex-col">
            <div className='flex flex-row justify-between'>
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
            <h1 className="text-4xl font-bold text-left">
                Blog
            </h1>
            </motion.div>
            </div>
            <div className='pt-10'>
            <ArticlesList article={article} /></div>
        </div>
        </div>
    </div>
    )
}
