import React from 'react';
import pic from  "../assets/err.png"

const ErrorPage = () => {
    return (
        <div className='absolute top-[40%] left-[40%]'>
            <img src={pic} alt="" />
        </div>
    );
};

export default ErrorPage;