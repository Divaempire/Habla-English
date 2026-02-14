
import React from 'react';

interface Props {
  isBlueprint: boolean;
}

const Hero: React.FC<Props> = ({ isBlueprint }) => {
  return (
    <section className={`relative h-[650px] flex items-center overflow-hidden ${isBlueprint ? 'blueprint-border' : ''}`}>
      {isBlueprint && <div className="blueprint-label">Squarespace: Hero Image Layout (Overlap)</div>}
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/404/1600/900" 
          alt="Students learning English" 
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Master English for the <span className="text-blue-400">Real World</span>.
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Stop translating in your head. Start speaking naturally with our 100% conversation-based methodology designed for adults and professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#courses" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl text-center transition-all transform hover:scale-105">
              Explore Courses
            </a>
            <a href="#test-level" className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white font-bold py-4 px-8 rounded-lg text-center transition-all">
              Free Level Test
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
              Cambridge Certified
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
              Small Groups
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
