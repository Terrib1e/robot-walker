// src/components/VisitedCoordinates.tsx
import React from 'react';

interface VisitedCoordinatesProps {
  visitedPoints: [number, number][];
}

const VisitedCoordinates: React.FC<VisitedCoordinatesProps> = ({ visitedPoints }) => {
  return (
    <div className="p-4 w-full max-w-xs bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Visited Coordinates</h2>
      <ul className="list-disc list-inside">
        {visitedPoints.map(([x, y], index) => (
          <li key={index} className="text-gray-700">
            ({x}, {y})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisitedCoordinates;
