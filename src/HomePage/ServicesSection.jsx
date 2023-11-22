import React from 'react';

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
        <div>
            <h5>Services</h5>
            <h2>Develop, Exhibit, Secure</h2>
            <p>Welcome to Ethical Den - The Strategic Digital Company. We are a brand and digital consultancy based in India, partnering globally with leaders across industries to build future products, services, and brands. Working for the unknown since 2021. Our services span a wide variety of audiences and capabilities, but all of them are rooted in inspiring ideas, human connection, and writing your brands future. The world is changing fast. We help you keep up</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {servicesArray.map(service => (
                    <div key={service.id} className="bg-gray-100 p-4 rounded-md">
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        {/* Add more details or styling as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
