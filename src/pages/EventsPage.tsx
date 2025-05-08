import React, { useState } from 'react';
import { Calendar, Users, MapPin, Filter, X } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import EventCard from '../components/EventCard';
import eventsData from '../data/events';

const EventsPage = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past' | 'campaign'>('all');
  
  const filteredEvents = filter === 'all' 
    ? eventsData 
    : eventsData.filter(event => event.type === filter);

  return (
    <>
      <PageHeader 
        title="Events & Campaigns" 
        subtitle="Participate in our workshops, hackathons, and skill-building events"
        backgroundImage="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Featured Campaign */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8 md:p-12">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent-500 text-white mb-6">
                  Featured Campaign
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  NCAT 2025 Preparation Campaign
                </h2>
                <p className="text-xl text-primary-100 mb-6">
                  A comprehensive preparation program for the National Common Aptitude Test 2025. Get expert guidance, practice materials, and personalized feedback.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-primary-100">
                    <Calendar className="h-5 w-5 mr-2 text-primary-300" />
                    <span>Ongoing (June - December 2024)</span>
                  </div>
                  <div className="flex items-center text-primary-100">
                    <MapPin className="h-5 w-5 mr-2 text-primary-300" />
                    <span>Multiple Locations & Online</span>
                  </div>
                  <div className="flex items-center text-primary-100">
                    <Users className="h-5 w-5 mr-2 text-primary-300" />
                    <span>2450+ Registered Students</span>
                  </div>
                </div>
                <a href="#" className="btn bg-white text-primary-900 hover:bg-gray-100">
                  Join The Campaign
                </a>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="NCAT 2025 Preparation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Listing */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Upcoming & Past Events" 
            subtitle="Expand your knowledge and network with our events"
            align="center"
          />
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'upcoming' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('campaign')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'campaign' 
                  ? 'bg-accent-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Campaigns
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'past' 
                  ? 'bg-gray-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Past Events
            </button>
          </div>
          
          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No events found for the selected filter.</p>
              <button
                onClick={() => setFilter('all')}
                className="mt-4 btn btn-primary"
              >
                View All Events
              </button>
            </div>
          )}
        </div>
      </section>

      {/* NCAT Campaign Details */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="NCAT 2025 Preparation" 
                subtitle="Comprehensive support for one of India's most competitive exams"
              />
              
              <p className="text-gray-600 mb-6">
                The National Common Aptitude Test (NCAT) is a highly competitive examination that serves as a gateway to some of India's premier educational institutions and job opportunities. Our NCAT 2025 Preparation Campaign is designed to provide you with all the resources you need to excel in this exam.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Expert Faculty</h4>
                  <p className="text-gray-600">Learn from instructors who have helped thousands of students crack competitive exams. Get insider tips and strategies that work.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Comprehensive Study Material</h4>
                  <p className="text-gray-600">Access structured study materials, practice questions, and mock tests designed to cover the entire NCAT syllabus.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Regular Mock Tests</h4>
                  <p className="text-gray-600">Practice with weekly mock tests that simulate the actual exam environment and difficulty level.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Personalized Feedback</h4>
                  <p className="text-gray-600">Receive detailed analysis of your performance and personalized recommendations to improve your weak areas.</p>
                </div>
              </div>
              
              <a href="#" className="btn btn-primary">
                Join the Campaign
              </a>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="NCAT Preparation" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Monthly Workshop Schedule" 
            subtitle="Plan ahead with our regular workshops and events"
            align="center"
          />
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mt-12">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Workshop</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">July 10, 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Python Programming Fundamentals</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Dr. Rajiv Kumar</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Online</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Open for Registration</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">July 15, 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Resume Building Workshop</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Priya Singh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Bengaluru</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Open for Registration</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">July 22, 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mock Interview Session</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Vikram Mehta</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Online</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">Filling Fast</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">July 28, 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Web Development Basics</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Anita Desai</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Hyderabad</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">Almost Full</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">August 5, 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">LinkedIn Profile Optimization</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Neha Gupta</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Online</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Open for Registration</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a href="#" className="btn btn-primary">
              View Full Schedule
            </a>
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 md:p-12">
            <div className="md:flex items-center justify-between">
              <div className="md:max-w-2xl">
                <SectionTitle 
                  title="Want to Host an Event with Us?" 
                  subtitle="Collaborate with Upskill Bharat to organize workshops, hackathons, or tech talks at your institution or organization"
                />
                <p className="text-gray-600 mb-6">
                  We partner with educational institutions, tech companies, and community organizations to bring valuable learning experiences to diverse audiences. Let's work together to create impactful events!
                </p>
                <a href="#" className="btn btn-primary">
                  Partner With Us
                </a>
              </div>
              <div className="md:w-1/3 mt-8 md:mt-0">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Collaboration" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;