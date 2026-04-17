import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/Vector.png';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -100,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b0e14] overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
          animate={{ 
            scale: [0.5, 1.1, 1],
            opacity: 1,
            rotate: 0,
          }}
          transition={{ 
            duration: 1.2,
            ease: "easeOut",
            times: [0, 0.7, 1]
          }}
          className="mb-6 relative"
        >
          <img src={logo} alt="KoinX Logo" className="w-20 h-20 md:w-28 md:h-28" />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-blue-500 rounded-full blur-3xl -z-10"
          />
        </motion.div>

        {/* Brand Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-3xl md:text-5xl font-black tracking-tighter text-white"
        >
          Koin<span className="text-blue-600">X</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-4 text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-slate-400"
        >
          Wealth Simplified
        </motion.p>
      </div>

      {/* Decorative background elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-900 rounded-full blur-[120px] -z-10"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-indigo-900 rounded-full blur-[120px] -z-10"
      />
    </motion.div>
  );
};

export default LoadingScreen;
