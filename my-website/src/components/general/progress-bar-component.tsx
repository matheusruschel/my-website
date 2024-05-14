import React from 'react';

interface StorageBarProps {
  maxStorage: number;
  currentStorage: number;
}

const ProgressBarComponent: React.FC<StorageBarProps> = ({ maxStorage, currentStorage }) => {
  const percentage = (currentStorage / maxStorage) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-md h-6">
      <div
        className="bg-blue-500 h-full rounded-md"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBarComponent;
