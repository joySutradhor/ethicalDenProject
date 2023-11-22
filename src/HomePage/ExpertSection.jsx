import React from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';


const ExpertSection = () => {
    // objects for maping
    const data = [
        {
            id: 1,
            title: "Security Experts",
            description: "Knowing the state of your current cybersecurity posture as well as executing on continued cybersecurity initiatives is critical to staying ahead of the constantly evolving risks that are out there. With Audits, Penetration Testing & Security System Architecture and Implementation, Ethical Den can help you better understand where you are now and where you need to be tomorrow.",
            img: "./secuirity.png",
        },
        {
            id: 2,
            title: "Development Experts",
            description: "We create unique & efficient digital solutions that help businesses grow. By bringing the latest IT advancements to various industries, we deliver custom software that completely fits the behavior and needs of our customers. While Ethical Den records continuous growth and expansion, with the software solutions we provide, our customers grow, too.",
            img: "./developer.png",
        },
        {
            id: 3,
            title: "Marketing experts",
            description: "At Ethical Den, we pride ourselves on digital marketing campaigns that build Brand Equity by using unique insights into your target market. A solid social media marketing strategy supports your wider digital marketing approach. Our team of digital marketing Cosmonauts ensure that your brands' online marketing strategy and planning are prepared to the standards of global best practices and built to achieve your brand's objectives. ",
            img: "./marketting.png",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:mx-[80px] md:my-[80px]">
            {data.map((item) => (
                <div key={item.id} className=" flex w-full justify-between items-center my-8 md:px-4 even:flex-row-reverse ">
                    <div className="mb-8 w-1/2  ">
                        <Slide>
                            <h2 className="inline-block md:text-2xl md:mb-[20px] font-bold font-inter text-transparent bg-gradient-to-br from-teal-500 via-green-500 to-yellow-300"
                                style={{
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>{item.title}</h2>


                        </Slide>
                        <Fade delay={2} duration={3000}>

                            <p className="text-[#FBFBFB] font-[22px] leading-[25px] ">{item.description}</p>
                        </Fade>
                    </div>
                    <Slide>

                        <img src={item.img} alt={item.title} className="object-cover rounded-lg w-[329px] h-[297px]" />
                    </Slide>
                </div>
            ))
            }
        </div >
    );
};

export default ExpertSection;
