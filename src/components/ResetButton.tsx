import React from 'react';

interface ResetButtonProps {
  reset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ reset }) => {
  return (
    <div className="text-center mt-4">
      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={reset}>
        Reset Robot
      </button>
    </div>
  );
};

export default ResetButton;
