import React from 'react';

interface RobotStatusProps {
  currentPos: [number, number];
  direction: string;
}

const RobotStatus: React.FC<RobotStatusProps> = ({ currentPos, direction }) => {
  return (
    <div className="text-center mt-4">
      <h2 className="text-xl font-semibold">Robot Status</h2>
      <p>
        Current Position: ({currentPos[0]}, {currentPos[1]})
      </p>
      <p>Current Direction: {direction}</p>
    </div>
  );
};

export default RobotStatus;
