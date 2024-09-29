import React from 'react';

interface ControlPanelProps {
  instructions: string;
  setInstructions: (instructions: string) => void;
  moveRobot: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ instructions, setInstructions, moveRobot }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full">
      <div className="mb-4">
        <label htmlFor="instructions" className="block text-gray-700 font-medium mb-2">
          Enter Instructions
        </label>
        <input id="instructions" className="border border-gray-300 px-4 py-2 w-full rounded mb-2" placeholder="e.g., 1,2,3" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        <button className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 transition" onClick={moveRobot}>
          Move Robot
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
