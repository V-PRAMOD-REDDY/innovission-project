import React, { useState } from 'react';
import { Check, Upload, DollarSign, Download, FileUp, Link as LinkIcon } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const PortfolioPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    about: '',
    skills: '',
    education: '',
    experience: '',
    projects: '',
    links: '',
    resume: null,
    template: 'modern',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };
  
  const handleNext = () => {
    setStep(prev => prev + 1);
  };
  
  const handlePrev = () => {
    setStep(prev => prev - 1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, payment processing, etc.
    console.log('Form submitted:', formData);
    // Move to the confirmation step
    setStep(4);
  };

  return (
    <>
      <PageHeader 
        title="Portfolio Builder" 
        subtitle="Create a professional portfolio to showcase your skills and projects"
        backgroundImage="https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Steps Progress */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex items-center justify-center">
            <div className="flex items-center w-full max-w-3xl">
              {[1, 2, 3, 4].map((stepNumber) => (
                <React.Fragment key={stepNumber}>
                  <div 
                    className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      step >= stepNumber 
                        ? 'bg-primary-600 border-primary-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-500'
                    }`}
                  >
                    {step > stepNumber ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <span>{stepNumber}</span>
                    )}
                    
                    <div className="absolute -bottom-6 w-max text-center text-xs font-medium" style={{ left: '50%', transform: 'translateX(-50%)' }}>
                      {stepNumber === 1 && 'Personal Info'}
                      {stepNumber === 2 && 'Portfolio Content'}
                      {stepNumber === 3 && 'Payment'}
                      {stepNumber === 4 && 'Finished'}
                    </div>
                  </div>
                  
                  {stepNumber < 4 && (
                    <div 
                      className={`flex-1 h-1 mx-2 ${
                        step > stepNumber ? 'bg-primary-600' : 'bg-gray-300'
                      }`}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <>
                    <SectionTitle 
                      title="Personal Information" 
                      subtitle="Tell us about yourself so we can create your personalized portfolio"
                    />
                    
                    <form className="space-y-6 mt-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="John Doe"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                            Professional Title <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Software Engineer"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="john@example.com"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="+91 9876543210"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-1">
                          About Me <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="about"
                          name="about"
                          value={formData.about}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Write a brief introduction about yourself..."
                        ></textarea>
                      </div>
                      
                      <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                          Upload Your Resume (Optional)
                        </label>
                        <div className="flex items-center justify-center w-full">
                          <label
                            htmlFor="resume"
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-10 h-10 mb-3 text-gray-400" />
                              <p className="mb-2 text-sm text-gray-500">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                              </p>
                              <p className="text-xs text-gray-500">PDF, DOCX (MAX. 5MB)</p>
                            </div>
                            <input
                              id="resume"
                              name="resume"
                              type="file"
                              className="hidden"
                              accept=".pdf,.docx"
                              onChange={handleFileChange}
                            />
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={handleNext}
                          className="btn btn-primary"
                        >
                          Next Step
                        </button>
                      </div>
                    </form>
                  </>
                )}
                
                {/* Step 2: Portfolio Content */}
                {step === 2 && (
                  <>
                    <SectionTitle 
                      title="Portfolio Content" 
                      subtitle="Add your skills, experience, and projects to showcase in your portfolio"
                    />
                    
                    <form className="space-y-6 mt-8">
                      <div>
                        <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
                          Skills <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="skills"
                          name="skills"
                          value={formData.skills}
                          onChange={handleChange}
                          required
                          rows={3}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="List your skills, separated by commas (e.g., JavaScript, React, Node.js, Python)"
                        ></textarea>
                      </div>
                      
                      <div>
                        <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                          Education <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="education"
                          name="education"
                          value={formData.education}
                          onChange={handleChange}
                          required
                          rows={3}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Describe your educational background..."
                        ></textarea>
                      </div>
                      
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                          Work Experience <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Describe your work experience..."
                        ></textarea>
                      </div>
                      
                      <div>
                        <label htmlFor="projects" className="block text-sm font-medium text-gray-700 mb-1">
                          Projects <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="projects"
                          name="projects"
                          value={formData.projects}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Describe your key projects..."
                        ></textarea>
                      </div>
                      
                      <div>
                        <label htmlFor="links" className="block text-sm font-medium text-gray-700 mb-1">
                          Social & Professional Links
                        </label>
                        <textarea
                          id="links"
                          name="links"
                          value={formData.links}
                          onChange={handleChange}
                          rows={3}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="LinkedIn, GitHub, personal website, etc. (one per line)"
                        ></textarea>
                      </div>
                      
                      <div>
                        <label htmlFor="template" className="block text-sm font-medium text-gray-700 mb-1">
                          Choose Template <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="template"
                          name="template"
                          value={formData.template}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="modern">Modern</option>
                          <option value="professional">Professional</option>
                          <option value="creative">Creative</option>
                          <option value="minimal">Minimal</option>
                        </select>
                      </div>
                      
                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="btn btn-outline"
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="btn btn-primary"
                        >
                          Next Step
                        </button>
                      </div>
                    </form>
                  </>
                )}
                
                {/* Step 3: Payment */}
                {step === 3 && (
                  <>
                    <SectionTitle 
                      title="Payment" 
                      subtitle="Complete your payment to generate your portfolio"
                    />
                    
                    <div className="mt-8">
                      <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 mb-8">
                        <div className="flex items-center mb-4">
                          <DollarSign className="h-6 w-6 text-primary-600 mr-2" />
                          <h3 className="text-lg font-semibold text-gray-900">Portfolio Builder Service</h3>
                        </div>
                        
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Professional Portfolio PDF Generation</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Shareable Online Portfolio Link</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>30-days Free Updates</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Personal Domain for 1 Year (Optional)</span>
                          </li>
                        </ul>
                        
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary-900 mb-1">₹21 only</div>
                          <p className="text-sm text-gray-600">One-time payment</p>
                        </div>
                      </div>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
                          <div className="text-center mb-4">
                            <p className="text-gray-700">Secure payment powered by Razorpay</p>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  name="payment_method"
                                  value="upi"
                                  className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                                  defaultChecked
                                />
                                <span className="ml-2">UPI</span>
                              </label>
                            </div>
                            
                            <div>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  name="payment_method"
                                  value="card"
                                  className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                                />
                                <span className="ml-2">Credit/Debit Card</span>
                              </label>
                            </div>
                            
                            <div>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  name="payment_method"
                                  value="netbanking"
                                  className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                                />
                                <span className="ml-2">Net Banking</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between">
                          <button
                            type="button"
                            onClick={handlePrev}
                            className="btn btn-outline"
                          >
                            Previous
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary"
                          >
                            Pay ₹21 and Generate Portfolio
                          </button>
                        </div>
                      </form>
                    </div>
                  </>
                )}
                
                {/* Step 4: Confirmation */}
                {step === 4 && (
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-green-100 text-green-600 mb-6">
                      <Check className="h-12 w-12" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
                    <p className="text-gray-600 mb-8">Your portfolio is being generated and will be ready shortly.</p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                      <h3 className="text-lg font-semibold mb-4">Your Portfolio Files</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                          <div className="flex items-center">
                            <FileUp className="h-6 w-6 text-gray-500 mr-3" />
                            <span>Portfolio_John_Doe.pdf</span>
                          </div>
                          <button className="text-primary-600 hover:text-primary-800 flex items-center">
                            <Download className="h-5 w-5 mr-1" />
                            Download
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                          <div className="flex items-center">
                            <LinkIcon className="h-6 w-6 text-gray-500 mr-3" />
                            <span>portfolio.upskillbharat.com/john-doe</span>
                          </div>
                          <button className="text-primary-600 hover:text-primary-800 flex items-center">
                            <LinkIcon className="h-5 w-5 mr-1" />
                            Copy Link
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <button className="btn btn-primary w-full">
                        View Your Online Portfolio
                      </button>
                      <a href="/" className="btn btn-outline w-full">
                        Back to Home
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Why Choose Our Portfolio Builder?" 
            subtitle="Stand out from the crowd with a professional portfolio"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <FileUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
              <p className="text-gray-600">
                Choose from our collection of professionally designed templates that highlight your skills and experience effectively.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <LinkIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Shareable Link</h3>
              <p className="text-gray-600">
                Get a unique, shareable link to your online portfolio that you can include in job applications and on your resume.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Download className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Downloadable PDF</h3>
              <p className="text-gray-600">
                Download a PDF version of your portfolio to share offline or attach to email applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Success Stories" 
            subtitle="See how our portfolio builder has helped others land their dream jobs"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Rahul Singh</h4>
                  <p className="text-sm text-gray-600">Software Engineer at Google</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The portfolio builder made a huge difference in my job search. I received multiple interview calls after sharing my portfolio link with recruiters."
              </p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Thanvika</h4>
                  <p className="text-sm text-gray-600">UX Designer at Microsoft</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As a designer, having a visually appealing portfolio was crucial. This tool helped me showcase my work professionally and land my dream job."
              </p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Vikram Patel</h4>
                  <p className="text-sm text-gray-600">Data Scientist at Amazon</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The portfolio builder helped me organize my projects and experience in a way that highlighted my data science expertise. Worth every rupee!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;