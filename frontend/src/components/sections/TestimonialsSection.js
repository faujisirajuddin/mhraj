import React from 'react';
import { Card, CardContent } from '../ui/card';
import { testimonials } from '../../mock/data';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded-full text-sm font-medium text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 mb-4">
            Client Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-['Syne']">
            What Our
            <span className="text-red-600 dark:text-red-400"> Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="group relative overflow-hidden border-0 bg-white/70 dark:bg-gray-700/70 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="h-12 w-12 text-red-600" />
              </div>

              <CardContent className="p-6 relative z-10">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonial.review}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-600 shadow-sm"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400">
            Join hundreds of satisfied clients who trust MH Raj Electricals for their electrical needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;