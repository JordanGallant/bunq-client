'use client';

import { FaUniversity } from 'react-icons/fa';

export default function AwaitingEvents({ title, details }) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">Awaiting Events</h2>
      <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-3">
        <div className="bg-purple-600 rounded-full p-2">
          <FaUniversity size={20} className="text-white" />
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-400">{details}</p>
        </div>
      </div>
    </section>
  );
}
