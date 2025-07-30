import React from 'react';
import { stats } from '../../mock/data';
import { CheckCircle, Users, Calendar, Settings } from 'lucide-react';

const iconMap = {
  CheckCircle, Users, Calendar, Settings
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border-y border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: 2x2 Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <div 
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Enhanced Icon Container */}
                <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl lg:rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-3 mb-4 lg:mb-6 border border-gray-200/50 dark:border-gray-600/50">
                  <IconComponent className="h-7 w-7 lg:h-9 lg:w-9 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <div className="space-y-1 lg:space-y-2">
                  {/* Enhanced Number Display */}
                  <div className="text-2xl lg:text-4xl xl:text-5xl font-black text-gray-900 dark:text-white font-['Space_Grotesk'] group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 tracking-tight">
                    {stat.value}
                  </div>
                  {/* Enhanced Label */}
                  <div className="text-xs lg:text-base font-semibold text-gray-600 dark:text-gray-300 font-['Inter'] px-2 lg:px-0 leading-tight">
                    {stat.label}
                  </div>
                </div>

                {/* Hover Effect Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl transform scale-150"></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Bottom Text */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-sm lg:text-lg text-gray-600 dark:text-gray-300 font-['Inter'] max-w-3xl mx-auto">
            Trusted by hundreds of businesses across Karnataka for professional electrical services and licensing solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;