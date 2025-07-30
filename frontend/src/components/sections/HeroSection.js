import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, Phone, Mail, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded-full text-sm font-medium text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800">
                <CheckCircle className="h-4 w-4 mr-2" />
                Professional Electrical Services
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight font-['Syne']">
                Your Trusted
                <span className="text-red-600 dark:text-red-400"> Electrical </span>
                Partner
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                Get professional electrical licensing, installation, and supervision services from certified experts. We make complex electrical processes simple and efficient.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Licensed & Certified',
                '10+ Years Experience',
                '500+ Projects Completed',
                '24/7 Support Available'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <a href="tel:9036940678">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-600 dark:text-red-400" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  9036940678
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-600 dark:text-red-400" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  mhrajelectricals@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Glassmorphism Card */}
          <div className="relative">
            <div className="relative p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-['Syne'] mb-2">
                    Quick Service Request
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get instant quote for your electrical needs
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Contractor License', icon: '📋' },
                    { label: 'Supervisor License', icon: '👨‍💼' },
                    { label: 'Installation', icon: '⚡' },
                    { label: 'Maintenance', icon: '🔧' }
                  ].map((service, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-white/50 dark:bg-gray-700/50 rounded-xl border border-white/30 dark:border-gray-600/30 text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
                    >
                      <div className="text-2xl mb-2">{service.icon}</div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {service.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="block">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 font-semibold transition-all duration-300">
                    Request Quote Now
                  </Button>
                </Link>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-600/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;