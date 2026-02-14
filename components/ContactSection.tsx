
import React from 'react';

interface Props {
  isBlueprint: boolean;
}

const ContactSection: React.FC<Props> = ({ isBlueprint }) => {
  return (
    <section className={`py-24 bg-gray-50 relative ${isBlueprint ? 'blueprint-border' : ''}`}>
      {isBlueprint && <div className="blueprint-label">Squarespace: Contact Form Block</div>}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-blue-700 p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-blue-100 mb-10 leading-relaxed">
              Have questions? Our team is ready to help you choose the best path for your English journey.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">📍</div>
                <div>
                  <h4 className="font-bold">Visit Us</h4>
                  <p className="text-blue-100 text-sm">Main Street 123, Education District</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">📞</div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-blue-100 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">✉️</div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-blue-100 text-sm">hello@linguaglobal.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 flex gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-all cursor-pointer"></div>
              <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-all cursor-pointer"></div>
              <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-all cursor-pointer"></div>
            </div>
          </div>
          
          <div className="lg:w-2/3 p-12">
            <form className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Interested In</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white">
                  <option>General English Course</option>
                  <option>Business English</option>
                  <option>Exam Prep</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"></textarea>
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full py-4 bg-blue-700 text-white font-bold rounded-lg shadow-xl hover:bg-blue-800 transition-all transform hover:-translate-y-1">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
