
import React from 'react';

interface Props {
  isBlueprint: boolean;
}

const Methodology: React.FC<Props> = ({ isBlueprint }) => {
  return (
    <section className={`py-20 bg-blue-900 text-white relative overflow-hidden ${isBlueprint ? 'blueprint-border' : ''}`}>
      {isBlueprint && <div className="blueprint-label">Squarespace: Text + Image Block</div>}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 bg-blue-700 text-blue-200 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Our Methodology
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Natural Learning through <br/> <span className="text-blue-400">Real Interaction</span>
            </h2>
            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              We follow the Common European Framework of Reference for Languages (CEFR) but with a twist. 80% of our class time is dedicated to verbal output. 
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Contextual Grammar (learned through use)",
                "Pronunciation focus and accent reduction",
                "Cultural immersion and idioms",
                "Weekly assessment and feedback"
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-blue-50">{point}</span>
                </li>
              ))}
            </ul>
            <button className="bg-white text-blue-900 font-bold py-4 px-10 rounded-lg hover:bg-blue-50 transition-all">
              Learn More
            </button>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-20 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="https://picsum.photos/id/6/600/600" alt="Class discussion" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-600/30 rounded-2xl -z-10 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-blue-400/20 rounded-2xl -z-10 rotate-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
