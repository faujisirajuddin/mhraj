import React from 'react';
import { stats } from '../../mock/data';
import { CheckCircle, Users, Calendar, Settings } from 'lucide-react';

const iconMap = {
  CheckCircle, Users, Calendar, Settings
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-700 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 mb-4">
                  <IconComponent className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                
                <div className="space-y-1">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-['Syne'] group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base font-medium text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;