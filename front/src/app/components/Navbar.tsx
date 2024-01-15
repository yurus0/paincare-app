'use client';
import Link from "next/link";
import Logo from "./Logo";

const Navbar = ({islogged, userId, isregister}:{
    islogged?:boolean;
    userId?:any;
    isregister?:boolean;
}) => {
    userId = 1;
    /*console.log(logged);
    useEffect(() => {
        // Your logic to handle changes when authentication status changes
        // For example, you can console.log, update state, or dispatch actions
        console.log('Authentication status changed:', logged);
    }, [logged]);*/
    return (
    <>
        <div className="w-full h-20 top-0 absolute">
        <div className="container mx-auto px-4 h-full">
        {islogged ? ( isregister ?(
            <div className="flex justify-between items-center h-full">
                <Link href={"/"}>
                <Logo />
                </Link>
                <ul className="hidden md:flex gap-x-6">
                    <>
                    <li>
                    </li>
                    </>
                    </ul>
                    </div>
                ):(
                <div className="flex justify-between items-center h-full">
                <Link href={"/user/"+userId}>
                <Logo />
                </Link>
            <ul className="hidden md:flex gap-x-6">
                    <>
                    <li>
                    </li>
                    </>
                    </ul>
                    </div>
                )):(
                <>
                <div className="flex justify-between items-center h-full">
                    <Link href="/">
                    <Logo />
                    </Link>
                <ul className="hidden md:flex gap-x-6">
                    <li>
                    <Link href="/blog">
                        <p className="hover:font-bold">Blog</p>
                    </Link>
                    </li>
                    <li>
                    <Link href="/about">
                        <p className="hover:font-bold">About Us</p>
                    </Link>
                    </li>
                    <li>
                    <Link href="/auth/login">
                        <p className="hover:font-bold">Log in</p>
                    </Link>
                    </li>
                    <li className="px-2">
                        <p> | </p>
                    </li>
                    <li>
                    <Link href="/auth/register">
                        <p className="hover:font-bold">Register</p>
                    </Link>
                    </li>
                    </ul>
                    </div>
                </>
                )}
        </div>
        </div>
    </>
    );
};

export default Navbar;