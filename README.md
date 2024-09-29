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

bash
git clone https://github.com/<your-username>/robot-walk-visualization.git
cd robot-walk-visualization

Install Dependencies
Run the following command to install the necessary dependencies:

bash
Copy code
npm install
or if you're using yarn:

bash
Copy code
yarn install
Start the Development Server
To run the application locally, use:

bash
Copy code
npm start
or:

bash
Copy code
yarn start
This will start the app in development mode, and you can access it at http://localhost:3000/.

Build for Production
To create a production build of the application, run:

bash
Copy code
npm run build
This will create an optimized build in the build/ folder.

Project Structure
plaintext
Copy code
robot-walk-visualization/
├── public/                 # Public folder (assets, index.html)
├── src/                    # Main source folder
│   ├── components/         # React components
│   │   ├── ControlPanel.tsx    # Component for handling user input
│   │   ├── Grid.tsx            # Component for displaying the robot's movement grid
│   │   ├── ResetButton.tsx     # Component for resetting the robot's position
│   │   └── RobotStatus.tsx     # Component for displaying the robot's current position and direction
│   ├── App.tsx              # Main App component
│   ├── index.tsx            # App entry point
│   └── index.css            # Styling
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
How to Use the App
Input Instructions: Enter a list of comma-separated positive integers representing the steps the robot should take in each direction (e.g., 1,2,4).
Move the Robot: Click the "Move Robot" button to execute the instructions.
Track Robot Movement: The robot will move on the grid, following the directions, and its path will be marked. If the robot revisits any point, it will stop.
Reset the App: Click the "Reset Robot" button to clear the grid and start over.
Technologies Used
React: Frontend library for building the UI.
TypeScript: Provides static typing and improves code maintainability.
Tailwind CSS: Utility-first CSS framework for fast styling.
npm: Package manager for JavaScript.
Known Limitations
The current implementation tracks visited points using an array, which results in O(n) space complexity (not O(1) as the ideal solution might require).
The robot can only visualize movements up to a certain grid size, and performance may degrade for extremely large inputs.
Future Improvements
Optimize the space complexity to get closer to O(1).
Improve the user interface with more advanced animations for the robot's movement.
Add unit tests to ensure the functionality works as expected.
Allow users to save and load instruction sets.
License
This project is open-source and available under the MIT License.

Contact
If you have any questions or want to contribute, feel free to reach out:

GitHub: Your GitHub Username
Email: your-email@example.com
Thank you for using the Robot Walk Visualization app! 😊
