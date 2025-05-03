'use client';

import { FaHome, FaPlane, FaChartPie, FaChartLine, FaBtc } from 'react-icons/fa';

const showHomePage = () => {
  window.location.href = '/'; // or wherever your home page is
};
function NavItem({ icon: Icon, label, active = false, isBeta = false, onClick }) {
  const color = active ? 'text-blue-500' : 'text-gray-500';

  return (
    <button  
      className={`flex flex-col items-center space-y-1 ${color} hover:text-gray-300 transition-colors relative`}
    >
      {isBeta && (
        <span className="absolute -top-2 text-[8px] bg-gray-600 text-gray-300 px-1 rounded">
          BETA
        </span>
      )}
      <Icon size={22} />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}

export default function BottomNav() {
  return (
    <nav className="bg-black border-t border-gray-800 px-2 py-2 flex justify-around items-center mt-auto">
      <NavItem icon={FaHome} label="Home" active onClick={showHomePage} />
      <NavItem icon={FaPlane} label="Travel" />
      <NavItem icon={FaChartPie} label="Budgeting" />
      <NavItem icon={FaChartLine} label="Stocks" isBeta />
      <NavItem icon={FaBtc} label="Crypto" isBeta />
    </nav>
  );
}
