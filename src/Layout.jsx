import React from 'react';
import HeroSection from './HomePage/HeroSection';
import ExpertSection from './HomePage/ExpertSection';
import ServicesSection from './HomePage/ServicesSection';
import ClientsSection from './HomePage/ClientsSection';
import TeamSection from './HomePage/TeamSection';
import ContactUsSection from './HomePage/ContactUsSection';
import WorkSection from './HomePage/WorkSection';

const Layout = () => {
    return (
        <div className='bg-black'>
            <HeroSection></HeroSection>
            <ExpertSection></ExpertSection>
            <ServicesSection></ServicesSection>
            <WorkSection></WorkSection>
            <ClientsSection></ClientsSection>
            <TeamSection></TeamSection>
            <ContactUsSection></ContactUsSection>
        </div>
    );
};

export default Layout;