import React from 'react';

interface LoadingScreenProps {
  progress: number;
}

const LoadingScreen = ({ progress }: LoadingScreenProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-blue-500/30"></div>
            <div className="absolute top-0 left-0 w-24 h-24 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="space-y-2">
            <p className="text-xl font-medium text-white">Loading resources...</p>
            <p className="text-sm text-gray-400">Please wait while we prepare your experience</p>
          </div>
          <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-300" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-400">{Math.round(progress)}% loaded</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;