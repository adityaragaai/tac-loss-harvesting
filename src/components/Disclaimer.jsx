import React, { useState } from 'react';
import { Info, ChevronDown, ChevronUp } from 'lucide-react';

const Disclaimer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 rounded-lg overflow-hidden mb-4 transition-colors duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2.5 flex items-center justify-between text-blue-700 dark:text-blue-300 hover:bg-blue-100/50 dark:hover:bg-blue-800/30 transition-colors"
      >
        <div className="flex items-center gap-3 font-bold text-sm md:text-base">
          <Info className="w-5 h-5" />
          Important Notes & Disclaimers
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      
      {isOpen && (
        <div className="px-6 md:px-12 pb-6 pt-2">
          <ul className="list-disc text-sm text-blue-800 dark:text-blue-200 space-y-2 opacity-90 leading-relaxed">
            <li>Tax-loss harvesting is currently not allowed under Indian tax regulations. Please consult your tax advisor before making any decisions.</li>
            <li>Tax harvesting does not apply to derivatives or futures. These are handled separately as business income under tax rules.</li>
            <li>Price and market value data is fetched from Coingecko, not from individual exchanges. As a result, values may slightly differ from the ones on your exchange.</li>
            <li>Some countries do not have a short-term / long-term bifurcation. For now, we are calculating everything as long-term.</li>
            <li>Only realized losses are considered for harvesting. Unrealized losses in held assets are not counted.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Disclaimer;
