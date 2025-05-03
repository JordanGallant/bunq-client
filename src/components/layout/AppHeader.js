'use client';

import { useState } from 'react';
import { FaRegUserCircle, FaBell, FaCamera, FaRegSmile } from 'react-icons/fa';
import SimpleCameraCapture from '../../components/camera';

const showHomePage = () => {
  window.location.href = '/'; // or wherever your home page is
};


export default function AppHeader({ notificationCount }) {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <>
      {showCamera && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button 
            onClick={() => setShowCamera(false)}
            className="absolute top-4 right-4 text-white text-xl"
          >
            ✕
          </button>
          <SimpleCameraCapture />
        </div>
      )}
      
      <header className="px-4 pt-2 pb-4 flex justify-between items-center">
        <FaRegUserCircle size={32} className="text-gray-500" />
        <div className="flex items-center space-x-2 relative">
          <div className="relative">
            <img/>
            {notificationCount > 0 && (
              <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full ring-2 ring-black bg-red-500 text-xs flex items-center justify-center font-bold">
                {notificationCount}
              </span>
            )}
          </div>
          <button onClick={showHomePage} className="hover:opacity-80">
            <h1 className="text-4xl font-bold ml-2">Home</h1>
          </button>
        </div>
        <div className="flex items-center space-x-3">
          <button onClick={() => setShowCamera(true)} className="hover:opacity-80">
            <FaCamera size={24} />
          </button>
          <div className="bg-purple-600 rounded-full p-1">
            <FaRegSmile size={20} className="text-white" />
          </div>
        </div>
      </header>
    </>
  );
}
