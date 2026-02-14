
import React, { useState } from 'react';

interface Props {
  isBlueprint: boolean;
}

const LevelTest: React.FC<Props> = ({ isBlueprint }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [finished, setFinished] = useState(false);

  const questions = [
    {
      q: "Choose the correct form: 'I ____ to the gym every morning.'",
      options: ["go", "goes", "am going", "gone"]
    },
    {
      q: "What is the opposite of 'Boring'?",
      options: ["Exciting", "Tired", "Slow", "Hard"]
    },
    {
      q: "If it ____ tomorrow, we will cancel the picnic.",
      options: ["rains", "will rain", "raining", "rained"]
    }
  ];

  const handleSelect = (idx: number, opt: string) => {
    setAnswers({ ...answers, [idx]: opt });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className={`max-w-4xl mx-auto px-4 relative ${isBlueprint ? 'blueprint-border' : ''}`}>
      {isBlueprint && <div className="blueprint-label">Squarespace: Form Block (Multistep)</div>}
      
      <div className="bg-white p-10 rounded-3xl shadow-2xl border border-blue-100">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-bold text-blue-900">Free English Checkup</h2>
            <p className="text-gray-500">Find your starting point in 30 seconds.</p>
          </div>
          <div className="text-right">
            <span className="text-blue-600 font-bold text-lg">{finished ? 'Done!' : `Question ${step + 1}/${questions.length}`}</span>
          </div>
        </div>

        {!finished ? (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h3 className="text-xl font-medium text-gray-800 bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              {questions[step].q}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions[step].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(step, opt)}
                  className="p-4 text-left border-2 border-gray-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all font-medium text-gray-700"
                >
                  {opt}
                </button>
              ))}
            </div>
            
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-blue-600 h-full transition-all duration-500" 
                style={{ width: `${((step + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <div className="text-center py-10 animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Great Job!</h3>
            <p className="text-gray-600 mb-8">Your results indicate you are approximately at <span className="text-blue-600 font-bold">Level B1 (Intermediate)</span>.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">Get Full Report</button>
              <button onClick={() => {setStep(0); setFinished(false);}} className="bg-gray-100 text-gray-700 font-bold py-3 px-8 rounded-lg">Restart</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LevelTest;
