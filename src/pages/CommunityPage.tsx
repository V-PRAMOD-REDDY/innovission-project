// Removed unused React import
import { Users, MessageSquare, ExternalLink, Bird, Shield, Award, Heart } from 'lucide-react'; // Replaced Twitter with Bird
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const CommunityPage = () => {
  const contributors = [
    {
      name: 'Rahul Sharma',
      role: 'Web Development Mentor',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      contributions: 120,
    },
    {
      name: 'Priya Patel',
      role: 'Python Instructor',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600',
      contributions: 95,
    },
    {
      name: 'Vikram Singh',
      role: 'Career Counselor',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
      contributions: 87,
    },
    {
      name: 'Ananya Reddy',
      role: 'AI Specialist',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
      contributions: 75,
    },
  ];

  return (
    <>
      <PageHeader 
        title="Join Our Community" 
        subtitle="Connect, learn, and grow with fellow students and professionals"
        backgroundImage="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Community Platforms */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Connect With Us" 
            subtitle="Join our vibrant community on various platforms"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Telegram Group */}
            <div className="card p-8 text-center hover:-translate-y-1 transition-transform">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#0088cc]/10 text-[#0088cc] mb-4">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Telegram Community</h3>
              <p className="text-gray-600 mb-6">
                Join our active Telegram group for daily updates, resources, and quick doubt-clearing sessions.
              </p>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-900">15K+</span>
                  <span className="text-sm text-gray-600">Members</span>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-900">200+</span>
                  <span className="text-sm text-gray-600">Daily Messages</span>
                </div>
              </div>
              <a 
                href="#telegram" 
                className="btn bg-[#0088cc] text-white hover:bg-[#0077b5] w-full flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Telegram Group
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            {/* Discord Server */}
            <div className="card p-8 text-center hover:-translate-y-1 transition-transform">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#5865F2]/10 text-[#5865F2] mb-4">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.49197C18.787 3.80197 17.147 3.29197 15.432 3.00197C15.4167 2.99843 15.4009 3.00097 15.3868 3.00929C15.3726 3.01761 15.3607 3.03133 15.352 3.04797C15.157 3.40797 14.942 3.87197 14.792 4.23997C12.8979 3.95635 10.9709 3.95635 9.07701 4.23997C8.92235 3.859 8.73541 3.49487 8.51801 3.14797C8.5091 3.13137 8.49708 3.11774 8.48278 3.10949C8.46848 3.10124 8.45231 3.09871 8.43701 3.10197C6.72401 3.38997 5.08401 3.89997 3.55301 4.59097C3.53759 4.59788 3.52485 4.60967 3.51701 4.62397C0.517012 9.27597 -0.310988 13.8059 0.0970119 18.269C0.0991177 18.2906 0.106382 18.3113 0.118012 18.329C2.04901 19.8179 4.24118 20.88 6.55001 21.454C6.56552 21.4584 6.58203 21.4584 6.59754 21.454C6.61305 21.4496 6.62685 21.4409 6.63701 21.429C7.13401 20.754 7.58101 20.039 7.96001 19.284C7.96557 19.2725 7.96844 19.2597 7.96844 19.2466C7.96844 19.2336 7.96557 19.2207 7.96001 19.2093C7.9553 19.1986 7.94812 19.1896 7.93904 19.1832C7.92996 19.1767 7.91928 19.173 7.90801 19.172C7.20401 18.924 6.52501 18.62 5.87701 18.267C5.86548 18.2608 5.85589 18.2508 5.84949 18.2383C5.84309 18.2258 5.84012 18.2114 5.84101 18.197C5.8419 18.1825 5.84661 18.1686 5.85458 18.1569C5.86255 18.1453 5.87343 18.1364 5.88601 18.131C6.00901 18.039 6.13201 17.942 6.24901 17.845C6.26187 17.8343 6.27732 17.8274 6.29396 17.8251C6.3106 17.8228 6.32774 17.8251 6.34301 17.832C10.535 19.752 15.012 19.752 19.158 17.832C19.1733 17.8243 19.1907 17.8214 19.2076 17.8233C19.2246 17.8253 19.2404 17.8321 19.253 17.842C19.37 17.939 19.493 18.039 19.617 18.131C19.6296 18.1362 19.6407 18.145 19.6488 18.1565C19.657 18.1679 19.6619 18.1817 19.663 18.196C19.6641 18.2104 19.6614 18.2248 19.6552 18.2373C19.649 18.2498 19.6397 18.26 19.628 18.266C18.9833 18.6229 18.304 18.9238 17.597 19.166C17.5856 19.1696 17.5751 19.176 17.5666 19.1848C17.558 19.1935 17.5516 19.2045 17.548 19.2166C17.5447 19.2286 17.5443 19.2413 17.5468 19.2535C17.5493 19.2658 17.5547 19.2773 17.563 19.287C17.953 20.042 18.403 20.754 18.891 21.429C18.9011 21.4412 18.9149 21.4501 18.9305 21.4547C18.9461 21.4593 18.9628 21.4593 18.9784 21.4547C21.2894 20.8822 23.4838 19.8201 25.417 18.329C25.4287 18.321 25.4383 18.3107 25.4454 18.2988C25.4525 18.2869 25.4569 18.2736 25.458 18.26C25.954 13.039 24.612 8.54597 21.983 4.62397C21.9757 4.6094 21.9628 4.59752 21.947 4.59097V4.49197H20.317ZM8.56301 15.428C7.29001 15.428 6.23701 14.235 6.23701 12.777C6.23701 11.319 7.27001 10.126 8.56301 10.126C9.86701 10.126 10.91 11.326 10.889 12.777C10.889 14.235 9.85601 15.428 8.56301 15.428ZM15.473 15.428C14.2 15.428 13.147 14.235 13.147 12.777C13.147 11.319 14.18 10.126 15.473 10.126C16.777 10.126 17.82 11.326 17.799 12.777C17.799 14.235 16.777 15.428 15.473 15.428Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discord Server</h3>
              <p className="text-gray-600 mb-6">
                Join our Discord server for voice discussions, code reviews, and collaborative learning.
              </p>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-900">8K+</span>
                  <span className="text-sm text-gray-600">Members</span>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-900">12+</span>
                  <span className="text-sm text-gray-600">Channels</span>
                </div>
              </div>
              <a 
                href="#discord" 
                className="btn bg-[#5865F2] text-white hover:bg-[#4752C4] w-full flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord Server
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            {/* Twitter Community */}
            <div className="card p-8 text-center hover:-translate-y-1 transition-transform">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] mb-4">
                <Bird className="h-8 w-8" /> {/* Replaced Twitter with Bird */}
              </div>
              <h3 className="text-xl font-semibold mb-2">Twitter Community</h3>
              <p className="text-gray-600 mb-6">
                Follow us on Twitter for career tips, industry news, and announcements about upcoming events.
              </p>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-900">20K+</span>
                  <span className="text-sm text-gray-600">Followers</span>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-900">5+</span>
                  <span className="text-sm text-gray-600">Daily Posts</span>
                </div>
              </div>
              <a 
                href="#twitter" 
                className="btn bg-[#1DA1F2] text-white hover:bg-[#0d8ecf] w-full flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Twitter
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Community Guidelines" 
                subtitle="Our principles for fostering a supportive and inclusive community"
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Respect Everyone</h3>
                    <p className="text-gray-600">
                      Treat all community members with respect, regardless of their background, experience level, or opinions.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Constructive Communication</h3>
                    <p className="text-gray-600">
                      Provide constructive feedback and engage in meaningful discussions that help everyone learn and grow.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Help Others</h3>
                    <p className="text-gray-600">
                      Share your knowledge and support fellow community members in their learning journey. We grow together.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <Heart className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Stay Positive</h3>
                    <p className="text-gray-600">
                      Maintain a positive attitude and create an encouraging environment where everyone feels welcome.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Community Guidelines" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Top Contributors" 
            subtitle="Celebrating members who make our community vibrant and helpful"
            align="center"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {contributors.map((contributor, index) => (
              <div key={index} className="card p-6 text-center hover:-translate-y-1 transition-transform">
                <div className="relative mb-6">
                  <img 
                    src={contributor.avatar} 
                    alt={contributor.name} 
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary-100"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white rounded-full h-8 w-8 flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-1">{contributor.name}</h3>
                <p className="text-primary-600 text-sm mb-4">{contributor.role}</p>
                <div className="flex items-center justify-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium">{contributor.contributions} Contributions</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="#" className="btn btn-outline">
              View All Contributors
            </a>
          </div>
        </div>
      </section>

      {/* Community Statistics */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Growing Community</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">25K+</div>
              <p className="text-primary-100">Community Members</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <p className="text-primary-100">Monthly Events</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">12+</div>
              <p className="text-primary-100">Partner Organizations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <p className="text-primary-100">Success Stories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Community Voices" 
            subtitle="Hear what our members have to say about their experience"
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Arjun Kapoor</h4>
                  <p className="text-sm text-gray-600">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The peer-to-peer learning in this community has been invaluable. I've learned more from the daily discussions and code reviews than I did in months of self-study."
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
                  <h4 className="font-semibold">Neha Sharma</h4>
                  <p className="text-sm text-gray-600">Data Scientist</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As someone transitioning into tech, I found the support and guidance from this community to be incredibly welcoming. The mentors are always willing to help."
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
                  <h4 className="font-semibold">Rohit Verma</h4>
                  <p className="text-sm text-gray-600">Startup Founder</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The network I've built through this community has been instrumental in launching my startup. I found co-founders, advisors, and early users all within this ecosystem."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/7941991/pexels-photo-7941991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Dashboard Preview" 
                className="rounded-lg shadow-xl"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <SectionTitle 
                title="Community Dashboard" 
                subtitle="Track your progress and engage with the community through our interactive dashboard"
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <Award className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Achievement Tracking</h3>
                    <p className="text-gray-600">
                      Monitor your learning progress, earn badges, and celebrate milestones along your upskilling journey.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Peer Connections</h3>
                    <p className="text-gray-600">
                      Connect with learners who share your interests, collaborate on projects, and grow together.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Forums & Discussions</h3>
                    <p className="text-gray-600">
                      Participate in topic-specific discussions, ask questions, and share your knowledge with the community.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#" className="btn btn-primary">
                  Join to Access Dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to join our community?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Connect with like-minded individuals, learn from experts, and accelerate your professional growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#telegram" 
              className="btn bg-white text-primary-900 hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Telegram Group
            </a>
            <a 
              href="#discord" 
              className="btn bg-[#5865F2] text-white hover:bg-[#4752C4]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord Server
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunityPage;