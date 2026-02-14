
import React from 'react';

interface Props {
  isActive: boolean;
  onToggle: () => void;
}

const BlueprintToggle: React.FC<Props> = ({ isActive, onToggle }) => {
  return (
    <button 
      onClick={onToggle}
      className={`group flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl transition-all duration-300 ${
        isActive 
          ? 'bg-red-500 text-white scale-105' 
          : 'bg-white text-gray-800 hover:bg-gray-50'
      }`}
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
        isActive ? 'bg-white text-red-500 rotate-180' : 'bg-red-500 text-white'
      }`}>
        {isActive ? '✕' : '🛠️'}
      </div>
      <div className="text-left">
        <p className="text-xs font-bold uppercase tracking-widest opacity-70">
          {isActive ? 'Disable' : 'Enable'}
        </p>
        <p className="text-sm font-bold">Squarespace Blueprint</p>
      </div>
    </button>
  );
};

export default BlueprintToggle;
