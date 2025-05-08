import { ServiceProps } from '../components/ServiceCard';
import { File, Users, Briefcase, Laptop, MessageSquare, Code } from 'lucide-react';
import React from 'react';

const servicesData: ServiceProps[] = [
  {
    id: 1,
    title: 'Resume Review & Optimization',
    description: 'Get your resume reviewed by HR experts who will provide personalized feedback to optimize it for ATS and human recruiters.',
    icon: React.createElement(File, { className: 'h-6 w-6' }),
    link: '/services/resume-review',
    price: 11,
  },
  {
    id: 2,
    title: 'LinkedIn Profile Building',
    description: 'Transform your LinkedIn profile into a powerful networking and job-hunting tool with our expert guidance.',
    icon: React.createElement(Users, { className: 'h-6 w-6' }),
    link: '/services/linkedin-profile',
    price: 9,
  },
  {
    id: 3,
    title: 'Mock Interviews',
    description: 'Practice with industry professionals in real-like interview scenarios. Get detailed feedback to improve your performance.',
    icon: React.createElement(Briefcase, { className: 'h-6 w-6' }),
    link: '/services/mock-interviews',
    price: 21,
  },
  {
    id: 4,
    title: 'Career Counseling',
    description: 'One-on-one sessions with career counselors to help you navigate your career path and make informed decisions.',
    icon: React.createElement(MessageSquare, { className: 'h-6 w-6' }),
    link: '/services/career-counseling',
    price: 21,
  },
  {
    id: 5,
    title: 'Portfolio Website Development',
    description: 'Get a custom-designed portfolio website that showcases your skills and projects to potential employers.',
    icon: React.createElement(Laptop, { className: 'h-6 w-6' }),
    link: '/services/portfolio-website',
    price: 21,
  },
  {
    id: 6,
    title: 'API Development Services',
    description: 'Custom API development for your projects. Our experts will create scalable, secure, and well-documented APIs.',
    icon: React.createElement(Code, { className: 'h-6 w-6' }),
    link: '/services/api-development',
    price: 21,
  },
];

export default servicesData;