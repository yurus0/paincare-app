'use client';
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';

export default function about() {
    return (
        <div>
            <Navbar islogged={false} />
        <div className="flex min-h-screen justify-between items-center p-24 bg-white bg-gradient-to-t from-pink-50">
            <div className="flex flex-row">
                <div className="flex">
                <div className="lg:flex flex-col lg:w-1/2 text-left">
                <motion.div
            className="card-container"
            initial={{y:100, opacity:0}}
            whileInView={{
                y: 0,
                opacity:100,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1
                }}}
            viewport={{ once: true, amount: 1 }}
            >
                <h1 className="text-4xl font-bold text-left pb-14">About Us</h1>
                </motion.div>
                <br/>
                <motion.div
            className="card-container"
            initial={{y:100, opacity:0}}
            whileInView={{
                y: 0,
                opacity:100,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 2
                }}}
            viewport={{ once: true, amount: 1 }}
            >
                    <p className="text-left break-normal">
                    The PainCare m-Health solution was developed with the goal of providing comprehensive resources and assistance to women who are struggling with endometriosis. It aims to assist individuals by giving them access to customized symptom tracking, educational materials, and a supportive community.
    The main goal is to provide women with endometriosis with a user-friendly and accessible tool for pain-management, information, and emotional support in order to improve their overall wellness and quality une. Tis incruues women who suspect uney way have the condition. With PainCare, women can take control of their condition and move towards a happier and healthier life.
                    </p></motion.div>
                </div>
                <div className="hidden lg:flex lg:w-1/2 lg:ml-auto px-10 pt-20 justify-end">
                        <div className="w-full max-w-md p-4">
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
                        <img src="/logo-name.svg" alt="logo" />
                        </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}