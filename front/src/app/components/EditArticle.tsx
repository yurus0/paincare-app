import { Dialog, Transition } from "@headlessui/react";
import React, { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import ArticleService from "../services/ArticleService";

interface ArticleState {
    articleId: string;
    title: string;
    url: string;
    bgimage: File | null;
}

const EditArticle: React.FC = () => {
    const base_url = (process.env.NODE_ENV === 'development') ? "http://localhost:3030/api" :"";
    //edit article
    //get article ID from url
    const url = window.location.pathname;
    const articleId = url.substring(url.lastIndexOf('/') + 1);
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(isOpen => !isOpen);
    }

    const [article, setArticle] = useState<ArticleState>({
        articleId: articleId,
        title: '',
        url: '',
        bgimage: null,
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setArticle((prevArticle) => ({
            ...prevArticle,
            [name]: value,
        }));
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = (event.target.files as FileList)[0];
        setArticle((prevArticle) => ({
            ...prevArticle,
            bgimage: file,
        }));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // Edit logic to save the article
        console.log(article);
        // Reset form fields
        setArticle({
            articleId: articleId,
            title: '',
            url: '',
            bgimage: null,
        });
        saveArticle(article);
    };

    const saveArticle = async (article: ArticleState) => {
        try {
            ArticleService.saveArticle(article)
            .then(response => {
                console.log(response.data);
                setArticle(response.data);
            }
            )
            .catch(e => {
                console.log(e);
            });
        } catch (error) {
            console.log(error);
        }
    }
    const reset = (e:any) => {
        e.preventDefault();
        setArticle({
            articleId: articleId,
            title: '',
            url: '',
            bgimage: null,
        });
        setIsOpen(false);
    };

    return (
        <div>
        <div className="container mx-auto my-8">
        <div className="h-12">
        <button
            onClick={toggle}
            className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
            Edit Article
        </button>
        </div>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={toggle}>
            <div className="min-h-screen px-4 text-center">
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900">
                Edit new Article
                </Dialog.Title>
        <form onSubmit={handleSubmit}>
            <label>
                Title
                <input type="text" name="title" value={article.title} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                URL
                <textarea name="url" value={article.url} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Background Image
                <input type="file" name="bgimage" onChange={handleFileChange} />
            </label>
            <br />
            <div className="h-14 my-4 space-x-4 pt-4">
            <button type="submit"
                className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
                Save
            </button>
            <button
                onClick={reset}
                className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
                Close
            </button>
            </div>
        </form>
            </div>
        </Transition.Child>
        </div>
        </Dialog>
    </Transition>
    </div>
    );
};

export default EditArticle;
