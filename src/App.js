// Environment dependencies
import React from 'react';
import "materialize-css/dist/css/materialize.min.css";

// App panels
import LeftPanel from './panel/Left.js';
import RightPanel from './panel/Right.js';

/**
 * App component (main)
 * @returns JSX.Element
 */
export default function App() {

  return (
    <div className="row">
      <div className="col s12 m6">
        <LeftPanel />
      </div>
      <div className="col s12 m6">
        <RightPanel />
      </div>
    </div>
  );
}