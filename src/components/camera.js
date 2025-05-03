'use client';

import { useRef, useState, useEffect } from 'react';

export default function SimpleCameraCapture({ onImageCaptured }) {
  const videoRef = useRef(null);
  const [image, setImage] = useState(null);
  const [stream, setStream] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
      });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
    } catch (err) {
      alert('Camera access denied or not available');
      console.error(err);
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const photo = canvas.toDataURL('image/png');
    setImage(photo);
    // Stop camera
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
  };

  const uploadImage = async () => {
    if (!image) {
      console.error("No image selected");
      return;
    }
    try {
      setIsLoading(true);
      // Convert base64 to blob
      const res = await fetch(image);
      const blob = await res.blob();
      // Create a proper file object with the correct name and type
      const file = new File([blob], "captured-image.png", { type: "image/png" });
      // Append to FormData
      const formData = new FormData();
      formData.append('file', file);
      console.log("Uploading image...");
      // Send to backend
      const response = await fetch('https://bunq-api.onrender.com/face_swap', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        const errorData = await response.text();
        console.error(`Upload failed with status ${response.status}: ${errorData}`);
        setIsLoading(false);
        return;
      }
      // For image responses, we need to handle them differently
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('image')) {
        // Handle image response
        const imageBlob = await response.blob();
        const imageUrl = URL.createObjectURL(imageBlob);
        console.log('Face swap successful, image URL:', imageUrl);
        setImage(imageUrl);
        
        // Call the onImageCaptured prop with the new image URL
        if (onImageCaptured) {
          onImageCaptured(imageUrl);
        }
        
        setIsLoading(false);
        return imageUrl;
      } else {
        // Handle JSON response
        const result = await response.json();
        console.log('Upload result:', result);
        setIsLoading(false);
        return result;
      }
    } catch (error) {
      console.error('Error during face swap:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      // Clean up on unmount
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <div className="flex flex-col items-center gap-4">
      {!image && (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-64 h-64 object-cover rounded-full bg-black"
          />
          <button
            onClick={startCamera}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Start Camera
          </button>
          <button
            onClick={capturePhoto}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Capture Photo
          </button>
        </>
      )}
      {image && (
        <>
          <img
            src={image}
            alt="Captured"
            className="w-64 h-64 object-cover rounded-full"
          />
          <div className="flex gap-3">
            <button
              onClick={uploadImage}
              disabled={isLoading}
              className={`px-4 py-2 rounded ${isLoading ? 'bg-gray-400' : 'bg-blue-500'} text-white`}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                'Get Avatar'
              )}
            </button>
            <button
              onClick={() => setImage(null)}
              disabled={isLoading}
              className={`px-4 py-2 rounded ${isLoading ? 'bg-gray-400' : 'bg-red-500'} text-white`}
            >
              Retake
            </button>
          </div>
        </>
      )}
    </div>
  );
}