
import React from 'react';

const WorkSection = () => {
    const data = [
        {
            id: 1,
            name: "E-laj",
            services: ["Branding , App Design, UI UX"],
            img: "/work4.png",
        },

        {
            id: 2,
            name: "Roader",
            services: ["Branding , Web Design"],
            img: "/work3.png",
        },
        {
            id: 3,
            name: "Dream Health",
            services: ["Digital Marketing", "SEO"],
            img: "/work2.png",
        },
        {
            id: 4,
            name: "Wonderlite",
            services: ["Branding , Web Design, Social Media Marketing"],
            img: "/work1.png",
        },
       
        // Add more objects as needed
    ];

    return (
        <div className='md:mx-[90px] md:my-[80px] text-[#fafafa]'>
            <h3 className='my-[40px]'>Recent Work</h3>
            <div className=' grid grid-cols-2 justify-between gap-5'>
                {data.map((item) => (
                    <div key={item.id} className='grid grid-cols-2 relative even:mt-[40px]' >

                        <div
                            style={{
                                backgroundImage: `url(${item.img})`,
                                height: "520px",
                                width: "425px",
                                backgroundRepeat: "noRepeat",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: "15px"
                                
                            }}
                            alt={item.name}
                        />
                        <div className='absolute m-[20px] '>
                            <h2 className='text-[20px] font-inter font-semibold'>{item.name}</h2>
                            <p>{item.services.join(', ')}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default WorkSection;

