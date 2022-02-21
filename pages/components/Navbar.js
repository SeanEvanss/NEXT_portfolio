import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'
//import { Link as LinkScroller, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

export default function Navbar() {

    return (

        <header className="bg-pure_black md:sticky top-0 z-10 shadow-xl shadow-custom_orange/80 hover:shadow-xl hover:shadow-custom_orange/50">
            <div className="flex xl:p-6 p-3 flex-row items-center ">
                <div className="title-font font-medium text-xl text-pure_white mr-4 md:mb-0">
                    Sean Tang
                </div>
                <div className="md:mr-auto md:ml-4 md:py-1 md:pl-5 flex flex-wrap flex-row items-center justify-center mb-0">
                    <Link href="#skills" scroll={true}>
                        <a className="transition ease-in-out delay-100 text-pure_white mr-5 shadow-xl shadow-custom_dark_blue/60 hover:shadow-custom_light_blue/90 hover:scale-110">
                            Skills
                        </a>
                    </Link>
                    <Link href="#projects">
                        <a className="transition ease-in-out delay-100 text-pure_white mr-5 shadow-xl shadow-custom_dark_blue/60 hover:shadow-custom_light_blue/90 hover:scale-110">
                        Projects
                        </a>
                    </Link>
                    <Link href="#contact">
                        <a className="transition ease-in-out delay-100 text-pure_white mr-5 shadow-xl shadow-custom_dark_blue/60 hover:shadow-custom_light_blue/90 hover:scale-110">
                        Contact
                        </a>
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
    )

}