import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, API call, etc.
    console.log('Form submitted:', formData);
    // Show success message
    setSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for inquiries, feedback, or support"
        backgroundImage="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionTitle 
                title="Send Us a Message" 
                subtitle="We'd love to hear from you! Please fill out the form below."
              />
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700">
                    Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-primary-600 font-medium hover:text-primary-800"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Pramod Reddy"
                    />
                  </div>
                  
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
                      placeholder="pramod@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="course-inquiry">Course Inquiry</option>
                      <option value="service-inquiry">Service Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit"
                      className="btn btn-primary w-full sm:w-auto flex items-center justify-center"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Contact Info */}
            <div>
              <SectionTitle 
                title="Contact Information" 
                subtitle="Reach out to us through any of these channels"
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600 mb-2">For general inquiries:</p>
                    <a href="mailto:info@innovission.com" className="text-primary-600 hover:text-primary-800">
                      info@innovission.com
                    </a>
                    <p className="text-gray-600 mt-2 mb-2">For support:</p>
                    <a href="mailto:support@upskillbharat.com" className="text-primary-600 hover:text-primary-800">
                      support@innovission.com
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600 mb-2">Customer Support:</p>
                    <a href="tel:+919441663905" className="text-primary-600 hover:text-primary-800">
                      +91 9441663905
                    </a>
                    <p className="text-gray-600 mt-2 mb-2">Office:</p>
                    <a href="tel:+91 9441663905" className="text-primary-600 hover:text-primary-800">
                      +91 9441663905
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      innovission Headquarters<br />
                      Tech Park, 4th Floor<br />
                      Koramangala, Bangalore - 560034<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-primary-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Connect on Social Media</h3>
                <p className="text-gray-600 mb-4">
                  Follow us on social media for updates, tips, and community highlights.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary-600 hover:text-primary-800">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.8951 12.7871C18.8951 8.9071 15.7677 5.7812 11.8879 5.7812C8.00748 5.7812 4.88062 8.9071 4.88062 12.7871C4.88062 16.2755 7.45376 19.1403 10.8302 19.693V14.8874H8.83566V12.7871H10.8302V11.2125C10.8302 9.3975 11.9382 8.3653 13.5891 8.3653C14.3866 8.3653 15.2173 8.5159 15.2173 8.5159V10.4468H14.3073C13.4109 10.4468 13.1456 10.9886 13.1456 11.5446V12.7871H15.1333L14.8295 14.8874H13.1456V19.693C16.522 19.1403 19.0951 16.2755 19.0951 12.7871Z" />
                    </svg>
                  </a>
                  <a href="#" className="text-primary-600 hover:text-primary-800">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.75C10.5166 4.75 10.2509 4.75775 9.55786 4.79338C8.95311 4.8283 8.50472 4.93871 8.12328 5.10303C7.72811 5.26392 7.39213 5.4875 7.09835 5.79124C6.79457 6.09498 6.57094 6.43091 6.41 6.82599C6.24559 7.20734 6.13511 7.65548 6.10015 8.26002C6.06448 8.9529 6.05676 9.21845 6.05676 10.7017V13.2984C6.05676 14.7816 6.06452 15.0472 6.10015 15.7402C6.13507 16.3447 6.24555 16.7929 6.41 17.1742C6.57098 17.5692 6.79465 17.9051 7.09843 18.1988C7.39221 18.5025 7.72818 18.7261 8.12328 18.887C8.50472 19.0513 8.95307 19.1618 9.55786 19.1967C10.2509 19.2323 10.5166 19.24 12 19.24H12.0001C13.4834 19.24 13.7491 19.2323 14.4421 19.1967C15.0469 19.1618 15.4954 19.0513 15.8769 18.887C16.272 18.7261 16.608 18.5025 16.9018 18.1988C17.2055 17.9051 17.4292 17.5692 17.5902 17.1742C17.7545 16.7929 17.865 16.3447 17.9 15.7402C17.9356 15.0472 17.9434 14.7816 17.9434 13.2984V10.7017C17.9434 9.21845 17.9356 8.9529 17.9 8.26002C17.865 7.65537 17.7545 7.20734 17.5902 6.82599C17.4292 6.43091 17.2055 6.09498 16.9018 5.79124C16.608 5.4875 16.272 5.26392 15.8769 5.10303C15.4954 4.93871 15.0469 4.8283 14.4421 4.79338C13.7491 4.75775 13.4834 4.75 12 4.75ZM12 6.44773C13.4582 6.44773 13.7067 6.45423 14.3898 6.48939C14.9278 6.52156 15.2606 6.6267 15.4827 6.71257C15.7746 6.82666 15.9854 6.96416 16.2069 7.18576C16.4285 7.40736 16.566 7.61823 16.6801 7.91005C16.766 8.13223 16.8711 8.46492 16.9033 9.00288C16.9385 9.6861 16.945 9.93463 16.945 11.3928V12.6074C16.945 14.0654 16.9385 14.314 16.9033 14.9972C16.8711 15.5352 16.766 15.8679 16.6801 16.0901C16.566 16.3819 16.4285 16.5928 16.2069 16.8143C15.9854 17.0359 15.7746 17.1734 15.4827 17.2876C15.2606 17.3735 14.9278 17.4786 14.3898 17.5108C13.7067 17.5459 13.4582 17.5524 12 17.5524C10.5418 17.5524 10.2933 17.5459 9.61022 17.5108C9.07225 17.4786 8.73941 17.3735 8.51729 17.2876C8.22539 17.1734 8.01459 17.0359 7.79306 16.8143C7.57145 16.5928 7.43396 16.3819 7.31988 16.0901C7.234 15.8679 7.12886 15.5352 7.09669 14.9972C7.06153 14.314 7.05502 14.0654 7.05502 12.6074V11.3928C7.05502 9.93463 7.06153 9.6861 7.09669 9.00288C7.12886 8.46492 7.234 8.13223 7.31988 7.91005C7.43396 7.61823 7.57145 7.40736 7.79306 7.18576C8.01459 6.96416 8.22539 6.82666 8.51729 6.71257C8.73941 6.6267 9.07225 6.52156 9.61022 6.48939C10.2933 6.45423 10.5418 6.44773 12 6.44773ZM12 8.61829C10.4466 8.61829 9.18676 9.87814 9.18676 11.4316C9.18676 12.985 10.4466 14.2448 12 14.2448C13.5534 14.2448 14.8133 12.985 14.8133 11.4316C14.8133 9.87814 13.5534 8.61829 12 8.61829ZM12 12.8428C11.221 12.8428 10.5888 12.2106 10.5888 11.4316C10.5888 10.6526 11.221 10.0204 12 10.0204C12.779 10.0204 13.4112 10.6526 13.4112 11.4316C13.4112 12.2106 12.779 12.8428 12 12.8428ZM15.8766 8.4308C15.8766 8.85844 15.5311 9.20398 15.1035 9.20398C14.6758 9.20398 14.3302 8.85844 14.3302 8.4308C14.3302 8.00317 14.6758 7.65763 15.1035 7.65763C15.5311 7.65763 15.8766 8.00317 15.8766 8.4308Z" />
                    </svg>
                  </a>
                  <a href="#" className="text-primary-600 hover:text-primary-800">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.0825 5.4975L19.083 5.498C19.5674 5.49781 19.9523 5.88261 19.9523 6.36695V17.6342C19.9523 18.1186 19.5673 18.5034 19.083 18.5032L19.0825 18.5025H4.91963C4.43565 18.5025 4.05099 18.1179 4.05099 17.634V6.36695C4.05099 5.8831 4.43569 5.49829 4.92042 5.49805L4.92032 5.4975H19.0825ZM19.0825 4.4975H4.91783C3.83103 4.4975 2.95099 5.37755 2.95099 6.46435V17.5356C2.95099 18.6224 3.83103 19.5025 4.91783 19.5025H19.0825C20.1693 19.5025 21.0493 18.6224 21.0493 17.5356V6.46435C21.0493 5.37755 20.1693 4.4975 19.0825 4.4975Z" />
                      <path d="M10.1358 10.5915C10.1358 10.0385 9.68883 9.5915 9.13583 9.5915H7.70483C7.15183 9.5915 6.70483 10.0385 6.70483 10.5915V16.0655C6.70483 16.6185 7.15183 17.0655 7.70483 17.0655H9.13583C9.68883 17.0655 10.1358 16.6185 10.1358 16.0655V10.5915Z" />
                      <path d="M8.4182 6.8635C7.5882 6.8635 6.9182 7.5335 6.9182 8.3635C6.9182 9.1935 7.5882 9.8635 8.4182 9.8635C9.2482 9.8635 9.9182 9.1935 9.9182 8.3635C9.9182 7.5335 9.2482 6.8635 8.4182 6.8635Z" />
                      <path d="M17.3143 13.31C17.3143 11.41 15.7793 9.84497 13.8813 9.81397C12.1883 9.78197 10.7563 11.075 10.6663 12.75V16.0655C10.6663 16.615 11.1113 17.0655 11.6663 17.0655H13.3143C13.8673 17.0655 14.3143 16.619 14.3143 16.0655V13.31H14.313C14.313 13.031 14.537 12.805 14.817 12.805C15.096 12.805 15.3126 13.029 15.3126 13.31V16.0655C15.3126 16.619 15.7596 17.0655 16.3126 17.0655H16.3143C16.8673 17.0655 17.3143 16.619 17.3143 16.0655V13.31Z" />
                    </svg>
                  </a>
                  <a href="#" className="text-primary-600 hover:text-primary-800">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.5125 6.21902C21.9374 6.48492 21.3153 6.6667 20.6647 6.74747C21.3298 6.3443 21.8435 5.72188 22.0852 4.98704C21.4585 5.34691 20.7667 5.6046 20.0302 5.74817C19.4448 5.13145 18.6092 4.75 17.6784 4.75C15.8974 4.75 14.4528 6.1959 14.4528 7.97825C14.4528 8.23847 14.4832 8.4922 14.5405 8.73567C11.8577 8.59907 9.48938 7.30909 7.87412 5.37574C7.58715 5.86927 7.42721 6.3443 7.42721 6.85485C7.42721 7.82133 7.93742 8.67545 8.72292 9.19077C8.19355 9.17376 7.69604 9.02691 7.26002 8.78512V8.82563C7.26002 10.3909 8.37504 11.6984 9.84884 11.9999C9.5682 12.0773 9.27336 12.1204 8.97019 12.1204C8.75436 12.1204 8.5453 12.0977 8.34075 12.0557C8.76336 13.3406 9.95205 14.2602 11.3613 14.2874C10.2597 15.1367 8.87576 15.6415 7.37204 15.6415C7.10002 15.6415 6.83102 15.6248 6.56903 15.5917C7.99438 16.4967 9.67021 17.0185 11.4686 17.0185C17.6705 17.0185 21.068 12.1731 21.068 7.98777L21.0568 7.54997C21.6899 7.09748 22.0869 6.52979 22.5125 6.21902Z" />
                    </svg>
                  </a>
                  <a href="#" className="text-primary-600 hover:text-primary-800">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.9955 4C17.5224 4 21.9905 8.47177 21.9905 13.9996C21.9905 19.5278 17.5222 24 11.9953 24C6.46846 24 2 19.5282 2 14.0003C2 8.4724 6.46846 4 11.9953 4H11.9955ZM15.8054 10.4592H13.8936C13.7403 10.4592 13.6166 10.5593 13.5965 10.7088V12.5778H15.8045C15.7788 13.3876 15.6866 14.1456 15.6866 14.1456H13.5909V20.6862H11.0109V14.1456H9.9791V12.5778H11.0109V10.2401C11.0109 10.0155 10.9998 8.42876 12.6554 8.42876H15.8054V10.4592Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Quick answers to common questions about our services"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">What courses do you offer?</h3>
              <p className="text-gray-600">
                We offer a wide range of courses in various domains including Programming, Web Development, Data Science, AI, Digital Marketing, and Career Development skills.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">How can I enroll in a course?</h3>
              <p className="text-gray-600">
                You can enroll in our courses by visiting the Courses page, selecting your desired course, and clicking on the "Enroll" button. You'll be guided through the payment process if applicable.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">
                Yes, we offer a 7-day refund policy for all our paid courses. If you're not satisfied with the course, you can request a refund within 7 days of purchase.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">How can I become an instructor?</h3>
              <p className="text-gray-600">
                If you're an expert in your field and would like to become an instructor, please fill out the contact form with the subject "Instructor Application" and we'll get back to you.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Do you provide job placement assistance?</h3>
              <p className="text-gray-600">
                Yes, we offer job placement assistance to our students who complete certain eligible courses. This includes resume reviews, interview preparation, and connections with our employer partners.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">How can I join the community?</h3>
              <p className="text-gray-600">
                You can join our community by visiting the Community page and following the links to our Telegram group, Discord server, or other social media platforms.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Didn't find what you're looking for?</p>
            <a href="#" className="btn btn-primary">
              View All FAQs
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest courses, events, and career tips. We promise not to spam your inbox!
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                required
              />
              <button type="submit" className="btn bg-white text-primary-900 hover:bg-gray-100 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        {/* Replace with an actual map implementation */}
        <div className="w-full h-full flex items-center justify-center bg-gray-300">
          <MessageSquare className="h-12 w-12 text-gray-500 mr-4" />
          <span className="text-gray-700 text-lg">Interactive Map Would Be Displayed Here</span>
        </div>
      </section>
    </>
  );
};

export default ContactPage;