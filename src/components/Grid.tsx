import React from 'react';

interface GridProps {
  width: number;
  height: number;
  visitedPoints: [number, number][];
}

const Grid: React.FC<GridProps> = ({ width, height, visitedPoints }) => {
  // Define the grid and row as arrays of JSX elements
  const grid: JSX.Element[] = [];

  // Create rows for the grid based on width and height
  for (let y = height; y >= -height; y--) {
    let row: JSX.Element[] = [];
    for (let x = -width; x <= width; x++) {
      const isVisited = visitedPoints.some(([px, py]) => px === x && py === y);
      row.push(
        <div key={`${x},${y}`} className={`w-8 h-8 border border-gray-400 ${isVisited ? 'bg-blue-400' : ''}`}>
          {/* Mark origin or robot's last position */}
          {x === 0 && y === 0 && <div className="bg-red-500 w-full h-full" />}
        </div>,
      );
    }
    grid.push(
      <div key={y} className="flex">
        {row}
      </div>,
    );
  }

  return <div className="flex flex-col">{grid}</div>;
};

export default Grid;
