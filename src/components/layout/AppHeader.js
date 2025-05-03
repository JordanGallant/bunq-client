'use client';

import { useState } from 'react';
import { FaRegUserCircle, FaBell, FaCamera, FaRegSmile } from 'react-icons/fa';
import SimpleCameraCapture from '../../components/camera';
import Link from 'next/link';

export default function AppHeader({ notificationCount }) {
  const [showCamera, setShowCamera] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);

  const handleImageCaptured = (imageUrl) => {
    setProfileImage(imageUrl);
    setShowCamera(false); // Close the camera modal after capturing
  };

  const openLightbox = () => {
    if (profileImage) {
      setShowLightbox(true);
    }
  };

  const closeLightbox = () => {
    setShowLightbox(false);
  };

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
          <SimpleCameraCapture onImageCaptured={handleImageCaptured} />
        </div>
      )}
      
      {/* Image Lightbox Modal */}
      {showLightbox && profileImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-xl"
          >
            ✕
          </button>
          <div className="max-w-4xl max-h-screen p-4">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="max-w-full max-h-[90vh] object-contain rounded"
            />
          </div>
        </div>
      )}
      
      <header className="px-4 pt-2 pb-4 flex justify-between items-center">
        {/* Use the captured image if available, otherwise show the default icon */}
        {profileImage ? (
          <div onClick={openLightbox} className="cursor-pointer">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-8 h-8 rounded-full object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        ) : (
          <FaRegUserCircle size={32} className="text-gray-500" />
        )}
        
        <div className="flex items-center space-x-2 relative">
          <div className="relative">
            {notificationCount > 0 && (
              <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full ring-2 ring-black bg-red-500 text-xs flex items-center justify-center font-bold">
                {notificationCount}
              </span>
            )}
          </div>
          <Link href="/">
            <h1 className="text-4xl font-bold ml-2 cursor-pointer">Home</h1>
          </Link>
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