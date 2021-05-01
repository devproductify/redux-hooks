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

  return (
    <>
      <ListItem key="a" type="A" data="Complete documentation" completed="checked" />
      <ListItem key="b" type="B" data="Revamp codebase" completed="" />
    </>
  );
};