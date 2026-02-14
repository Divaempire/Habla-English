
import React from 'react';
import { COURSES } from '../constants';

interface Props {
  isBlueprint: boolean;
}

const CourseGrid: React.FC<Props> = ({ isBlueprint }) => {
  return (
    <section className={`py-24 bg-gray-50 relative ${isBlueprint ? 'blueprint-border' : ''}`}>
      {isBlueprint && <div className="blueprint-label">Squarespace: Product Grid or Gallery Grid</div>}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Course Programs</h2>
          <p className="text-gray-600 text-lg">
            Whether you are starting from zero or looking to polish your executive English, we have a curated path for your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col border border-gray-100 group">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={`https://picsum.photos/id/${parseInt(course.id) + 10}/600/400`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={course.title}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {course.tag}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <div className="text-blue-600 text-sm font-semibold mb-2">{course.level}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {course.description}
                </p>
                <div className="text-2xl font-bold text-blue-900 mb-8">{course.price}</div>
                <button className="w-full py-3 px-6 bg-gray-900 text-white font-bold rounded-lg hover:bg-blue-700 transition-all">
                  Course Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6 italic">Not sure which one fits? We offer customized corporate training plans.</p>
          <a href="#contact" className="inline-flex items-center text-blue-700 font-bold hover:gap-4 transition-all group">
            Speak to an academic advisor <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
