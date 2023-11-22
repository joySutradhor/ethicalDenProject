import React from 'react';
import Marquee from "react-fast-marquee";

const TeamSection = () => {
    const itemsArray = [
        { id: 1, name: "Nazmul Islam", img: "./nazmul.png" },
        { id: 2, name: "Nataraj Sharma", img: "./nataraz.png" },
        { id: 3, name: "Sanjana Akter", img: "./sanjana.png" },
        { id: 4, name: "Shehnaz Sultana", img: "./shehnaz.png" },
        { id: 5, name: "Sajal Ahmed", img: "./sajal.png" },
        { id: 6, name: "Joy Sutradhor", img: "./joy Sutradhor.jpg" },
    ];

    return (
        <div className='md:mx-[90px] md:mb-[80px]'>
            <h5 className='text-[#FAFAFA] md:mb-[20px]'>Our Teams</h5>
            <Marquee pauseOnHover speed={70}>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-2 ">

                    {itemsArray.map(item => (
                        <div key={item.id} className="overflow-hidden text-center">
                            <img src={item.img} alt={item.name} className="w-[180px] gap-2 ml-0 h-[196px] object-cover rounded-md" />
                            <p className="font-inter my-1 ml-6 text-left text-transparent bg-gradient-to-br from-teal-400 via-green-300 to-yellow-500"
                                style={{
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>{item.name}</p>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default TeamSection;
