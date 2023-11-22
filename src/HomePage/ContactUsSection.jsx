import React from 'react';

const ContactUsSection = () => {
    const servicesArray = [
        { id: 1, serviceName: "Digital marketing" },
        { id: 2, serviceName: "Cyber security" },
        { id: 3, serviceName: "SEO" },
        { id: 4, serviceName: "Branding" },
        { id: 5, serviceName: "UI/UX " },
        { id: 6, serviceName: "Web Development" },
        { id: 7, serviceName: "Social Media Marketing" },
    ];
    return (
        <div className='md:mx-[140px]'>
            <div>
                <h4 className='text-[#FAFAFA]'>Hire Me</h4>
                <h2 className="inline-block md:text-2xl md:my-[20px] font-bold font-inter text-transparent bg-gradient-to-br from-teal-500 via-green-500 to-yellow-300"
                    style={{
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>Work with Ethical Den</h2>
                <h4 className='text-[#FBFBFB] md:mb-[20px]'>Services</h4>
                {
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {servicesArray.map((service) => (
                            <div key={service.id} className="bg-gray-200 p-4 rounded">
                                <p className="text-lg font-bold">{service.serviceName}</p>
                            </div>
                        ))}
                    </div>
                }
                <form className="md:mt-[40px]">
                    <div className="flex mb-1">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="  border-b border-white bg-transparent focus:outline-none text-white"
                                
                            />
                        </div>

                        <div className="mb-0 ml-4">
                            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="  border-b border-white bg-transparent focus:outline-none text-white"
                                
                            />
                        </div>
                    </div>

                    <div className="mb-10">
                        <label htmlFor="message" className="block text-sm font-medium text-white">Project Details</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="1"
                            className=" border-b border-white bg-transparent focus:outline-none text-white"
                            
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="px-8 py-2  text-[14px] border rounded-2xl text-white"
                    >
                        Submit
                    </button>
                </form>


            </div>
        </div>
    );
};

export default ContactUsSection;