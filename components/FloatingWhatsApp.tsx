
import React from 'react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/yournumber" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-white text-gray-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100 pointer-events-none">
        Speak with an advisor 💬
      </div>
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.097 3.389l-.72 2.632 2.693-.707c.844.547 1.848.87 2.924.87 3.181 0 5.767-2.586 5.767-5.767s-2.586-5.767-5.767-5.767zm3.38 8.163c-.147.412-.852.766-1.162.812-.31.046-.72.086-2.146-.48-1.74-.69-2.863-2.454-2.95-2.57-.086-.115-.712-.947-.712-1.804s.445-1.277.604-1.44c.16-.16.346-.2.46-.2s.23-.004.33-.004.253.03.386.347c.133.316.453 1.107.493 1.186.04.08.066.173.013.28-.053.106-.08.173-.16.266-.08.093-.173.207-.246.28-.08.08-.166.166-.073.326.093.16.413.68.887 1.103.61.54 1.127.71 1.287.79.16.08.253.066.346-.04.093-.106.4-.466.506-.626.106-.16.213-.133.36-.08.147.053.933.44 1.093.52s.266.12.306.186c.04.066.04.386-.107.798z"/>
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
