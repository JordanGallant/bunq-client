'use client';

import { FaBars, FaRegCircle, FaChevronLeft } from 'react-icons/fa';

export default function SystemNav() {
  // These are typically non-functional in the app itself
  return (
    <div className="bg-black px-6 py-2 flex justify-around items-center text-gray-400">
      <FaBars size={20} />
      <FaRegCircle size={20} />
      <FaChevronLeft size={20} />
    </div>
  );
}
