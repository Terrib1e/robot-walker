# Robot Walk Visualization

A React-based web application that simulates a robot's movement on a Cartesian coordinate system. The robot starts at the origin (0, 0), faces North, and follows a set of instructions where it moves a given number of steps forward, then turns right. The robot stops moving once it revisits any previously visited coordinate.

## Features

- Visualize the robot's movement on a Cartesian grid.
- Input a list of movement instructions for the robot to follow.
- Tracks visited coordinates and stops the robot if it revisits a previously visited point.
- Displays the robot's current position and direction.
- Includes a reset button to restart the robot's position and clear the grid.
- Fully built using React with TypeScript for better type safety and development experience.

## Demo

You can try the live version of the app here: [Demo Link]()

*(Replace with the deployed app's URL, e.g., GitHub Pages, Netlify, or Vercel)*

## Instructions

1. The robot starts at the origin `(0, 0)` facing North.
2. Enter a list of positive integers as instructions, separated by commas (e.g., `1,2,4`).
3. Each instruction represents the number of steps the robot will take in the current direction before turning right (90 degrees clockwise).
4. The robot moves step by step, turns right after completing the steps, and stops if it revisits any point it has already visited.

## Examples

### Example 1: `[1, 2, 4]`

- The robot moves 1 step North to `(0, 1)`.
- It turns right and moves 2 steps East to `(2, 1)`.
- It turns right again and moves 4 steps South to `(2, -3)`.

Final position: `[2, -3]`.

### Example 2: `[1, 2, 4, 1, 5]`

- The robot moves as described above but revisits the point `(1, 1)` after taking 4 steps North from `(1, -3)`, and it stops there.

Final position: `[1, 1]`.

## Installation and Setup

Follow these instructions to run the project locally.

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/<your-username>/robot-walk-visualization.git
cd robot-walk-visualization
