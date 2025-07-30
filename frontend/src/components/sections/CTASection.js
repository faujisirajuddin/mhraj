import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D90429' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm-7-7a7 7 0 1 0 14 0 7 7 0 0 0-14 0z'/%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          {/* Main CTA Content */}
          <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-['Syne']">
                Ready to Get
                <span className="text-red-600 dark:text-red-400"> Started?</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Don't let electrical licensing and installation challenges hold your business back. Get expert help today and move forward with confidence.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
                <a href="tel:9036940678">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full sm:w-auto border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/50 dark:bg-gray-700/50 rounded-2xl border border-white/30 dark:border-gray-600/30 hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl mb-4">
                  <Phone className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Call Us</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Speak directly with our experts
                </p>
                <a 
                  href="tel:9036940678" 
                  className="text-red-600 dark:text-red-400 font-semibold hover:underline"
                >
                  9036940678
                </a>
              </div>

              <div className="text-center p-6 bg-white/50 dark:bg-gray-700/50 rounded-2xl border border-white/30 dark:border-gray-600/30 hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl mb-4">
                  <Mail className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Send us your requirements
                </p>
                <a 
                  href="mailto:mhrajelectricals@gmail.com" 
                  className="text-red-600 dark:text-red-400 font-semibold hover:underline text-sm"
                >
                  mhrajelectricals@gmail.com
                </a>
              </div>

              <div className="text-center p-6 bg-white/50 dark:bg-gray-700/50 rounded-2xl border border-white/30 dark:border-gray-600/30 hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl mb-4">
                  <MapPin className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Visit Us</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Come to our office location
                </p>
                <p className="text-red-600 dark:text-red-400 font-semibold text-sm">
                  Kalaburagi - 585 102
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600/5 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;