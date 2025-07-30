import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { services } from '../../mock/data';
import { 
  FileText, UserCheck, Zap, Award, PenTool, Cpu, 
  Layout, ArrowUpDown, ArrowRight, CheckCircle,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  FileText, UserCheck, Zap, Award, PenTool, Cpu, Layout, ArrowUpDown
};

const serviceImages = {
  1: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=400&h=200&fit=crop', // Electrical Contractor License
  2: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop', // Electrical Supervisor License
  3: 'https://images.unsplash.com/photo-1682345262055-8f95f3c513ea?w=400&h=200&fit=crop', // Electrical Wireman License
  4: 'https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=400&h=200&fit=crop', // Endorsement Services
  5: 'https://images.unsplash.com/photo-1646640381839-02748ae8ddf0?w=400&h=200&fit=crop', // Drawing & Installation
  6: 'https://images.unsplash.com/photo-1650698877967-734f036a0c08?w=400&h=200&fit=crop', // Transformer & DG Set
  7: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=400&h=200&fit=crop', // Layout & IP Set
  8: 'https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=400&h=200&fit=crop'  // Lift & Escalator
};

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(services.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(services.length / 2)) % Math.ceil(services.length / 2));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-full text-sm font-semibold text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 mb-6 shadow-sm hover:shadow-md transition-all duration-300">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 font-['Space_Grotesk'] tracking-tight">
            Professional Electrical
            <span className="block text-gradient bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent"> 
              Solutions
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-['Inter'] font-light leading-relaxed">
            From licensing to installation, we provide comprehensive electrical services to meet all your business needs with 
            <span className="font-semibold text-red-600 dark:text-red-400"> certified expertise</span>.
          </p>
        </div>

        {/* Mobile Carousel */}
        {isMobile ? (
          <div className="relative mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Swipe to explore services
              </h3>
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <ChevronLeft className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <ChevronRight className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </div>
            
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(services.length / 2) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-1 gap-4 px-2">
                    {services.slice(slideIndex * 2, slideIndex * 2 + 2).map((service) => {
                      const IconComponent = iconMap[service.icon];
                      return (
                        <Card 
                          key={service.id}
                          className="group relative overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                        >
                          {/* Service Image */}
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src={serviceImages[service.id]}
                              alt={service.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            <div className="absolute top-4 right-4">
                              <Badge variant="outline" className="text-white border-white/50 bg-black/30 backdrop-blur-sm">
                                {service.price}
                              </Badge>
                            </div>
                            <div className="absolute bottom-4 left-4">
                              <div className="p-3 bg-white/20 dark:bg-gray-800/20 rounded-xl group-hover:bg-white/30 dark:group-hover:bg-gray-800/30 transition-colors duration-300 backdrop-blur-sm">
                                <IconComponent className="h-6 w-6 text-white" />
                              </div>
                            </div>
                          </div>
                          
                          <CardHeader className="pb-4">
                            <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 font-['Space_Grotesk']">
                              {service.title}
                            </CardTitle>
                          </CardHeader>

                          <CardContent className="pb-4">
                            <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-['Inter']">
                              {service.description}
                            </CardDescription>
                            
                            <div className="space-y-2">
                              {service.features.slice(0, 2).map((feature, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                  <span className="text-sm text-gray-600 dark:text-gray-300 font-['Inter']">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </CardContent>

                          <CardFooter>
                            <Link to="/contact" className="w-full">
                              <Button 
                                variant="outline" 
                                className="w-full group/btn border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 font-['Space_Grotesk'] font-semibold"
                              >
                                Get Quote
                                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(services.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-red-600 scale-125' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card 
                  key={service.id}
                  className={`group relative overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up ${
                    hoveredCard === service.id ? 'scale-105' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={serviceImages[service.id]}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="text-white border-white/50 bg-black/30 backdrop-blur-sm">
                        {service.price}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="p-3 bg-white/20 dark:bg-gray-800/20 rounded-xl group-hover:bg-white/30 dark:group-hover:bg-gray-800/30 transition-colors duration-300 backdrop-blur-sm">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 font-['Space_Grotesk']">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pb-4">
                    <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-['Inter']">
                      {service.description}
                    </CardDescription>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300 font-['Inter']">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Link to="/contact" className="w-full">
                      <Button 
                        variant="outline" 
                        className="w-full group/btn border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 font-['Space_Grotesk'] font-semibold"
                      >
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </CardFooter>

                  {/* Enhanced Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              );
            })}
          </div>
        )}

        {/* Enhanced Bottom CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <div className="inline-flex items-center space-x-6">
            <Link to="/services">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-['Space_Grotesk']"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-700 px-10 py-4 font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-['Space_Grotesk']"
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