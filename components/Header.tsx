
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-blue-900 font-bold text-xl tracking-tight">LinguaGlobal</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#courses" className="hover:text-blue-700 transition-colors">Courses</a>
            <a href="#methodology" className="hover:text-blue-700 transition-colors">Methodology</a>
            <a href="#test-level" className="hover:text-blue-700 transition-colors">Level Test</a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="#test-level" className="hidden sm:block text-sm font-semibold text-blue-700 px-4 py-2 hover:bg-blue-50 rounded-md transition-all">
              Login
            </a>
            <a href="#contact" className="bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-md shadow-md hover:bg-blue-800 transition-all">
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
