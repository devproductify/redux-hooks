// Environment dependencies
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Nested component(s)
import ProgressCard from '../cmp/ProgressCard.js';

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
      <ProgressCard title="Professional" progress="80" color="red" />
      <ProgressCard title="Personal" progress="60" color="green" />
    </>
  );
};