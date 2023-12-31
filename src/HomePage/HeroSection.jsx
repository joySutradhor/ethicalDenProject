import React, { useState } from 'react';
import logo from "/logo.png";
import socail from "/social.png"
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-[url('/hero.png')] md:h-screen">
            <nav className="border-gray-200 py-2.5 dark:bg-gray-900 relative">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto md:mt-[40px] font-inter text-white">
                    <img src={logo} className="h-6 mr-3 sm:h-9 hover:text-teal-500" alt="EthicalDen Logo" />

                    <div className="flex items-center lg:order-2">
                        <div className="hidden mt-2 mr-4 sm:inline-block">
                            <span></span>
                        </div>

                        <a
                            href="#"
                            className="text-white border-b border-teal-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 "
                        >
                            Hire Me
                        </a>
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : ''}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                            <svg
                                className={`w-6 h-6 ${isMobileMenuOpen ? '' : 'hidden'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                    {/* for mobile version */}
                    <div
                        className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'
                            }`}
                        id="mobile-menu-2"
                    >
                        {/* list items */}
                        <ul className="flex flex-col mt-4 md:font-medium lg:flex-row lg:space-x-8 lg:mt-0 cursor-pointer">
                            <li className="nav-item transition-all text-teal-500 duration-300 border-b border-transparent md:hover:border-teal-500">Home</li>
                            <li className="nav-item transition-all duration-300 border-b border-transparent md:hover:border-teal-500 md:hover:text-teal-500">About Us</li>
                            <li className="nav-item transition-all duration-300 border-b border-transparent md:hover:border-teal-500 md:hover:text-teal-500">Services</li>
                            <li className="nav-item transition-all duration-300 border-b border-transparent md:hover:border-teal-500 md:hover:text-teal-500">Our Work</li>
                            <li className="nav-item transition-all duration-300 border-b border-transparent md:hover:border-teal-500 md:hover:text-teal-500">Education</li>
                            <li className="nav-item transition-all duration-300 border-b border-transparent md:hover:border-teal-500 md:hover:text-teal-500">Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='absolute bottom-1/4 left-[35%] transform -translate-x-1/2 -translate-y-1/5'>
                <Fade cascade >
                    <h1 className='md:text-4xl text-gray-400'>innovative Cyber Agency </h1>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'We Work for Artificial Intelligence',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'We Work for Web Development',
                            1000,
                            'We Work for Graphics Design',
                            1000,
                            'We Work for Video Editing',
                            1000
                        ]}
                        wrapper="span"
                        speed={70}
                        style={{ fontSize: '2em', display: 'inline-block', color:"#abbcd5"  }}
                        repeat={Infinity}
                    />
                    
                    <p className='w-3/4 text-gray-400 my-[40px]'>We are the best digital marketing agency from West Bengal, curating experiences that users fall in love with.</p>
                    <img src={socail} alt="" />
                </Fade>
            </div>

            <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
        </div>
    );
};

export default HeroSection;
