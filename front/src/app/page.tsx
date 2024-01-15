"use client";
import { ChevronRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { ArrowDownCircleIcon, HeartIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import DoctorsList from './components/DoctorsList';
import Navbar from './components/Navbar';

export default function Home() {

  const [article, setArticle] = useState({
    articleId: "",
    title: "",
    url: "",
    bgimage: "",
    });

  return (
    <div className='bg-white'>
    
    <div className="flex min-h-screen flex-col justify-between">
    <div className="flex flex-col absolute scale-80 top-0 right-3">
    <Spline scene="https://prod.spline.design/kjRkvsu18xkfylrL/scene.splinecode" />
    {/*<Spline scene="https://prod.spline.design/kjRkvsu18xkfylrL/scene.splinecode" />*/}
      </div>

    <Navbar/>
      <div className='px-10 justify-between py-10'>
      <div className="flex flex-col pt-48 pl-10  ">
        
      <div>
      <motion.div
            className="card-container"
            initial={{y:100, opacity:0}}
            whileInView={{
                y: 0,
                opacity:100,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 2,
                    delay: 1
            }}}
            viewport={{ once: true, amount: 1 }}
            >
        <h1 className="text-4xl text-left font-bold">
        Hi, there!
        </h1>
        </motion.div>
        <motion.div
            className="card-container"
            initial={{y:100, opacity:0}}
            whileInView={{
                y: 0,
                opacity:100,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 2,
                    delay: 1.5
            }}}
            viewport={{ once: true, amount: 1 }}
            >
        <p className="text-left break-normal pt-6">
        Welcome to <b>PainCare</b> - Your Personal Health Companion. <br/> Empower yourself to monitor and  enhance your well-being<br/> effortlessly.
        </p>
        </motion.div>
        </div>
        </div>
        <div className='flex items-end justify-center pt-96'>
        <ArrowDownCircleIcon className=" animate-bounce w-10 h-10"/>
        </div>
    </div>
    </div>
    <div className='flex min-h-screen flex-col justify-center px-10 bg-gradient-to-t from-pink-50 '>
    <div className="flex flex-col items-center">
      <div className='items-center justify-center'>
      <motion.div
            className="card-container"
            initial={{y:50, opacity:0}}
            whileInView={{
              y: 0,
              opacity:100,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2,
                delay: 1.5
              }}}
            viewport={{ once: true, amount: 1 }}
            >
        <h1 className="text-4xl font-bold text-center">
          Discover
        </h1></motion.div>
        <motion.div
            className="card-container"
            initial={{y:50, opacity:0}}
            whileInView={{
              y: 0,
              opacity:100,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2,
                delay: 1.5
              }}}
            viewport={{ once: true, amount: 1 }}
            >
        <p className="px-20 break-normal pt-6 text-center">
        Our pain care app is designed to ease period pain and empower girls during their menstrual cycles. It offers a user-friendly interface with personalized guidance to alleviate discomfort. Join our community of women who have found relief and happiness through our app.
        <br/> Take control of your well-being by downloading it today and say goodbye to period pain
          <br/>
        </p>
        </motion.div>
        
        <div className='items-center justify-center text-center pt-8'>
          <Link href="/blog">
          <motion.div
            className="card-container"
            initial={{y:50, opacity:0}}
            whileInView={{
              y: 0,
              opacity:100,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2,
                delay: 1.5
              }}}
            viewport={{ once: true, amount: 1 }}
            >
            <Button
              message='Get Started Now'
            />
            </motion.div>
          </Link>
          </div>
        </div>
    </div>
    <div className='pt-20'>
    <div className='items-center'>
    <motion.div
            className="card-container"
            initial={{y:50, opacity:0}}
            whileInView={{
              y: 0,
              opacity:100,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2,
                delay: 1
              }}}
            viewport={{ once: true, amount: 1 }}
            >
      <Card hover="shadow-inner">
        <div className='flex flex-row items-center'>
        <div className='jutsify-between px-2 py-4  max-w-screen-sm'>
        <p className='text-xl font-bold'>Instant Relief</p>
        <p className='text-sm break-normal pt-3 pr-14'>Experience immediate relief from menstrual discomfort. Our app provides quick solutions to alleviate pain and discomfort, helping you get back to your daily routine without interruption.</p>
        </div>
        <SparklesIcon className="w-20 h-20"/>
        </div>
      </Card>
      </motion.div>
      </div>
    <div className='items-center'>
    <motion.div
            className="card-container"
            initial={{y:50, opacity:0}}
            whileInView={{
              y: 0,
              opacity:100,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2,
                delay: 1.5
              }}}
            viewport={{ once: true, amount: 1 }}
            >
      <Card hover="shadow-inner">
        <div className='flex flex-row items-center'>
        <div className='jutsify-between px-4 py-4  max-w-screen-sm'>
        <p className='text-xl font-bold'>Personalized Care</p>
        <p className='text-sm break-normal pt-3 pr-14'>Tailored to your unique needs, our app offers personalized care and expert advice. You’ll find tips and strategies that address your specific concerns, making your period more manageable and less stressful.
        </p>
        </div>
        <HeartIcon className="w-20 h-20"/>
        </div>
      </Card>
      </motion.div>
      </div>
      </div>
      </div>

      <div className='flex min-h-1/3 flex-col w-full justify-center px-16 py-4 bg-white bg-gradient-to-b from-pink-50 to-pink-100'>
        <DoctorsList />
        </div>

      <div className='flex min-h-screen flex-col relative w-full bg-pink-100' style={{ display: "block" }}>
        <Image src="/bg1.png" alt="bg" fill={true}/>
        <div className=' items-center justify-center px-20 pt-56'>
        <Card>
          <div className='flex flex-row items-center'>
          <div className='jutsify-between px-10 py-10 '>
          <p className='text-4xl font-bold'>Join the Community</p>
          <p className='text-lg break-normal pt-10 pr-28'>Join our growing community of women who have discovered happiness and freedom from period pain. Sign in to our app today to be part of a supportive network that understands and supports you throughout your menstrual journey.
          </p>
          <Link href="/login" className='text-lg pt-2'>
          <div className='py-4 relative'>
        <div className="flex bg-white items-center justify-between rounded-md w-128 relative">
            <div className="flex items-center justify-left px-2">
                <h1 className='text-lg font-bold '>Join Now</h1>
                <ChevronRightIcon
                    className="h-8 w-8 hover:translate-x-20"
                />
            </div>
        </div>
        </div>
          </Link>
          </div>
          <div className='pr-16'>
          <UserGroupIcon className="w-40 h-40"/>
          </div>
          </div>
        </Card>
        </div>
      </div>
      <div className='flex min-h-screen flex-col w-full justify-center px-10 py-4 bg-gradient-to-b from-pink-100 '>
        {/*Frequently Asked questions */}
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl font-bold text-center mb-8'>
            Frequently Asked Questions
          </h1>
          <div className='flex flex-col items-start max-w-screen-md mx-auto'>
          <motion.div
            className="card-container"
            initial={{y:200, opacity:0}}
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
            {/* FAQ 1 */}
            <Card hover='shadow-inner'>
              <div className='mb-4'>
              <div className='flex flex-row items-center'>
                <div className='justify-between px-4 py-4 max-w-screen-sm'>
                  <p className='text-xl font-bold'>
                    How can I download the PainCare app?
                  </p>
                  <p className='text-sm break-normal pt-3'>
                    You can download the PainCare app from the App Store or
                    Google Play. Simply search for "<b>PainCare</b>" and follow the
                    installation instructions.
                  </p>
                </div>
                <ChevronRightIcon className='w-8 h-8' />
              </div>
              </div>
            </Card>
          </motion.div>
          <motion.div
            className="card-container"
            initial={{y:300, opacity:0}}
            whileInView={{
              y: 0,
              opacity:100,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1,
              }}}
            viewport={{ once: true, amount: 1 }}
            >
            {/* FAQ 2 */}
            <Card hover='shadow-inner'>
              <div className='mb-4'>
              <div className='flex flex-row items-center'>
                <div className='justify-between px-4 py-4 max-w-screen-sm'>
                  <p className='text-xl font-bold'>
                    Is the PainCare app free to use?
                  </p>
                  <p className='text-sm break-normal pt-3'>
                    Yes, PainCare is free to download and use. There may be
                    optional in-app purchases for additional features, but the
                    core functionality is available at no cost.
                  </p>
                </div>
                <ChevronRightIcon className='w-8 h-8' />
              </div>
              </div>
            </Card>
          </motion.div>
          <motion.div
            className="card-container"
            initial={{y:300, opacity:0}}
            whileInView={{
              y: 0,
              opacity:100,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1,
              }}}
            viewport={{ once: true, amount: 1 }}
          >
            {/* FAQ 3 */}
            <Card hover='shadow-inner'>
              <div className='mb-4'>
              <div className='flex flex-row items-center'>
                <div className='justify-between px-4 py-4 max-w-screen-sm'>
                  <p className='text-xl font-bold'>
                    What is endometriosis?
                  </p>
                  <p className='text-sm break-normal pt-3 pr-2'>
                  Endometriosis is a condition in which tissues similar to the lining
                  of the uterus are also present elsewhere in the body,
                  primarily in the abdominal cavity.
                  </p>
                </div>
                <ChevronRightIcon className='w-8 h-8' />
              </div>
              </div>
            </Card>
          </motion.div>
          <motion.div
            className="card-container"
            initial={{y:300, opacity:0}}
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
            {/* FAQ 4 */}
            <Card hover='shadow-inner'>
              <div className='mb-4'>
              <div className='flex flex-row items-center'>
                <div className='justify-between px-4 py-4 max-w-screen-sm'>
                  <p className='text-xl font-bold'>
                    What are the symptoms of endometriosis?
                  </p>
                  <p className='text-sm break-normal pt-3 pr-4'>
                  The most common symptom of endometriosis is pelvic pain. The pain often occurs during menstruation, ovulation, and/or sexual intercourse. However, a woman with endometriosis may also experience pain at other times in her menstrual cycle. Another symptom is infertility. Some women with endometriosis also experience significant fatigue.
                  </p>
                </div>
                <ChevronRightIcon className='w-8 h-8' />
              </div>
              </div>
            </Card>
          </motion.div>
          </div>
        </div>
      </div>
      <div className='flex min-h-1/3 flex-col w-full justify-center px-16 py-4 bg-gradient-to-t from-pink-50'>
        {/*Contact Us */}
        {/* Bottom of the page (social media, terms and conditions, etc...) */}
        <div className='flex flex-col items-end'>
          <div className='flex justify-between w-full items-end mb-8'>
            {/* Left side: Important Links */}
            <div className='flex flex-col'>
              <Link href='/about' className='py-2'>
                <p className='text-md hover:text-blue-500'>About Us</p>
              </Link>
              <Link href='/faq' className='py-2'>
                <p className='text-md hover:text-blue-500'>FAQ</p>
              </Link>
              <Link href='/contact' className='py-2'>
                <p className='text-md hover:text-blue-500'>Contact</p>
              </Link>
              <Link href='/termsandconditions' className='py-2'>
                <p className='text-md hover:text-blue-500'>Terms & Conditions</p>
              </Link>
            </div>
            {/* Logo */}
            {/* Right side: Subscribe to our Newsletter */}
            <div className='flex flex-col items-end'>
            <Image src='/logo-name-minimal.png' alt='Logo' width={250} height={60} />
              <div className='flex flex-col items-center justify-center p-6 bg-pink-300 rounded-lg shadow-md'>
              <p className='text-md mb-2 text-center'>Subscribe to Our Newsletter</p>
                {/* Add your subscribe form or button here */}
                {/* Example: */}
                <div className='p-2'>
                <input
                  type='email'
                  placeholder='Your Email'
                  className='border p-2 mr-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent'
                /></div>
                <div>
                <Button message='Subscribe' />
                </div>
              </div>
              </div>
              </div>
              </div>
      </div>
    </div>
  )
}
