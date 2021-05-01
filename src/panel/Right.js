// Environment dependencies
import M from 'materialize-css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Nested component(s)
import ProgressCard from '../cmp/ProgressCard.js';

const styles = {
  card: {
    borderRadius: '1em',
    margin: '2em'
  }
};

/**
 * Right panel for activity tracking and adding tasks
 * @returns JSX.Element
 */
export default function Right() {

  // Store: map, dispatch
  const context = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    M.AutoInit();
  })

  async function addToStore(evt) {

    if (evt.key === 'Enter') {

      const textRef = document.getElementById('task');
      const optionRef = document.getElementById('category');

      let task = textRef.value;
      let type = optionRef.options.selectedIndex;

      if (task.length === 0)
        return;

      await dispatch({ type: { task, type }, action: "INSERT" })
      textRef.value = "";

    }
  }

  return (
    <>

      <ProgressCard title="Professional" progress="50" color="red" />
      <ProgressCard title="Personal" progress="50" color="green" />

      <div className="card" style={styles.card}>
        <div className="card-content">

          <div className="input-field">
            <select id="category">
              <option value="1">Professional</option>
              <option value="2">Personal</option>
            </select>
            <label>Select category</label>
          </div>

          <div className="input-field">
            <input id="task" type="text" placeholder="Add desciption here..." onKeyUp={(evt) => addToStore(evt)} />
          </div>

        </div>
      </div>

    </>
  );
};