
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Methodology from './components/Methodology';
import CourseGrid from './components/CourseGrid';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import LevelTest from './components/LevelTest';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BlueprintToggle from './components/BlueprintToggle';

const App: React.FC = () => {
  const [isBlueprintMode, setIsBlueprintMode] = useState(false);

  return (
    <div className={`min-h-screen bg-gray-50 flex flex-col relative ${isBlueprintMode ? 'debug-mode' : ''}`}>
      {/* Blueprint Mode Indicator Overlay (CSS handled in tailwind/classes) */}
      
      <Header />
      
      <main className="flex-grow">
        <Hero isBlueprint={isBlueprintMode} />
        
        <div id="benefits">
          <Benefits isBlueprint={isBlueprintMode} />
        </div>
        
        <div id="methodology">
          <Methodology isBlueprint={isBlueprintMode} />
        </div>
        
        <div id="courses">
          <CourseGrid isBlueprint={isBlueprintMode} />
        </div>

        <div id="test-level" className="py-20 bg-blue-50">
          <LevelTest isBlueprint={isBlueprintMode} />
        </div>
        
        <div id="testimonials">
          <Testimonials isBlueprint={isBlueprintMode} />
        </div>
        
        <div id="contact">
          <ContactSection isBlueprint={isBlueprintMode} />
        </div>
      </main>

      <Footer />
      
      <FloatingWhatsApp />
      
      {/* Fixed UI for toggling Blueprint Mode */}
      <div className="fixed bottom-6 left-6 z-50">
        <BlueprintToggle 
          isActive={isBlueprintMode} 
          onToggle={() => setIsBlueprintMode(!isBlueprintMode)} 
        />
      </div>

      {/* Styles for blueprint labels */}
      <style>{`
        .blueprint-label {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #ef4444;
          color: white;
          padding: 4px 12px;
          font-size: 0.75rem;
          font-weight: bold;
          border-radius: 9999px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          z-index: 40;
          pointer-events: none;
        }
        .blueprint-border {
          outline: 2px dashed #ef4444 ! from-red-500;
        }
      `}</style>
    </div>
  );
};

export default App;
