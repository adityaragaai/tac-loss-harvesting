import logo0 from '../assets/CryptoLogos0.png';
import logo1 from '../assets/CryptoLogos1.png';
import vector from '../assets/Vector.png';

export const getHoldings = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'btc',
          coin: 'BTC',
          coinName: 'Bitcoin',
          logo: logo0,
          currentPrice: 65320.15,
          totalHolding: 0.85,
          averageBuyPrice: 62000.00,
          stcg: -2450.50,
          ltcg: 12400.00,
          stcgQty: 0.45,
          ltcgQty: 0.40
        },
        {
          id: 'eth',
          coin: 'ETH',
          coinName: 'Ethereum',
          logo: logo1,
          currentPrice: 3420.15,
          totalHolding: 12.5,
          averageBuyPrice: 3100.00,
          stcg: 4200.00,
          ltcg: 8239.29,
          stcgQty: 2.332,
          ltcgQty: 3.245
        },
        {
          id: 'usdt',
          coin: 'USDT',
          coinName: 'Tether',
          logo: vector,
          currentPrice: 1.00,
          totalHolding: 15400.00,
          averageBuyPrice: 1.00,
          stcg: -50.00,
          ltcg: 0.00,
          stcgQty: 5000,
          ltcgQty: 10400
        },
        {
          id: 'sol',
          coin: 'SOL',
          coinName: 'Solana',
          logo: logo1,
          currentPrice: 145.20,
          totalHolding: 150.00,
          averageBuyPrice: 180.00,
          stcg: -3850.00,
          ltcg: -1420.00,
          stcgQty: 80,
          ltcgQty: 70
        },
        {
          id: 'matic',
          coin: 'MATIC',
          coinName: 'Polygon',
          logo: logo0,
          currentPrice: 0.72,
          totalHolding: 55000,
          averageBuyPrice: 0.95,
          stcg: -8200.00,
          ltcg: 4400.00,
          stcgQty: 30000,
          ltcgQty: 25000
        },
        {
          id: 'ada',
          coin: 'ADA',
          coinName: 'Cardano',
          logo: vector,
          currentPrice: 0.48,
          totalHolding: 25000,
          averageBuyPrice: 0.65,
          stcg: -3250.00,
          ltcg: -1150.00,
          stcgQty: 15000,
          ltcgQty: 10000
        },
        {
          id: 'dot',
          coin: 'DOT',
          coinName: 'Polkadot',
          logo: logo1,
          currentPrice: 7.20,
          totalHolding: 2500,
          averageBuyPrice: 9.00,
          stcg: -2900.00,
          ltcg: -1300.00,
          stcgQty: 1500,
          ltcgQty: 1000
        },
        {
          id: 'xrp',
          coin: 'XRP',
          coinName: 'XRP',
          logo: logo0,
          currentPrice: 0.52,
          totalHolding: 12000,
          averageBuyPrice: 0.48,
          stcg: 1200.00,
          ltcg: -450.00,
          stcgQty: 6000,
          ltcgQty: 6000
        },
        {
          id: 'doge',
          coin: 'DOGE',
          coinName: 'Dogecoin',
          logo: vector,
          currentPrice: 0.14,
          totalHolding: 85000,
          averageBuyPrice: 0.18,
          stcg: -5400.00,
          ltcg: 2200.00,
          stcgQty: 45000,
          ltcgQty: 40000
        },
        {
          id: 'shib',
          coin: 'SHIB',
          coinName: 'Shiba Inu',
          logo: logo1,
          currentPrice: 0.000024,
          totalHolding: 500000000,
          averageBuyPrice: 0.000032,
          stcg: -1800.00,
          ltcg: -3200.00,
          stcgQty: 200000000,
          ltcgQty: 300000000
        },
        {
          id: 'avax',
          coin: 'AVAX',
          coinName: 'Avalanche',
          logo: logo0,
          currentPrice: 35.40,
          totalHolding: 240,
          averageBuyPrice: 42.00,
          stcg: -950.00,
          ltcg: -1400.00,
          stcgQty: 100,
          ltcgQty: 140
        },
        {
          id: 'link',
          coin: 'LINK',
          coinName: 'Chainlink',
          logo: vector,
          currentPrice: 14.20,
          totalHolding: 850,
          averageBuyPrice: 12.50,
          stcg: 2200.00,
          ltcg: 1450.00,
          stcgQty: 400,
          ltcgQty: 450
        },
        {
          id: 'atom',
          coin: 'ATOM',
          coinName: 'Cosmos',
          logo: logo1,
          currentPrice: 8.45,
          totalHolding: 1200,
          averageBuyPrice: 11.00,
          stcg: -1650.00,
          ltcg: -840.00,
          stcgQty: 700,
          ltcgQty: 500
        },
        {
          id: 'uni',
          coin: 'UNI',
          coinName: 'Uniswap',
          logo: logo0,
          currentPrice: 7.90,
          totalHolding: 650,
          averageBuyPrice: 6.20,
          stcg: 1400.00,
          ltcg: 850.00,
          stcgQty: 300,
          ltcgQty: 350
        },
        {
          id: 'ltc',
          coin: 'LTC',
          coinName: 'Litecoin',
          logo: vector,
          currentPrice: 82.15,
          totalHolding: 125,
          averageBuyPrice: 95.00,
          stcg: -1250.00,
          ltcg: -650.00,
          stcgQty: 75,
          ltcgQty: 50
        }
      ]);
    }, 800);
  });
};

export const getCapitalGains = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        stcg: { profits: 24540, losses: -12743 },
        ltcg: { profits: 18200, losses: -8650 }
      });
    }, 500);
  });
};
