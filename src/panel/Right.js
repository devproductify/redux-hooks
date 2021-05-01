// Environment dependencies
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

/**
 * Right panel for activity tracking and adding tasks
 * @returns JSX.Element
 */
export default function Right() {

  // Store: map, dispatch
  const context = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <>

    </>
  );
};