import React from 'react';

interface ControlPanelProps {
  instructions: string;
  setInstructions: (instructions: string) => void;
  moveRobot: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ instructions, setInstructions, moveRobot }) => {
  return (
    <div className="flex justify-center mt-4">
      <input className="border border-gray-400 px-4 py-2" placeholder="Enter instructions (e.g., 1,2,3)" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
      <button className="bg-green-500 text-white px-4 py-2 rounded ml-2" onClick={moveRobot}>
        Move Robot
      </button>
    </div>
  );
};

export default ControlPanel;
