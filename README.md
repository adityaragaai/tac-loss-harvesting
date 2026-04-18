# 📈 Tax Loss Harvesting Tool

A premium, interactive financial dashboard built to help investors optimize their tax burden through smart tax-loss harvesting. This tool calculates potential tax savings in real-time by simulating the sale of specific assets from a portfolio.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://tac-loss-harvesting.vercel.app/)

---

## ✨ Features

- **🚀 Premium Experience**: Smooth splash screen and transitions powered by Framer Motion.
- **🌓 Adaptive UI**: Full support for Dark and Light modes with a seamless theme toggle.
- **📊 Real-time Analytics**: Compare "Pre-Harvesting" and "After-Harvesting" scenarios instantly.
- **🎯 Asset Selection**: Interactive holdings table allowing granular selection of stocks/mutual funds.
- **💰 Tax Savings Calculation**: Dynamic calculation of STCG (Short Term Capital Gains) and LTCG (Long Term Capital Gains) savings.
- **📱 Fully Responsive**: Optimized for all devices, from desktops to mobile phones.

---

## 📸 Screenshots

### 🖥️ Desktop Experience

| Dark Mode Dashboard | Interactive Holdings |
| :---: | :---: |
| <img src="https://github.com/user-attachments/assets/508eb97b-d778-41fb-a3f7-4c2f94035b80" width="100%" /> | <img src="https://github.com/user-attachments/assets/a474354e-51b1-488c-b698-7b8af1b4728a" width="100%" /> |

### 📱 Mobile View

<p align="center">
  <img src="https://github.com/user-attachments/assets/d45be988-43d0-40a5-a15c-5a1fa56580ee" width="300px" alt="Mobile View" />
</p>


---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx`, `tailwind-merge`

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/tax-loss-harvesting.git
   cd tax-loss-harvesting
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 💡 How it Works

1. **Dashboard Load**: The app fetches mock financial data and displays your current capital gains profile.
2. **Selection**: Select assets from the **Holdings Table** that you intend to harvest (sell).
3. **Comparison**: The "After Harvesting" card updates in real-time to show your new tax position and the total **Savings** achieved.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ for precision financial planning.
</p>
