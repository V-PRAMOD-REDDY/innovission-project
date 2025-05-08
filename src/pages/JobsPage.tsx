import React, { useState } from 'react';
import { BookOpen, CheckCircle, BookCheck, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const JobsPage = () => {
  const [activeTab, setActiveTab] = useState('aptitude');
  
  return (
    <>
      <PageHeader 
        title="Jobs & Career Tips" 
        subtitle="Resources to prepare for interviews and advance your career"
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Tabs Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="flex flex-wrap border-b mb-8">
            <button
              onClick={() => setActiveTab('aptitude')}
              className={`px-6 py-3 font-medium text-gray-600 -mb-px ${
                activeTab === 'aptitude' 
                  ? 'border-b-2 border-primary-600 text-primary-600' 
                  : 'hover:text-primary-600'
              }`}
            >
              Aptitude Practice
            </button>
            <button
              onClick={() => setActiveTab('interview')}
              className={`px-6 py-3 font-medium text-gray-600 -mb-px ${
                activeTab === 'interview' 
                  ? 'border-b-2 border-primary-600 text-primary-600' 
                  : 'hover:text-primary-600'
              }`}
            >
              Interview FAQs
            </button>
            <button
              onClick={() => setActiveTab('tips')}
              className={`px-6 py-3 font-medium text-gray-600 -mb-px ${
                activeTab === 'tips' 
                  ? 'border-b-2 border-primary-600 text-primary-600' 
                  : 'hover:text-primary-600'
              }`}
            >
              Career Tips
            </button>
          </div>
          
          {/* Aptitude Practice Content */}
          {activeTab === 'aptitude' && (
            <div>
              <SectionTitle 
                title="Aptitude Practice" 
                subtitle="Prepare for aptitude tests with our curated practice questions"
              />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {/* Quantitative Aptitude */}
                <div className="card p-6">
                  <div className="p-4 mb-4 inline-block bg-primary-50 rounded-xl text-primary-600">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Quantitative Aptitude</h3>
                  <p className="text-gray-600 mb-4">
                    Practice numerical ability, data interpretation, and mathematical reasoning questions frequently asked in competitive exams.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">400+ practice questions</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">Topic-wise organization</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">Detailed solutions</span>
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="flex items-center text-primary-600 font-medium hover:text-primary-800 transition-all"
                  >
                    Start Practicing
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                
                {/* Logical Reasoning */}
                <div className="card p-6">
                  <div className="p-4 mb-4 inline-block bg-primary-50 rounded-xl text-primary-600">
                    <BookCheck className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Logical Reasoning</h3>
                  <p className="text-gray-600 mb-4">
                    Enhance your analytical thinking with puzzles, syllogisms, and logical deduction problems common in placement tests.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">350+ practice questions</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">Interactive puzzles</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">Step-by-step explanations</span>
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="flex items-center text-primary-600 font-medium hover:text-primary-800 transition-all"
                  >
                    Start Practicing
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                
                {/* Verbal Ability */}
                <div className="card p-6">
                  <div className="p-4 mb-4 inline-block bg-primary-50 rounded-xl text-primary-600">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Verbal Ability</h3>
                  <p className="text-gray-600 mb-4">
                    Improve your language skills with vocabulary, grammar, reading comprehension, and verbal reasoning exercises.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">300+ practice questions</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">Comprehension passages</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">Grammar tips and tricks</span>
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="flex items-center text-primary-600 font-medium hover:text-primary-800 transition-all"
                  >
                    Start Practicing
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
              
              {/* Sample MCQ */}
              <div className="mt-16">
                <h3 className="text-xl font-semibold mb-6">Sample Practice Questions</h3>
                
                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="font-medium mb-4">1. If the simple interest on a sum of money at 5% per annum for 3 years is Rs. 1,500, what is the principal amount?</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="q1-a" name="q1" className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                        <label htmlFor="q1-a" className="ml-2 text-gray-700">Rs. 8,000</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q1-b" name="q1" className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                        <label htmlFor="q1-b" className="ml-2 text-gray-700">Rs. 9,000</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q1-c" name="q1" className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                        <label htmlFor="q1-c" className="ml-2 text-gray-700">Rs. 10,000</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q1-d" name="q1" className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                        <label htmlFor="q1-d" className="ml-2 text-gray-700">Rs. 12,000</label>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="text-primary-600 font-medium">Show Solution</button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="font-medium mb-4">2. If all Zips are Zaps and some Zaps are Zops, which of the following statements must be true?</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="q2-a" name="q2" className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                        <label htmlFor="q2-a" className="ml-2 text-gray-700">All Zops are Zips</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q2-b" name="q2" className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                        <label htmlFor="q2-b" className="ml-2 text-gray-700">Some Zips are Zops</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q2-c" name="q2" className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                        <label htmlFor="q2-c" className="ml-2 text-gray-700">No Zips are Zops</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q2-d" name="q2" className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                        <label htmlFor="q2-d" className="ml-2 text-gray-700">All Zops are Zaps</label>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="text-primary-600 font-medium">Show Solution</button>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <a href="#" className="btn btn-primary">
                    Take Full Practice Test
                  </a>
                </div>
              </div>
            </div>
          )}
          
          {/* Interview FAQs Content */}
          {activeTab === 'interview' && (
            <div>
              <SectionTitle 
                title="Interview FAQs" 
                subtitle="Common interview questions and expert guidance on how to answer them"
              />
              
              <div className="mt-12">
                <div className="space-y-6">
                  {/* General Questions */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">General Questions</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex items-center justify-between w-full px-6 py-4 text-left font-medium text-gray-900">
                          <span>Tell me about yourself</span>
                          <ArrowRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex items-center justify-between w-full px-6 py-4 text-left font-medium text-gray-900">
                          <span>What are your strengths and weaknesses?</span>
                          <ArrowRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex items-center justify-between w-full px-6 py-4 text-left font-medium text-gray-900">
                          <span>Where do you see yourself in 5 years?</span>
                          <ArrowRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex items-center justify-between w-full px-6 py-4 text-left font-medium text-gray-900">
                          <span>Why should we hire you?</span>
                          <ArrowRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex items-center justify-between w-full px-6 py-4 text-left font-medium text-gray-900">
                          <span>Why do you want to work for our company?</span>
                          <ArrowRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Technical Questions */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Technical Questions</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex items-center justify-between w-full px-6 py-4 text-left font-medium text-gray-900">
                          <span>Explain your approach to problem-solving</span>
                          <ArrowRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex items-center justify-between w-full px-6 py-4 text-left font-medium text-gray-900">
                          <span>How do you stay updated with the latest technologies?</span>
                          <ArrowRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex items-center justify-between w-full px-6 py-4 text-left font-medium text-gray-900">
                          <span>Describe a challenging project you've worked on</span>
                          <ArrowRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex items-center justify-between w-full px-6 py-4 text-left font-medium text-gray-900">
                          <span>How do you handle tight deadlines?</span>
                          <ArrowRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex items-center justify-between w-full px-6 py-4 text-left font-medium text-gray-900">
                          <span>What tools or software are you proficient in?</span>
                          <ArrowRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Behavioral Questions */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Behavioral Questions</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex items-center justify-between w-full px-6 py-4 text-left font-medium text-gray-900">
                          <span>Tell me about a time you had a conflict with a colleague</span>
                          <ArrowRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex items-center justify-between w-full px-6 py-4 text-left font-medium text-gray-900">
                          <span>Describe a situation where you showed leadership</span>
                          <ArrowRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex items-center justify-between w-full px-6 py-4 text-left font-medium text-gray-900">
                          <span>Give an example of how you handled a failure</span>
                          <ArrowRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex items-center justify-between w-full px-6 py-4 text-left font-medium text-gray-900">
                          <span>How do you work in a team?</span>
                          <ArrowRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex items-center justify-between w-full px-6 py-4 text-left font-medium text-gray-900">
                          <span>Tell me about a time you went above and beyond</span>
                          <ArrowRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-primary-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Interview Preparation Services</h3>
                  <p className="text-gray-600 mb-4">
                    Want personalized feedback on your interview skills? Try our mock interview service with industry professionals.
                  </p>
                  <a href="/services" className="btn btn-primary">
                    Book a Mock Interview
                  </a>
                </div>
              </div>
            </div>
          )}
          
          {/* Career Tips Content */}
          {activeTab === 'tips' && (
            <div>
              <SectionTitle 
                title="Career Tips" 
                subtitle="Practical advice to help you advance in your professional journey"
              />
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="card overflow-hidden group">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Networking Tips" 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">7 Effective Networking Tips for Career Growth</h3>
                    <p className="text-gray-600 mb-4">
                      Learn how to build meaningful professional relationships that can accelerate your career progression.
                    </p>
                    <a 
                      href="#" 
                      className="flex items-center text-primary-600 font-medium group-hover:text-primary-800 transition-all"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
                
                <div className="card overflow-hidden group">
                  <img 
                    src="https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Resume Writing" 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">Resume Writing: 10 Mistakes to Avoid</h3>
                    <p className="text-gray-600 mb-4">
                      Discover common resume pitfalls that could be costing you interview opportunities and how to fix them.
                    </p>
                    <a 
                      href="#" 
                      className="flex items-center text-primary-600 font-medium group-hover:text-primary-800 transition-all"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
                
                <div className="card overflow-hidden group">
                  <img 
                    src="https://images.pexels.com/photos/3184608/pexels-photo-3184608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Remote Work" 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">Mastering Remote Work: Tips for Productivity</h3>
                    <p className="text-gray-600 mb-4">
                      Strategies to stay productive, maintain work-life balance, and thrive in a remote work environment.
                    </p>
                    <a 
                      href="#" 
                      className="flex items-center text-primary-600 font-medium group-hover:text-primary-800 transition-all"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
                
                <div className="card overflow-hidden group">
                  <img 
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Salary Negotiation" 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">The Art of Salary Negotiation</h3>
                    <p className="text-gray-600 mb-4">
                      Learn effective techniques to negotiate your salary confidently and secure the compensation you deserve.
                    </p>
                    <a 
                      href="#" 
                      className="flex items-center text-primary-600 font-medium group-hover:text-primary-800 transition-all"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">Daily Career Tip</h3>
                
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-6">
                  <p className="text-lg italic text-gray-700 mb-4">
                    "Always quantify your achievements on your resume. Instead of saying 'Improved sales,' say 'Increased sales by 35% in 6 months.' Specific numbers make your accomplishments more credible and impressive."
                  </p>
                  <p className="text-right text-primary-600 font-medium">- Career Advice Team</p>
                </div>
                
                <div className="text-center mt-8">
                  <a href="#" className="btn btn-primary">
                    Subscribe to Daily Tips
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Job Board Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Featured Job Opportunities" 
            subtitle="Explore curated job openings from our partner companies"
            align="center"
          />
          
          <div className="mt-12 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
                  <p className="text-primary-600 mb-4">TechCorp India • Bangalore, Karnataka</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">2-4 Years</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <a href="#" className="btn btn-primary">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data Analyst</h3>
                  <p className="text-primary-600 mb-4">FinTech Solutions • Hyderabad, Telangana</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">SQL</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Tableau</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">1-3 Years</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <a href="#" className="btn btn-primary">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Digital Marketing Specialist</h3>
                  <p className="text-primary-600 mb-4">GrowthMax • Remote</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">SEO</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Social Media</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Content Strategy</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">2-5 Years</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <a href="#" className="btn btn-primary">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a href="#" className="btn btn-outline">
              View All Job Listings
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to advance your career?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Get personalized guidance from industry experts to navigate your career path and achieve your professional goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/services" className="btn bg-white text-primary-900 hover:bg-gray-100">
                Explore Career Services
              </a>
              <a href="/community" className="btn border-2 border-white text-white hover:bg-white/10">
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobsPage;