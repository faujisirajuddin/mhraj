import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-b border-gray-200/20 dark:border-gray-700/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-br from-red-500 to-red-600 rounded-lg group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 dark:text-white font-['Syne']">
                MH Raj Electricals
              </span>
              <div className="text-xs text-red-600 dark:text-red-400 font-medium">
                ONLINE SERVICE
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-red-600 dark:hover:text-red-400 ${
                  isActive(item.path)
                    ? 'text-red-600 dark:text-red-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav> */}

          {/* <nav className="hidden md:flex items-center w-full relative">
  <div className="flex items-center space-x-8 w-full">
    {navItems.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        className={`text-sm font-medium transition-all duration-300 hover:text-red-600 dark:hover:text-red-400 ${
          isActive(item.path)
            ? 'text-red-600 dark:text-red-400'
            : 'text-gray-700 dark:text-gray-300'
        }`}
      >
        {item.label}
      </Link>
    ))}
  </div>

  <Link
    to="/dashboard"
    className="ml-auto absolute right-0 top-1/2 -translate-y-1/2 w-24 h-10 opacity-0 cursor-pointer z-50"
    title="Go to Dashboard"
  >
  </Link>
</nav> */}

 <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-sm font-medium transition-all duration-300 hover:text-red-600 dark:hover:text-red-400 ${
              isActive(item.path)
                ? 'text-red-600 dark:text-red-400'
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Hidden dashboard link – Jaadoo click */}
      <Link
        to="/admin/login"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-24 h-10 opacity-0 cursor-pointer z-50"
        title="Go to Dashboard"
      >
        {/* Invisible */}
      </Link>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/20 dark:border-gray-700/20">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;