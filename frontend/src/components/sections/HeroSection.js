import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, Phone, Mail, CheckCircle, Zap, Shield, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop&crop=center" 
          alt="Professional Electrical Engineering"
          className="w-full h-full object-cover opacity-[0.08] dark:opacity-[0.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-gray-50/95 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-gray-900/95"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-green-500 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-yellow-500 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-full text-sm font-semibold text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <CheckCircle className="h-4 w-4 mr-2 animate-pulse" />
                Professional Electrical Services
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight font-['Space_Grotesk'] tracking-tight">
                Your Trusted
                <span className="block text-gradient bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent animate-gradient-x"> 
                  Electrical 
                </span>
                <span className="block">Partner</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl font-['Inter'] font-light">
                Get professional electrical licensing, installation, and supervision services from 
                <span className="font-semibold text-red-600 dark:text-red-400"> certified experts</span>. 
                We make complex electrical processes simple and efficient.
              </p>
            </div>

            {/* Enhanced Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Shield, text: 'Licensed & Certified', color: 'text-blue-600' },
                { icon: Award, text: '10+ Years Experience', color: 'text-green-600' },
                { icon: Users, text: '500+ Projects Completed', color: 'text-purple-600' },
                { icon: Zap, text: '24/7 Support Available', color: 'text-orange-600' }
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/20 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className={`flex-shrink-0 w-10 h-10 ${benefit.color} bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium font-['Inter']">
                      {benefit.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="group">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-['Space_Grotesk'] group-hover:shadow-red-500/25"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              
              <a href="tel:9036940678" className="group">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-700 px-10 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-['Space_Grotesk']"
                >
                  <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Enhanced Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-semibold font-['Inter']">
                  9036940678
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-semibold font-['Inter']">
                  mhrajelectricals@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Right Content - Glassmorphism Card */}
          <div className="relative animate-fade-in-up delay-300">
            <div className="relative p-8 lg:p-10 bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-gray-700/30 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white font-['Space_Grotesk'] mb-3">
                    Quick Service Request
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-['Inter']">
                    Get instant quote for your electrical needs
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Contractor License', icon: '📋', image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=100&h=100&fit=crop' },
                    { label: 'Supervisor License', icon: '👨‍💼', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop' },
                    { label: 'Installation', icon: '⚡', image: 'https://images.unsplash.com/photo-1646640381839-02748ae8ddf0?w=100&h=100&fit=crop' },
                    { label: 'Maintenance', icon: '🔧', image: 'https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=100&h=100&fit=crop' }
                  ].map((service, index) => (
                    <div 
                      key={index}
                      className="p-6 bg-white/40 dark:bg-gray-700/40 rounded-2xl border border-white/40 dark:border-gray-600/40 text-center hover:scale-110 hover:bg-white/60 dark:hover:bg-gray-700/60 transition-all duration-300 cursor-pointer group backdrop-blur-sm"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative mb-3">
                        <img 
                          src={service.image} 
                          alt={service.label}
                          className="w-12 h-12 mx-auto rounded-lg object-cover shadow-md group-hover:shadow-lg transition-shadow duration-300"
                        />
                        <div className="absolute -top-1 -right-1 text-lg">{service.icon}</div>
                      </div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 font-['Inter']">
                        {service.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="block">
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-['Space_Grotesk']">
                    Request Quote Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
              <div className="absolute top-1/4 right-0 w-1 h-1 bg-blue-500 rounded-full animate-ping delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;