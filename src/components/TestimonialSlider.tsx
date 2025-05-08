import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Software Engineer at Google',
    content: 'The Python course offered by Upskill Bharat was exceptional. It helped me crack my dream job interview at Google. The practical approach and mentor support made all the difference.',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'UX Designer at Microsoft',
    content: 'Their portfolio builder service transformed my resume into a professional showcase. The personalized feedback helped me highlight my strengths effectively. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Ananya Patel',
    role: 'Data Scientist at Amazon',
    content: 'Upskill Bharat\'s AI and ML courses provided practical knowledge I could immediately apply at work. Their mentors are industry experts who guide you through real-world problems.',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'Frontend Developer at Flipkart',
    content: 'The Web Development bootcamp helped me transition from a non-tech background to a developer role. Their job placement assistance was the cherry on top!',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startAutoSlide = () => {
    intervalRef.current = window.setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative bg-primary-50 py-16 px-4 sm:px-6 overflow-hidden">
      <div className="container-custom relative z-10">
        <div 
          className="max-w-4xl mx-auto transition-opacity duration-300"
          style={{ opacity: isAnimating ? 0.5 : 1 }}
        >
          <div className="relative p-6 md:p-10 bg-white rounded-2xl shadow-lg">
            <Quote className="absolute top-6 left-6 h-10 w-10 text-primary-200 opacity-60" />
            
            <div className="pt-8 md:pt-6 pl-0 md:pl-6">
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary-500"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-primary-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                stopAutoSlide();
                setCurrentIndex(index);
                startAutoSlide();
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary-600 scale-110' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-10 z-10">
          <button
            onClick={() => {
              stopAutoSlide();
              prevSlide();
              startAutoSlide();
            }}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-10 z-10">
          <button
            onClick={() => {
              stopAutoSlide();
              nextSlide();
              startAutoSlide();
            }}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;