import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Disclaimer from './components/Disclaimer';
import SummaryCard from './components/SummaryCard';
import HoldingsTable from './components/HoldingsTable';
import LoadingScreen from './components/LoadingScreen';
import { getHoldings, getCapitalGains } from './data/mockApi';
import { Loader2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { clsx } from 'clsx';

function App() {
  const [loading, setLoading] = useState(true);
  const [holdings, setHoldings] = useState([]);
  const [initialGains, setInitialGains] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true); 
  const [showSplash, setShowSplash] = useState(true);

  const [minTimePassed, setMinTimePassed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMinTimePassed(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (minTimePassed && !loading && initialGains) {
      setShowSplash(false);
    }
  }, [minTimePassed, loading, initialGains]);

  useEffect(() => {
    const html = window.document.documentElement;
    const body = window.document.body;
    console.log('Switching theme. isDarkMode:', isDarkMode);
    if (isDarkMode) {
      html.classList.add('dark');
      body.classList.add('dark');
    } else {
      html.classList.remove('dark');
      body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [holdingsData, gainsData] = await Promise.all([
          getHoldings(),
          getCapitalGains()
        ]);
        setHoldings(holdingsData);
        setInitialGains(gainsData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Unable to load financial data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const afterHarvestData = useMemo(() => {
    if (!initialGains) return null;

    let postStcg = { ...initialGains.stcg };
    let postLtcg = { ...initialGains.ltcg };

    selectedIds.forEach(id => {
      const asset = holdings.find(h => h.id === id);
      if (asset) {
        // According to instructions: 
        // If gain > 0 → add to profits
        // If gain < 0 → add to losses
        if (asset.stcg > 0) postStcg.profits += asset.stcg;
        else if (asset.stcg < 0) postStcg.losses += asset.stcg;

        if (asset.ltcg > 0) postLtcg.profits += asset.ltcg;
        else if (asset.ltcg < 0) postLtcg.losses += asset.ltcg;
      }
    });

    const preNet = (initialGains.stcg.profits + initialGains.stcg.losses) + 
                   (initialGains.ltcg.profits + initialGains.ltcg.losses);
    
    const postNet = (postStcg.profits + postStcg.losses) + 
                    (postLtcg.profits + postLtcg.losses);

    // Savings = reduction in net gain (to reduce tax)
    const savings = Math.max(0, preNet - postNet);

    return {
      stcg: postStcg,
      ltcg: postLtcg,
      savings
    };
  }, [holdings, initialGains, selectedIds]);

  const handleToggleSelect = (id) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedIds.length === holdings.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(holdings.map(h => h.id));
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Something went wrong</h2>
          <p className="text-slate-500 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="btn-primary w-full"
          >
            Retry Loading
          </button>
        </div>
      </div>
    );
  }


  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <LoadingScreen key="loader" />
      ) : (
        <motion.div 
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={clsx(
            "min-h-screen pb-10 transition-colors duration-300",
            isDarkMode ? "dark bg-[#0b0e14]" : "bg-[#f8fafc]"
          )}
        >
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-black text-slate-900 dark:text-white">Tax Harvesting</h1>
                <a href="#" className="text-blue-600 font-bold text-xs underline underline-offset-4 decoration-blue-200">
                  How it works?
                </a>
              </div>
            </div>

            <Disclaimer />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
              {initialGains && (
                <SummaryCard 
                  title="Pre Harvesting" 
                  type="pre" 
                  data={initialGains} 
                />
              )}
              {afterHarvestData && (
                <SummaryCard 
                  title="After Harvesting" 
                  type="after" 
                  data={afterHarvestData} 
                />
              )}
            </div>

            <HoldingsTable 
              holdings={holdings}
              selectedIds={selectedIds}
              onToggleSelect={handleToggleSelect}
              onSelectAll={handleSelectAll}
              isDarkMode={isDarkMode}
            />
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
