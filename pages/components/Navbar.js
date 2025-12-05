import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();
    return (
        <header className="bg-pure_black md:sticky top-0 z-10 shadow-xl shadow-custom_orange/80 hover:shadow-xl hover:shadow-custom_orange/50">
            <div className="flex xl:p-6 p-3 flex-row items-center ">
                <div className="mr-4 md:mb-0">
                    <Link
                        href="/"
                        scroll={true}
                        className="transition ease-in-out delay-100 title-font font-medium text-xl text-pure_white mr-5 shadow-xl shadow-custom_dark_blue/60 hover:shadow-custom_light_blue/90 hover:scale-110">
                        
                            Sean Tang
                        
                    </Link>
                </div>
                <div className="md:mr-auto md:ml-4 md:py-1 md:pl-5 flex flex-wrap flex-row items-center justify-center mb-0">
                    <Link
                        href="#skills"
                        scroll={true}
                        className="transition ease-in-out delay-100 text-pure_white mr-5 shadow-xl shadow-custom_dark_blue/60 hover:shadow-custom_light_blue/90 hover:scale-110">
                        
                            Skills
                        
                    </Link>
                    <Link
                        href="#projects"
                        scroll={true}
                        className="transition ease-in-out delay-100 text-pure_white mr-5 shadow-xl shadow-custom_dark_blue/60 hover:shadow-custom_light_blue/90 hover:scale-110">
                        
                            Projects
                        
                    </Link>
                    <Link
                        href="#contact"
                        scroll={true}
                        className="transition ease-in-out delay-100 text-pure_white mr-5 shadow-xl shadow-custom_dark_blue/60 hover:shadow-custom_light_blue/90 hover:scale-110">
                        
                            Contact
                        
                    </Link>
                    <Link href="/components/Feed" className="text-pure_white ml-10">
                        
                            Feed page
                        
                    </Link>
                </div>
                <div className="md:mr-auto md:ml-4 md:py-1 md:pl-5 flex flex-wrap flex-row items-center justify-center mb-0" />
                <a href="https://github.com/SeanEvanss/NEXT_portfolio"
                    className="transition ease-in-out delay-100 inline-flex items-center bg-custom_gray border-0 text-pure_white py-1 px-3 focus:outline-none hover:bg-custom_beige hover:scale-125 rounded text-base mb-0 hover:text-gray-400 mr-5">
                    See how this site was made
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );

}