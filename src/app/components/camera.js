import { useState, useRef, useEffect } from 'react';
import { Camera, X, Check } from 'lucide-react';

export default function AvatarCameraButton() {
  const [cameraOpen, setCameraOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "user" } 
      });
      
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      setCameraOpen(true);
      setHasPermission(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
      setHasPermission(false);
    }
  };

  const closeCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setCameraOpen(false);
  };

  const captureImage = () => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    const imageDataUrl = canvas.toDataURL('image/png');
    setCapturedImage(imageDataUrl);
    closeCamera();
  };

  const resetCapture = () => {
    setCapturedImage(null);
  };

  const saveAvatar = () => {
    // Here you would typically send the image to your server
    // or process it further for your avatar creation flow
    console.log("Saving avatar:", capturedImage);
    
    // For demonstration: simulating a successful save
    alert("Avatar created successfully!");
    resetCapture();
  };

  useEffect(() => {
    return () => {
      // Clean up when component unmounts
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  if (capturedImage) {
    return (
      <div className="flex flex-col items-center">
        <div className="relative w-64 h-64 mb-4">
          <img 
            src={capturedImage}
            alt="Captured avatar" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex gap-4">
          <button 
            onClick={resetCapture}
            className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <X size={18} />
            Retake
          </button>
          <button 
            onClick={saveAvatar}
            className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <Check size={18} />
            Use Avatar
          </button>
        </div>
      </div>
    );
  }

  if (cameraOpen) {
    return (
      <div className="flex flex-col items-center">
        <div className="relative w-64 h-64 mb-4 rounded-full overflow-hidden">
          <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-4">
          <button 
            onClick={closeCamera}
            className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <X size={18} />
            Cancel
          </button>
          <button 
            onClick={captureImage}
            className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <Camera size={18} />
            Capture
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={openCamera}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md flex items-center gap-2 transition-colors"
      >
        <Camera size={20} />
        Create Avatar
      </button>
      {hasPermission === false && (
        <p className="text-red-500 mt-2">
          Camera permission denied. Please enable camera access in your browser settings.
        </p>
      )}
    </div>
  );
}