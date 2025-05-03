'use client';

import { FiWifi, FiMoon } from 'react-icons/fi';
import { FaSignal, FaBatteryFull } from 'react-icons/fa';

export default function StatusBar({ time }) {
  return (
    <div className="px-4 py-1 flex justify-between items-center text-sm text-gray-300">
      <span>{time}</span>
      <div className="flex items-center space-x-2">
        <FiMoon size={14} />
        <FiWifi size={14} />
        <FaSignal size={14} />
        <span className="text-xs">100%</span>
        <FaBatteryFull size={16} />
      </div>
    </div>
  );
}
