// Environment dependencies
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

/**
 * App component (main)
 */
export default function App() {

  // Store operations: map, dispatch
  const context = useSelector(state => state);
  const dispatch = useDispatch();

  // Dispatch actions
  dispatch({ type: "", action: "INSERT" });
  dispatch({ type: "", action: "UPDATE" });
  dispatch({ type: "", action: "DELETE" });
  dispatch({ type: "", action: "REMOVE" });

  return (
    <>
      {JSON.stringify(context)}
    </>
  );
}
