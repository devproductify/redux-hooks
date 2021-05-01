// Environment dependencies
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Nested component(s)
import ListItem from "../cmp/ListItem.js";

/**
 * Right panel containing list of tasks
 * @returns JSX.Element
 */
export default function Right() {

  // Operations on redux store
  const context = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <>
      {
        // Empty task list
        (context.length === 0) ? (
          <h4 style={{ textAlign: 'center' }}> <br /> No tasks found!</h4>
        ) : ""
      }
      {
        // List tasks
        context?.map((data) => {
          return (
            <ListItem key={data.timestamp}
              uid={data.timestamp}
              type={data.type}
              data={data.task}
              completed={data.done}
              dispatch={dispatch}
            />
          )
        })
      }
    </>
  );
};