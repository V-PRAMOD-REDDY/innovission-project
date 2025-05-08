import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, BookOpen, Users, Briefcase, Layout, Award, ChevronRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import TestimonialSlider from '../components/TestimonialSlider';
import CourseCard from '../components/CourseCard';
import coursesData from '../data/courses';

const HomePage = () => {
  // Display only 3 featured courses
  const featuredCourses = coursesData.slice(0, 3);

  return (
    <>
      <HeroSection
        title="Upskill. Grow. Get Hired."
        subtitle="Join India's premier skill development platform for students and job seekers."
        ctaText="Join Our Community"
        ctaLink="#join"
        secondaryCtaText="Explore Courses"
        secondaryCtaLink="/courses"
      />

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link to="/courses" className="card p-6 flex flex-col items-center text-center hover:border-primary-500 hover:border-2 transition-all">
              <BookOpen className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Courses</h3>
              <p className="text-gray-600 mb-4">Explore our wide range of courses</p>
              <span className="text-primary-600 font-medium mt-auto">View Courses</span>
            </Link>
            
            <Link to="/portfolio" className="card p-6 flex flex-col items-center text-center hover:border-primary-500 hover:border-2 transition-all">
              <Layout className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Portfolio Builder</h3>
              <p className="text-gray-600 mb-4">Create a stunning professional portfolio</p>
              <span className="text-primary-600 font-medium mt-auto">Build Portfolio</span>
            </Link>
            
            <Link to="/jobs" className="card p-6 flex flex-col items-center text-center hover:border-primary-500 hover:border-2 transition-all">
              <Briefcase className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Jobs & Career</h3>
              <p className="text-gray-600 mb-4">Find opportunities and career guidance</p>
              <span className="text-primary-600 font-medium mt-auto">Explore Jobs</span>
            </Link>
            
            <Link to="/community" className="card p-6 flex flex-col items-center text-center hover:border-primary-500 hover:border-2 transition-all">
              <Users className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-gray-600 mb-4">Join our thriving learning community</p>
              <span className="text-primary-600 font-medium mt-auto">Join Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Featured Courses" 
            subtitle="Expand your skills with our most popular courses"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses" className="btn btn-primary inline-flex items-center">
              View All Courses
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Campaign Banner */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                NCAT 2025 Preparation Campaign
              </h2>
              <p className="text-primary-100 text-lg mb-6">
                Join our comprehensive preparation program for the National Common Aptitude Test 2025. Expert guidance, mock tests, and personalized feedback.
              </p>
              <Link to="/events" className="btn bg-white text-primary-900 hover:bg-gray-100">
                Learn More
              </Link>
            </div>
            <div className="flex-shrink-0">
              <img 
                src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="NCAT Preparation" 
                className="w-full md:w-80 h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="card p-8">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">15K+</div>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            
            <div className="card p-8">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">50+</div>
              <p className="text-gray-600">Expert Instructors</p>
            </div>
            
            <div className="card p-8">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">100+</div>
              <p className="text-gray-600">Courses Available</p>
            </div>
            
            <div className="card p-8">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">85%</div>
              <p className="text-gray-600">Placement Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section id="join" className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 text-center">
            <SectionTitle 
              title="Join Our Learning Community" 
              subtitle="Connect with like-minded learners, get support, and accelerate your growth"
              align="center"
            />
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a 
                href="#telegram" 
                className="btn btn-primary inline-flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Telegram Group
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
              
              <a 
                href="#discord" 
                className="btn bg-[#5865F2] text-white hover:bg-[#4752C4] inline-flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord Server
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;