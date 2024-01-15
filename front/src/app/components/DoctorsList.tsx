import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import DoctorsService from "../services/DoctorsService";
import Button from "./Button";
import ServiceCard from "./ServiceCard";
import ViewMoreCard from "./ViewMoreCard";

const DoctorsList = ()=>{
    const [doctors, setDoctors]=useState<any[]>();
    const [loading, setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const res= await DoctorsService.getDoctors();
                console.log(res);
                console.log("end of fetching comments");
                const doctors = res.data;
                console.log(doctors);
                setDoctors(doctors);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }
    , []);

    return(
        <div>
        <div className='flex flex-col items-center p-6'>
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
        <h1 className='text-4xl font-bold text-center mb-4'>
            Not Sure about the app's Diagnosis?
        </h1></motion.div>
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
        <h3 className='text-2xl text-center mb-8'> Double check with a Doctor</h3>
        </motion.div>
            <div className='items-center justify-center text-center pt-2'>
            <Link href="/https://www.dabadoc.com/ma">
                <Button
                message='Get an appointement here'
                />
            </Link>
            </div>
        </div>
    <div className='snap-mandatory snap-x flex overflow-x-auto gap-10 px-4 py-6'>
        {doctors?.map((doctor, index) => (

        <div className="snap-center">
            <Link href={doctor.profileUrl? doctor.profileUrl: "https://www.dabadoc.com/ma"}>
            <ServiceCard key={doctor.id} index={index} title={"Dr. "+doctor.firstName+" "+doctor.lastName} icon={doctor.picUrl} />
            </Link>
            </div>
        ))}
        <ViewMoreCard index={doctors?.length}/>
        </div>
    </div>);
}
export default DoctorsList;