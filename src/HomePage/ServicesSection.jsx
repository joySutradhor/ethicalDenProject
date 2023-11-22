import React from 'react';
import { Bounce, Hinge, JackInTheBox, Slide, Zoom } from 'react-awesome-reveal';
import { Fade } from 'react-awesome-reveal';

const ServicesSection = () => {
    const servicesArray = [
        { id: 1, title: "Cyber Security Services" },
        { id: 2, title: "Web Development" },
        { id: 3, title: "Digital Marketing" },
        { id: 4, title: "Search Engine Optimization" },
        { id: 5, title: "UI/UX Development" },
        { id: 6, title: "Branding" },
        { id: 7, title: "Artificial Intelligence" },
        { id: 8, title: "Mobile App Development" },
        { id: 9, title: "Film Production" },
        { id: 10, title: "Video Editing" },
        { id: 11, title: "Software Solutions" },
        { id: 12, title: "Engagement Campaigns" },
    ];

    return (
        <div className='md:mx-[90px]'>
            <h5 className='text-[#FAFAFA] font-[22px]'>Services</h5>
            <Slide delay={.5} >
                <h2 className="inline-block md:text-2xl md:my-[20px] font-bold font-inter text-transparent bg-gradient-to-br from-teal-500 via-green-500 to-yellow-300"
                    style={{
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>Develop, Exhibit, Secure</h2>
            </Slide >
            <Fade duration={4000}>
            <p className='text-[#FBFBFB] w-3/4 md:mb-[50px]' >Welcome to Ethical Den - The Strategic Digital Company. We are a brand and digital consultancy based in India, partnering globally with leaders across industries to build future products, services, and brands. Working for the unknown since 2021. Our services span a wide variety of audiences and capabilities, but all of them are rooted in inspiring ideas, human connection, and writing your brands future. The world is changing fast. We help you keep </p>
            </Fade>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-10">
                {servicesArray.map(service => (
                        <Bounce key={service.id} className="text-[#FBFBFB] rounded-md">
                        <h3 className=" ">{service.title}</h3>

                    </Bounce>
                  
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
