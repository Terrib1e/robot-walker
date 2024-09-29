import React from 'react';

interface GridProps {
  width: number;
  height: number;
  visitedPoints: [number, number][];
  currentPos: [number, number]; // Robot's current position
}

const Grid: React.FC<GridProps> = ({ width, height, visitedPoints, currentPos }) => {
  const grid: JSX.Element[] = [];

  // Set the max width and height to 90% of the viewport, but limit the size for smaller screens
  const gridSize = Math.min(window.innerWidth, window.innerHeight) * 0.7; // 70% of viewport size
  const cellSize = gridSize / (Math.max(width, height) * 2); // Adjust cell size based on the grid dimensions

  for (let y = height; y >= -height; y--) {
    let row: JSX.Element[] = [];
    for (let x = -width; x <= width; x++) {
      const isVisited = visitedPoints.some(([px, py]) => px === x && py === y);
      const isCurrent = currentPos[0] === x && currentPos[1] === y;

      row.push(
        <div
          key={`${x},${y}`}
          className="relative"
          style={{
            width: `${cellSize}px`,
            height: `${cellSize}px`,
            border: '1px solid gray',
            backgroundColor: isVisited ? 'blue' : 'transparent',
            transition: 'transform 0.5s ease-in-out', // Smooth transition for movement
            transform: isCurrent ? 'scale(1.2)' : 'scale(1)', // Highlight current position
          }}
        >
          {/* Mark the origin (0, 0) */}
          {x === 0 && y === 0 && <div style={{ backgroundColor: 'red', width: '100%', height: '100%' }} />}
        </div>,
      );
    }
    grid.push(
      <div key={y} style={{ display: 'flex' }}>
        {row}
      </div>,
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '90vw', // Limit grid size
        maxHeight: '70vh', // Limit grid height to 70% of viewport height
        overflow: 'auto', // Allow scrolling if needed
      }}
    >
      {grid}
    </div>
  );
};

export default Grid;
