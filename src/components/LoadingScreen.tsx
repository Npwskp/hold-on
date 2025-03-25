import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-blue-500/30"></div>
            <div className="absolute top-0 left-0 w-24 h-24 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-xl font-medium text-white">Loading resources...</p>
          <p className="text-sm text-gray-400">Please wait while we prepare your experience</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;