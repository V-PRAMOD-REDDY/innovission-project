import React from 'react';
import { Check } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import servicesData from '../data/services';

const ServicesPage = () => {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Professional services to accelerate your career growth"
        backgroundImage="https://images.pexels.com/photos/1181377/pexels-photo-1181377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Career Services" 
            subtitle="Comprehensive support for every stage of your career journey"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {servicesData.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Resume Review & Optimization</h2>
              <p className="text-xl text-gray-600 mb-6">
                Get your resume professionally reviewed and optimized for modern hiring processes.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">ATS-friendly optimization to ensure your resume passes automated screenings</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Personalized feedback from HR professionals with industry experience</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Content and formatting suggestions to highlight your strengths effectively</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Keyword optimization for your target industry and roles</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center mb-8">
                <span className="text-2xl font-bold text-primary-900">₹11</span>
                <span className="text-gray-600 ml-2">per resume</span>
              </div>
              
              <a href="/services/resume-review" className="btn btn-primary">
                Get Started
              </a>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/5989933/pexels-photo-5989933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Resume Review" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Service Packages" 
            subtitle="Bundled services for comprehensive career support"
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Starter Package */}
            <div className="card overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-gray-50 p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Starter Package</h3>
                <p className="text-gray-600 mb-4">Essential career kickstarter</p>
                <div className="text-3xl font-bold text-primary-900 mb-1">₹29</div>
                <p className="text-sm text-gray-600">One-time payment</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Resume Review & Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>LinkedIn Profile Building</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <span className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5">×</span>
                    <span>Mock Interview</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <span className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5">×</span>
                    <span>Career Counseling</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <span className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5">×</span>
                    <span>Portfolio Website</span>
                  </li>
                </ul>
                
                <a href="#" className="btn btn-outline w-full">
                  Choose Starter
                </a>
              </div>
            </div>
            
            {/* Professional Package */}
            <div className="card overflow-hidden hover:-translate-y-1 transition-transform duration-300 border-2 border-primary-500 relative">
              <div className="absolute top-0 left-0 right-0 bg-primary-600 text-white text-center py-1 text-sm font-medium">
                Most Popular
              </div>
              
              <div className="bg-primary-50 p-6 text-center pt-9">
                <h3 className="text-xl font-semibold mb-2">Professional Package</h3>
                <p className="text-gray-600 mb-4">Comprehensive career boost</p>
                <div className="text-3xl font-bold text-primary-900 mb-1">₹49</div>
                <p className="text-sm text-gray-600">One-time payment</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Resume Review & Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>LinkedIn Profile Building</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>1 Mock Interview Session</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Career Counseling (30 mins)</span>
                  </li>
                  <li className="flex items-start text-gray-400">
                    <span className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5">×</span>
                    <span>Portfolio Website</span>
                  </li>
                </ul>
                
                <a href="#" className="btn btn-primary w-full">
                  Choose Professional
                </a>
              </div>
            </div>
            
            {/* Premium Package */}
            <div className="card overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-gray-50 p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Premium Package</h3>
                <p className="text-gray-600 mb-4">Complete career transformation</p>
                <div className="text-3xl font-bold text-primary-900 mb-1">₹79</div>
                <p className="text-sm text-gray-600">One-time payment</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Resume Review & Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>LinkedIn Profile Building</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>2 Mock Interview Sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Career Counseling (60 mins)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Portfolio Website</span>
                  </li>
                </ul>
                
                <a href="#" className="btn btn-outline w-full">
                  Choose Premium
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Get answers to common questions about our services"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">How long does it take to receive my resume review?</h3>
              <p className="text-gray-600">
                You will receive your resume review within 48 hours of submission. For urgent requests, we offer an express service with 24-hour turnaround for an additional fee.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Can I request revisions to the work?</h3>
              <p className="text-gray-600">
                Yes, all our services include one round of revisions based on your feedback. Additional revision rounds are available at a nominal fee.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Who will be conducting my mock interview?</h3>
              <p className="text-gray-600">
                Mock interviews are conducted by industry professionals with relevant experience in your field. They provide authentic interview conditions and detailed feedback.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">How customized is the portfolio website?</h3>
              <p className="text-gray-600">
                Your portfolio website is fully customized based on your information, preferred template, and color scheme. We also offer additional customization options for an extra fee.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">
                We offer a satisfaction guarantee. If you're not happy with our services, we'll revise the work to meet your expectations or provide a partial refund as per our policy.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Can I upgrade my package later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade to a higher package by paying the difference in price. Contact our support team for assistance with package upgrades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="What Our Clients Say" 
            subtitle="Hear from individuals who have transformed their careers with our services"
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Ananya Mehta</h4>
                  <p className="text-sm text-gray-600">Product Manager</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The resume review service completely transformed my job application success rate. I went from rarely getting callbacks to receiving multiple interview invitations within weeks."
              </p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Rohan Kapoor</h4>
                  <p className="text-sm text-gray-600">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The mock interview sessions were incredibly realistic and helped me identify weaknesses in my responses. The detailed feedback was invaluable in preparing for my actual interviews."
              </p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/3813345/pexels-photo-3813345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Neha Gupta</h4>
                  <p className="text-sm text-gray-600">Digital Marketer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The career counseling session provided clarity on my next steps and helped me pivot from a stagnant role to an exciting new opportunity. Worth every penny of the investment."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Accelerate Your Career?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Choose the service that best fits your needs and take the first step towards your dream career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="btn bg-white text-primary-900 hover:bg-gray-100">
              View All Services
            </a>
            <a href="#" className="btn border-2 border-white text-white hover:bg-white/10">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;