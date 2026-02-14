
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">LinguaGlobal</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Empowering individuals to communicate confidently in English through innovative, conversation-first education since 2010.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Programs</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Adult Courses</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Corporate Training</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">IELTS Preparation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">One-to-One Coaching</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Academy</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Our Method</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Level Test</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2024 LinguaGlobal Academy. All rights reserved.</p>
          <div className="flex gap-8">
            <span>English School Website Design for Squarespace</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Enrollments Open</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
