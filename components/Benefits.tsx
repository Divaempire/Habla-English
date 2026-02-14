
import React from 'react';

interface Props {
  isBlueprint: boolean;
}

const Benefits: React.FC<Props> = ({ isBlueprint }) => {
  const items = [
    {
      title: "Interactive Method",
      desc: "Forget boring grammar drills. Speak from day one in dynamic, real-world scenarios.",
      icon: "🗣️"
    },
    {
      title: "Expert Teachers",
      desc: "Learn from native and certified bilingual educators with international experience.",
      icon: "🎓"
    },
    {
      title: "Flexible Schedule",
      desc: "Morning, afternoon, and weekend sessions available. Perfect for busy professionals.",
      icon: "📅"
    },
    {
      title: "Small Groups",
      desc: "Max 10 students per class ensures personalized attention and active participation.",
      icon: "👥"
    }
  ];

  return (
    <section className={`py-20 bg-white relative ${isBlueprint ? 'blueprint-border' : ''}`}>
      {isBlueprint && <div className="blueprint-label">Squarespace: List Section (Banner-type)</div>}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose LinguaGlobal?</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
