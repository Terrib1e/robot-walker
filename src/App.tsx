import React, { useState } from 'react';
import Grid from './components/Grid';
import VisitedCoordinates from './components/VisitedCoordinates';
import ControlPanel from './components/ControlPanel';
import RobotStatus from './components/RobotStatus';
import { Howl } from 'howler';

// Define directions: North, East, South, West
const directions: [number, number][] = [
  [0, 1], // North
  [1, 0], // East
  [0, -1], // South
  [-1, 0], // West
];

// Initialize sound effects outside the component so they're loaded only once
const moveSound = new Howl({
  src: ['/move-sound.mp3'], // Path to your sound file
});

const revisitSound = new Howl({
  src: ['/revisit-sound.mp3'], // Path to your sound file
});

const App: React.FC = () => {
  const [visitedPoints, setVisitedPoints] = useState<[number, number][]>([[0, 0]]); // Track visited points, starting at origin
  const [currentPos, setCurrentPos] = useState<[number, number]>([0, 0]); // Current robot position
  const [direction, setDirection] = useState<number>(0); // Robot direction index: 0=N, 1=E, 2=S, 3=W
  const [instructions, setInstructions] = useState<string>(''); // Input instructions
  const [gridWidth, setGridWidth] = useState<number>(10); // Dynamic grid width

  const moveRobot = () => {
    if (!instructions.match(/^\d+(,\d+)*$/)) {
      alert('Please enter a valid set of instructions (e.g., 1,2,3)');
      return;
    }

    let [x, y] = currentPos;
    let newVisited: [number, number][] = [...visitedPoints];
    let currentDirection = direction;

    // Convert the input instructions (comma-separated string) to an array of numbers
    const stepsArray: number[] = instructions.split(',').map(Number);

    // Iterate through each step set and move the robot
    for (const steps of stepsArray) {
      for (let i = 0; i < steps; i++) {
        x += directions[currentDirection][0]; // Adjust X coordinate
        y += directions[currentDirection][1]; // Adjust Y coordinate

        moveSound.play(); // Play movement sound on each step

        // If the robot revisits a point, stop the movement
        if (newVisited.some(([vx, vy]) => vx === x && vy === y)) {
          setCurrentPos([x, y]);
          setVisitedPoints(newVisited);
          revisitSound.play();
          alert(`Robot stopped at previously visited coordinate: (${x}, ${y})`);
          return; // Stop further instructions
        }

        newVisited.push([x, y]);
      }

      // After completing the movement, turn the robot to the right (change direction)
      currentDirection = (currentDirection + 1) % 4;
    }

    // Update state after movement
    setCurrentPos([x, y]);
    setVisitedPoints(newVisited);
    setDirection(currentDirection);
  };

  const reset = () => {
    // Reset robot to the initial position and state
    setVisitedPoints([[0, 0]]);
    setCurrentPos([0, 0]);
    setDirection(0);
    setInstructions('');
  };

  const replayMovements = () => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < visitedPoints.length) {
        setCurrentPos(visitedPoints[i]);
        i++;
      } else {
        clearInterval(interval); // Clear the interval after replay is complete
      }
    }, 500); // Replay at 500ms intervals
  };

  return (
    <div className="App flex flex-col items-center min-h-screen p-4 bg-gray-100 overflow-auto">
      <h1 className="text-center text-3xl font-bold mb-4">Robot Walk Visualization</h1>

      {/* Grid Section */}
      <div className="w-full max-w-4xl flex justify-center mb-4">
        <Grid width={gridWidth} height={gridWidth} visitedPoints={visitedPoints} currentPos={currentPos} />
      </div>

      {/* Grid Size Changer */}
      <div className="w-full max-w-4xl mb-4">
        <label htmlFor="gridSize" className="block text-gray-700 mb-2 text-center">
          Grid Size
        </label>
        <input type="range" id="gridSize" min="5" max="20" value={gridWidth} onChange={(e) => setGridWidth(Number(e.target.value))} className="w-full" />
      </div>

      {/* Control Panel Section */}
      <div className="w-full max-w-4xl flex flex-col sm:flex-row space-x-4 mb-4">
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <ControlPanel instructions={instructions} setInstructions={setInstructions} moveRobot={moveRobot} />

          {/* Replay and Reset Buttons */}
          <div className="flex justify-between mt-4">
            <button onClick={replayMovements} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full sm:w-auto mr-2">
              Replay Movements
            </button>
            <button onClick={reset} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition w-full sm:w-auto">
              Reset Robot
            </button>
          </div>

          <RobotStatus currentPos={currentPos} direction={['North', 'East', 'South', 'West'][direction]} />
        </div>

        {/* Visited Coordinates Section */}
        <div className="w-full sm:w-1/3 bg-white shadow-md rounded-lg p-4">
          <VisitedCoordinates visitedPoints={visitedPoints} />
        </div>
      </div>
    </div>
  );
};

export default App;
