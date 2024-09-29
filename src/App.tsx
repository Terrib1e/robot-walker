import React, { useState } from 'react';
import Grid from './components/Grid';
import ControlPanel from './components/ControlPanel';
import RobotStatus from './components/RobotStatus';
import ResetButton from './components/ResetButton';
import './index.css';

const directions: [number, number][] = [
  [0, 1], // North
  [1, 0], // East
  [0, -1], // South
  [-1, 0], // West
];

const directionLabels = ['North', 'East', 'South', 'West'];

const App: React.FC = () => {
  const [visitedPoints, setVisitedPoints] = useState<[number, number][]>([[0, 0]]); // Start with origin visited
  const [currentPos, setCurrentPos] = useState<[number, number]>([0, 0]); // Robot's current position
  const [direction, setDirection] = useState<number>(0); // 0 = N, 1 = E, 2 = S, 3 = W
  const [instructions, setInstructions] = useState<string>(''); // To get user input

  const gridWidth = 10;
  const gridHeight = 10;

  // Move the robot based on the instruction set
  const moveRobot = () => {
    if (!instructions.match(/^\d+(,\d+)*$/)) {
      alert('Please enter a valid set of instructions (e.g., 1,2,3)');
      return;
    }

    let [x, y] = currentPos;
    let newVisited: [number, number][] = [...visitedPoints];
    let currentDirection = direction;

    // Convert input instructions to an array of numbers
    const stepsArray: number[] = instructions.split(',').map(Number);

    for (let steps of stepsArray) {
      for (let i = 0; i < steps; i++) {
        x += directions[currentDirection][0];
        y += directions[currentDirection][1];

        // Stop if revisiting a point
        if (newVisited.some(([vx, vy]) => vx === x && vy === y)) {
          setCurrentPos([x, y]);
          setVisitedPoints(newVisited);
          setDirection(currentDirection);
          alert(`Robot stopped at previously visited coordinate: (${x}, ${y})`);
          return; // Stop processing further instructions
        }

        newVisited.push([x, y]);
      }
      // Turn right (update direction) after completing all steps for this instruction
      currentDirection = (currentDirection + 1) % 4;
    }

    setCurrentPos([x, y]);
    setVisitedPoints(newVisited);
    setDirection(currentDirection);
  };

  // Reset the robot's position and visited points
  const reset = () => {
    setVisitedPoints([[0, 0]]);
    setCurrentPos([0, 0]);
    setDirection(0);
    setInstructions('');
  };

  return (
    <div className="App">
      <h1 className="text-center text-2xl font-bold">Robot Walk Visualization</h1>
      <div className="flex justify-center">
        <Grid width={gridWidth} height={gridHeight} visitedPoints={visitedPoints} />
      </div>
      <ControlPanel instructions={instructions} setInstructions={setInstructions} moveRobot={moveRobot} />
      <RobotStatus currentPos={currentPos} direction={directionLabels[direction]} />
      <ResetButton reset={reset} />
    </div>
  );
};

export default App;
