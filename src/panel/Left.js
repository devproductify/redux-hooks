// Environment dependencies
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Nested Compoent(s)
import ListItem from "../cmp/ListItem.js";

/**
 * Left panel containing list of tasks
 * @returns JSX.Element
 */
export default function Left() {

  // Store: map, dispatch
  const context = useSelector(state => state);
  const dispatch = useDispatch();

  console.log(context);
  return (
    <>
      {
        context?.map((data) => {
          return <ListItem key={data.timestamp} type={data.type} data={data.task} completed={data.done} />
        })
      }
    </>
  );
};