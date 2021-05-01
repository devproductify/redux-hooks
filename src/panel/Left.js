// Environment dependencies
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

/**
 * Left panel containing list of tasks
 * @returns JSX.Element
 */
export default function Left() {

  // Store: map, dispatch
  const context = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <>

    </>
  );
};