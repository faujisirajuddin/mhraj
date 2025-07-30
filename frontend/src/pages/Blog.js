import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-['Syne']">
            Blog & Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Coming Soon - Electrical tips, industry insights, and helpful resources.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;