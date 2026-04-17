import React from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

const HoldingsTable = ({ holdings, selectedIds, onToggleSelect, onSelectAll }) => {
  const [sortConfig, setSortConfig] = React.useState({ key: null, direction: 'asc' });
  const [hoveredCell, setHoveredCell] = React.useState(null);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const sortedHoldings = React.useMemo(() => {
    let sortableItems = [...holdings];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [holdings, sortConfig]);

  const displayedHoldings = isExpanded ? sortedHoldings : sortedHoldings.slice(0, 5);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const allSelected = holdings.length > 0 && selectedIds.length === holdings.length;

  return (
    <div className="bg-white dark:bg-[#111827] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors duration-300">
      <div className="p-3 md:p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Holdings</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-[9px] md:text-[11px] font-bold uppercase tracking-tight">
            <tr>
              <th className="px-3 md:px-4 py-2 w-10 md:w-12 text-center">
                <button 
                  onClick={onSelectAll}
                  className={clsx(
                    "w-3.5 h-3.5 md:w-4 md:h-4 rounded border flex items-center justify-center transition-all",
                    allSelected ? "bg-blue-600 border-blue-600 text-white" : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700"
                  )}
                >
                  {allSelected && <Check className="w-2.5 md:w-3 h-2.5 md:h-3" />}
                </button>
              </th>
              <th className="px-3 md:px-4 py-2">Asset</th>
              <th className="px-3 md:px-4 py-2 text-right">Holdings</th>
              <th className="px-6 py-2 text-right hidden md:table-cell">Total Current Value</th>
              <th className="px-6 py-2 text-right hidden md:table-cell cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={() => requestSort('stcg')}>
                <div className="flex items-center justify-end gap-1">
                  Short-term
                  {sortConfig.key === 'stcg' && (
                    <ChevronDown className={clsx("w-2.5 h-2.5 transition-transform", sortConfig.direction === 'desc' ? "rotate-180" : "")} />
                  )}
                </div>
              </th>
              <th className="px-6 py-2 text-right hidden md:table-cell">Long-term</th>
              <th className="px-6 py-2 text-right hidden md:table-cell">Amount to Sell</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-[10px] md:text-sm">
            {displayedHoldings.map((asset) => {
              const isSelected = selectedIds.includes(asset.id);
              const totalValue = asset.totalHolding * asset.currentPrice;
              
              return (
                <tr 
                  key={asset.id} 
                  className={clsx(
                    "transition-colors",
                    isSelected 
                      ? "bg-blue-50/50 dark:bg-blue-900/20" 
                      : "hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  )}
                >
                  <td className="px-3 md:px-4 py-2 md:py-3 text-center">
                    <button 
                      onClick={() => onToggleSelect(asset.id)}
                      className={clsx(
                        "w-3.5 h-3.5 md:w-4 md:h-4 rounded border flex items-center justify-center transition-all mx-auto",
                        isSelected ? "bg-blue-600 border-blue-600 text-white" : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700"
                      )}
                    >
                      {isSelected && <Check className="w-2.5 md:w-3 h-2.5 md:h-3" />}
                    </button>
                  </td>
                  <td className="px-3 md:px-4 py-2 md:py-3">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <img src={asset.logo} alt={asset.coin} className="w-4 h-4 md:w-6 md:h-6 rounded-full" />
                      <div>
                        <div className="font-bold text-slate-900 dark:text-slate-100 leading-tight">{asset.coinName}</div>
                        <div className="text-[9px] text-slate-500 dark:text-slate-400">{asset.coin}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 md:px-4 py-2 md:py-3 text-right">
                    <div className="font-semibold text-slate-900 dark:text-slate-100">{asset.totalHolding} {asset.coin}</div>
                    <div className="text-[9px] text-slate-500 md:hidden">${asset.currentPrice.toLocaleString()}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 hidden md:block">${asset.currentPrice.toLocaleString()}/{asset.coin}</div>
                  </td>
                  <td 
                    className="px-6 py-2 md:py-3 text-right font-bold text-slate-900 dark:text-slate-100 hidden md:table-cell relative"
                    onMouseEnter={() => setHoveredCell(asset.id)}
                    onMouseLeave={() => setHoveredCell(null)}
                  >
                    ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    {hoveredCell === asset.id && (
                      <div className="absolute z-20 bottom-full right-1/2 translate-x-1/2 mb-3 bg-white text-slate-900 text-xs font-bold py-2 px-3 rounded-lg shadow-xl whitespace-nowrap animate-in fade-in zoom-in-95 slide-in-from-bottom-2">
                        ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-2 md:py-3 text-right hidden md:table-cell">
                    <div className={clsx(
                      "font-bold",
                      asset.stcg < 0 ? "text-red-500" : "text-emerald-500"
                    )}>
                      {asset.stcg < 0 ? '-' : '+'}${Math.abs(asset.stcg).toLocaleString()}
                    </div>
                    <div className="text-[11px] text-slate-400">{asset.stcgQty} {asset.coin}</div>
                  </td>
                  <td className="px-6 py-2 md:py-3 text-right hidden md:table-cell">
                    <div className={clsx(
                      "font-bold",
                      asset.ltcg < 0 ? "text-red-500" : "text-emerald-500"
                    )}>
                      {asset.ltcg < 0 ? '-' : '+'}${Math.abs(asset.ltcg).toLocaleString()}
                    </div>
                    <div className="text-[11px] text-slate-400">{asset.ltcgQty} {asset.coin}</div>
                  </td>
                  <td className="px-6 py-2 md:py-3 text-right font-bold text-slate-900 dark:text-slate-100 hidden md:table-cell transition-colors">
                    {isSelected ? `${asset.totalHolding} ${asset.coin}` : '-'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {sortedHoldings.length > 5 && (
        <div className="p-3 md:p-4 border-t border-slate-100 dark:border-slate-800 flex justify-start">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1 text-xs hover:underline transition-all"
          >
            {isExpanded ? (
              <>View less <ChevronDown className="w-3 h-3 rotate-180" /></>
            ) : (
              <>View all <ChevronDown className="w-3 h-3" /></>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default HoldingsTable;
