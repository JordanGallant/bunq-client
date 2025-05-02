'use client';

import { useRef, useState, useEffect } from 'react';

export default function SimpleCameraCapture() {
  const videoRef = useRef(null);
  const [image, setImage] = useState(null);
  const [stream, setStream] = useState(null);

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
          <button
            onClick={() => setImage(null)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Retake
          </button>
        </>
      )}
    </div>
  );
}
