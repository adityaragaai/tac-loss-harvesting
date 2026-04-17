import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const SummaryCard = ({ title, type, data }) => {
  const isAfter = type === 'after';
  
  const netStcg = data.stcg.profits + data.stcg.losses;
  const netLtcg = data.ltcg.profits + data.ltcg.losses;
  const realisedGains = netStcg + netLtcg;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className={twMerge(
        "p-3 md:p-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg",
        isAfter ? "bg-blue-600 text-white" : "bg-white dark:bg-[#111827] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800"
      )}
    >
      <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">{title}</h3>
      
      <div className="grid grid-cols-3 gap-2 md:gap-4 mb-2 md:mb-3">
        <div className="col-start-2 text-[9px] md:text-xs font-medium opacity-70 uppercase tracking-tight">Short-term</div>
        <div className="text-[9px] md:text-xs font-medium opacity-70 uppercase tracking-tight">Long-term</div>
      </div>

      <div className="space-y-3 md:space-y-4">
        <div className="grid grid-cols-3 gap-2 md:gap-4 items-center">
          <div className="text-[10px] md:text-xs font-medium opacity-70">Profits</div>
        <div className="text-[10px] md:text-sm font-semibold">${data.stcg.profits.toLocaleString()}</div>
        <div className="text-[10px] md:text-sm font-semibold">${data.ltcg.profits.toLocaleString()}</div>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-4 items-center">
        <div className="text-[10px] md:text-xs font-medium opacity-70">Losses</div>
        <div className="text-[10px] md:text-sm font-semibold">
          {data.stcg.losses < 0 ? '-' : ''}${Math.abs(data.stcg.losses).toLocaleString()}
        </div>
        <div className="text-[10px] md:text-sm font-semibold">
          {data.ltcg.losses < 0 ? '-' : ''}${Math.abs(data.ltcg.losses).toLocaleString()}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-4 pt-2 md:pt-3 border-t border-current/10 items-center">
        <div className="text-[9px] md:text-xs font-medium opacity-70 leading-tight">Net Capital Gains</div>
        <div className="text-[10px] md:text-sm font-bold">
          {netStcg < 0 ? '-' : ''}${Math.abs(netStcg).toLocaleString()}
        </div>
        <div className="text-[10px] md:text-sm font-bold">
          {netLtcg < 0 ? '-' : ''}${Math.abs(netLtcg).toLocaleString()}
        </div>
      </div>
    </div>

    <div className="mt-4 md:mt-5 pt-3 md:pt-4 border-t border-current/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
      <div className="text-xs md:text-base font-bold">
        {isAfter ? 'Effective Capital Gains:' : 'Realised Capital Gains:'}
      </div>
      <div className="text-lg md:text-2xl font-black">
        {realisedGains < 0 ? '-' : ''}${Math.abs(realisedGains).toLocaleString()}
      </div>
    </div>

      {isAfter && data.savings > 0 && (
        <div className="mt-4 flex items-center justify-end gap-2 text-right">
          <span className="text-xl md:text-2xl">🎉</span>
          <p className="text-sm md:text-base font-bold">
            You are going to save upto ${data.savings.toLocaleString()}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default SummaryCard;
