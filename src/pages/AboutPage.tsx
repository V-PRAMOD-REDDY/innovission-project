import { ExternalLink, Target, Lightbulb, Users, Heart } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const AboutPage = () => {
  return (
    <>
      <PageHeader 
        title="About Innovission" 
        subtitle="Empowering students and job seekers to develop skills for the future"
        backgroundImage="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Mission" 
                subtitle="Bridging the skills gap for a better future"
              />
              <p className="text-gray-600 mb-6">
                At Innovission, we believe that everyone deserves access to quality education and career growth opportunities. Our mission is to bridge the skills gap in India by providing affordable, accessible, and practical learning experiences.
              </p>
              <p className="text-gray-600 mb-6">
                We're committed to helping students and job seekers develop the technical, professional, and soft skills needed to thrive in today's competitive job market. Through our platform, we aim to create a community of lifelong learners who support each other on their journey to success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="btn btn-primary">
                  Our Values
                </a>
                <a href="#" className="btn btn-outline">
                  Our Team
                </a>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our Mission" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="The principles that guide everything we do"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="card p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-600">
                Making quality education accessible to everyone regardless of their background or financial constraints.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary-100 text-secondary-600 mb-4">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Constantly evolving our teaching methods and curriculum to keep pace with industry trends.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent-100 text-accent-600 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Fostering a supportive learning environment where peers help each other grow and succeed.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="text-gray-600">
                Measuring our success by the positive difference we make in our students' lives and careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Collaboration with Innovision" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <SectionTitle 
                title="Collaboration with Innovision" 
                subtitle="Strategic partnerships to enhance learning experiences"
              />
              <p className="text-gray-600 mb-6">
                Our collaboration with Innovision Tech Solutions allows us to offer cutting-edge courses in emerging technologies. Together, we provide students with industry-relevant skills and hands-on experience with real-world projects.
              </p>
              <p className="text-gray-600 mb-6">
                This partnership also enables us to connect our students with potential employers, organize tech meetups, and provide mentorship from industry experts.
              </p>
              <a 
                href="#" 
                className="btn btn-primary flex items-center w-fit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More About Our Partnership
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Section */}
      <section className="section-padding bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-custom">
          <SectionTitle 
            title="NCAT 2025 Preparation Campaign" 
            subtitle="Comprehensive support for one of India's most competitive exams"
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Faculty</h3>
              <p className="text-primary-100">
                Learn from experienced faculty who have helped thousands of students crack competitive exams. Get insights, tips, and strategies that work.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Comprehensive Study Material</h3>
              <p className="text-primary-100">
                Access well-structured study materials, practice questions, and mock tests designed to cover the entire NCAT syllabus.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Personalized Feedback</h3>
              <p className="text-primary-100">
                Receive detailed analysis of your performance in mock tests and personalized recommendations to improve your weak areas.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/events" className="btn bg-white text-primary-900 hover:bg-gray-100">
              Join the Campaign
            </a>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Founder's Story" 
            subtitle="The journey behind Upskill Bharat"
            align="center"
          />
          
            <div className="card p-8 md:p-12 mt-12">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <img 
              src="/src/Assets/Pramod.jpg" 
              alt="Founder" 
              className="rounded-full w-32 h-32 object-cover border-4 border-primary-100"
              />
              <div>
              <h3 className="text-2xl font-semibold mb-2">V Pramod Reddy</h3>
              <p className="text-primary-600 mb-4">Founder & CEO, Innovission</p>
              <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-primary-600">
              <ExternalLink className="h-5 w-5" />
              </a>
              </div>
              </div>
            </div>
            
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
              As a passionate engineering student and emerging educator, I’ve seen how students often struggle to connect what they learn in college with real-world applications. The growing gap between academic learning and practical skills motivated me to start Innovission – a platform built to empower students through innovative, hands-on learning experiences.</p>
              <p className="mb-4">
              I began by sharing coding tips, design tutorials, and career insights online. What started as a small initiative has now grown into a vibrant community of learners and creators who believe in the power of "Upskill Bharat." With every post, project, and workshop, we’re building a bridge between knowledge and opportunity.</p>
              <p>
              The journey hasn’t been easy, but the impact we see in students’ growth keeps us going. From a team of passionate peers, we’ve reached hundreds of learners and are growing every day. We’re just getting started – and I invite you to join us on this mission to learn, build, and innovate for a better tomorrow.

</p>
            </div>
            </div>

            <div className="card p-8 md:p-12 mt-12">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <img 
              src="https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Co-Founder" 
              className="rounded-full w-32 h-32 object-cover border-4 border-primary-100"
              />
              <div>
              <h3 className="text-2xl font-semibold mb-2">K S Hemanth Kumar</h3>
              <p className="text-primary-600 mb-4">Founder & COO, Innovission</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-primary-600">
                <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              </div>
            </div>
            
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
              With a background in technology and a passion for education, I joined Innovission to help bridge the gap between academia and industry. My journey began as a software engineer, but I soon realized my calling was to empower others to achieve their career goals.
              </p>
              <p className="mb-4">
              At Innovission, I focus on operational excellence and ensuring that our programs deliver real value to our students. From designing curriculum to building partnerships, my goal is to create a seamless learning experience that prepares students for the future.
              </p>
              <p>
              I believe that education is the most powerful tool for change, and I'm proud to be part of a team that's making a difference. Together, we're shaping the future of education in India, one student at a time.
              </p>
            </div>
            </div>

            <div className="card p-8 md:p-12 mt-12">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <img 
              src="https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Founder & CTO" 
              className="rounded-full w-32 h-32 object-cover border-4 border-primary-100"
              />
              <div>
              <h3 className="text-2xl font-semibold mb-2">Sruthi</h3>
              <p className="text-primary-600 mb-4">CMO, Innovission</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-primary-600">
                <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              </div>
            </div>
            
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
              With a background in technology and a passion for education, I joined Innovission to help bridge the gap between academia and industry. My journey began as a software engineer, but I soon realized my calling was to empower others to achieve their career goals.
              </p>
              <p className="mb-4">
              At Innovission, I focus on operational excellence and ensuring that our programs deliver real value to our students. From designing curriculum to building partnerships, my goal is to create a seamless learning experience that prepares students for the future.
              </p>
              <p>
              I believe that education is the most powerful tool for change, and I'm proud to be part of a team that's making a difference. Together, we're shaping the future of education in India, one student at a time.
              </p>
            </div>
            </div>
        </div>
      </section>

    
    </>
  );
};

export default AboutPage;