import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-red-500 to-red-600 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900 dark:text-white font-['Syne']">
                  MH Raj Electricals
                </div>
                <div className="text-xs text-red-600 dark:text-red-400 font-medium">
                  ONLINE SERVICE
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Professional electrical services and licensing solutions for your business needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Contact', 'Dashboard', 'Blog'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                'Electrical Contractor License',
                'Electrical Supervisor License',
                'Electrical Wireman License',
                'Drawing & Installation',
                'Transformer & DG Set'
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Shop No.3, Assembly Tower, Near SRN Mehta School, Court Road, Kalaburagi - 585 102
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-600 dark:text-red-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  9036940678
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-600 dark:text-red-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  mhrajelectricals@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-red-600 dark:text-red-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Mon - Sat: 9AM - 6PM
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 MH Raj Electricals. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
              Owner: Mohammed Moiz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;