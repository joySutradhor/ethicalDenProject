import React from 'react';

const ItemsComponent = () => {
    const itemsArray = [
        { id: 1, name: "Item 1", img: "path/to/item1.jpg" },
        { id: 2, name: "Item 2", img: "path/to/item2.jpg" },
        { id: 3, name: "Item 3", img: "path/to/item3.jpg" },
        { id: 4, name: "Item 4", img: "path/to/item4.jpg" },
        { id: 5, name: "Item 5", img: "path/to/item5.jpg" },
        { id: 6, name: "Item 6", img: "path/to/item6.jpg" },
    ];

    return (
        <div>
            <h5>Items</h5>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {itemsArray.map(item => (
                    <div key={item.id} className="overflow-hidden text-center">
                        <img src={item.img} alt={item.name} className="w-full h-auto object-cover rounded-md" />
                        <p className="mt-2">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemsComponent;
