
import React from 'react';
import { TESTIMONIALS } from '../constants';

interface Props {
  isBlueprint: boolean;
}

const Testimonials: React.FC<Props> = ({ isBlueprint }) => {
  return (
    <section className={`py-24 bg-white relative ${isBlueprint ? 'blueprint-border' : ''}`}>
      {isBlueprint && <div className="blueprint-label">Squarespace: Quotes/Testimonial Slider</div>}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Students Success Stories</h2>
          <div className="flex justify-center gap-1">
            {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-xl">★</span>)}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="relative bg-blue-50 p-10 rounded-3xl border border-blue-100 italic">
              <div className="absolute -top-6 -left-2 text-8xl text-blue-200 leading-none pointer-events-none font-serif opacity-50">“</div>
              <p className="text-lg text-gray-700 mb-8 relative z-10 leading-relaxed">
                {t.text}
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
                <div>
                  <h4 className="font-bold text-blue-900 not-italic">{t.name}</h4>
                  <p className="text-sm text-gray-500 not-italic">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
