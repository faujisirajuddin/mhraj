import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { services } from '../../mock/data';
import { 
  FileText, UserCheck, Zap, Award, PenTool, Cpu, 
  Layout, ArrowUpDown, ArrowRight, CheckCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  FileText, UserCheck, Zap, Award, PenTool, Cpu, Layout, ArrowUpDown
};

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded-full text-sm font-medium text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 mb-4">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-['Syne']">
            Professional Electrical
            <span className="text-red-600 dark:text-red-400"> Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From licensing to installation, we provide comprehensive electrical services to meet all your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card 
                key={service.id}
                className={`group relative overflow-hidden border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  hoveredCard === service.id ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-xl group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <Badge variant="outline" className="text-red-600 border-red-200 dark:border-red-800">
                      {service.price}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 pb-4">
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="relative z-10 pt-0">
                  <Link to="/contact" className="w-full">
                    <Button 
                      variant="outline" 
                      className="w-full group/btn border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardFooter>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-red-600/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-blue-600/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <Link to="/services">
              <Button 
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 font-semibold transition-all duration-300"
              >
                Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;