import React from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import logo from '../assets/Vector.png';
import { clsx } from 'clsx';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <header className="bg-white dark:bg-[#0b0e14] border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 md:h-14 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <img src={logo} alt="KoinX" className="w-6 h-6 md:w-7 md:h-7" />
          <span className="text-lg md:text-xl font-black text-slate-900 dark:text-white tracking-tight">
            Koin<span className="text-blue-600">X</span>
            <sup className="text-[6px] md:text-[8px] font-bold text-slate-400 align-top ml-0.5">®</sup>
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              console.log('Right-side toggle clicked');
              setIsDarkMode(prev => !prev);
            }}
            className="group relative z-[9999] p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-md active:scale-95 cursor-pointer overflow-visible"
            aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-500 fill-amber-500/20 group-hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400 fill-indigo-400/20 group-hover:-rotate-12 transition-transform" />
            )}
            {/* Larger invisible hitbox */}
            <div className="absolute inset-[-4px] rounded-full z-[-1]" />
          </button>
          
          <button className="md:hidden p-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
