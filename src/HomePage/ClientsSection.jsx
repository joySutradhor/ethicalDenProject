import React from 'react';

const ClientsSection = () => {
    const clientsArray = [
        { id: 4, img: "./rovdear.png" },
        { id: 2, img: "./dream.png" },
        { id: 3, img: "./e-laj.png" },
        { id: 5, img: "./wonderlite.png" },
        { id: 1, img: "./akps.png" },
 
    ];

    return (
        <div className='mx-[90px] md:my-[80px]'>
            <h5 className='text-[#FAFAFA] '>Our Clients</h5>
            <div className="grid grid-cols-5 gap-2">
                {clientsArray.map(client => (
                    <div key={client.id} className="overflow-hidden">
                        <img src={client.img} alt={`Client ${client.id}`} className="w-[140px] h-auto object-cover rounded-md" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientsSection;
