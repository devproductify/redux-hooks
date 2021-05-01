// Environment dependencies
import React from 'react';

// App panels
import LeftPanel from './panel/Left.js';
import RightPanel from './panel/Right.js';

/**
 * App component (main)
 * @returns JSX.Element
 */
export default function App() {

  return (
    <>
      <LeftPanel />
      <RightPanel />
    </>
  );
}