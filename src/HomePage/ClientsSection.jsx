import React from 'react';

const ClientsSection = () => {
    const clientsArray = [
        { id: 1, img: "path/to/client1.jpg" },
        { id: 2, img: "path/to/client2.jpg" },
        { id: 3, img: "path/to/client3.jpg" },
        { id: 4, img: "path/to/client4.jpg" },
        { id: 5, img: "path/to/client5.jpg" },
 
    ];

    return (
        <div>
            <h5>Our Clients</h5>
            <div className="grid grid-cols-5 gap-4">
                {clientsArray.map(client => (
                    <div key={client.id} className="overflow-hidden">
                        <img src={client.img} alt={`Client ${client.id}`} className="w-full h-auto object-cover rounded-md" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientsSection;
