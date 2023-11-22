import React from 'react';

const ItemsComponent = () => {
    const itemsArray = [
        { id: 1, name: "Nazmul Islam", img: "./nazmul.png" },
        { id: 2, name: "Nataraj Sharma", img: "./nataraz.png" },
        { id: 3, name: "Sanjana Akter", img: "./sanjana.png" },
        { id: 4, name: "Shehnaz Sultana", img: "./shehnaz.png" },
        { id: 5, name: "Sajal Ahmed", img: "./sajal.png" },
    ];

    return (
        <div className='md:mx-[140px] md:mb-[80px]'>
            <h5 className='text-[#FAFAFA] md:mb-[20px]'>Our Teams</h5>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                {itemsArray.map(item => (
                    <div key={item.id} className="overflow-hidden text-center">
                        <img src={item.img} alt={item.name} className="w-[180px] h-auto object-cover rounded-md" />
                        <p className="font-inter my-1 text-left text-transparent bg-gradient-to-br from-teal-400 via-green-300 to-yellow-500"
                            style={{
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemsComponent;
