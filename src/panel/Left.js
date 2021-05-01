// Environment dependencies
import M from 'materialize-css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Nested component(s)
import ProgressCard from '../cmp/ProgressCard.js';

// Style configuration
const styles = {
  card: {
    borderRadius: '1em',
    margin: '2em'
  }
};

/**
 * Left panel for activity tracking and adding tasks
 * @returns JSX.Element
 */
export default function Left() {

  // Operations on redux store
  const dispatch = useDispatch();
  const context = useSelector(state => {

    let countA = 0;
    let countB = 0;

    let setA = 0;
    let setB = 0;

    state.forEach(data => {
      if (data.type === 'A') {

        if (data.done === true)
          setA++;

        countA++;

      } else {

        if (data.done === true)
          setB++;

        countB++;

      }
    });

    let A = (setA / countA) * 100;
    let B = (setB / countB) * 100;

    if (countA === 0)
      A = 0;
    if (countB === 0)
      B = 0;

    return { A, B };

  });

  // Initiate materialize components
  useEffect(() => M.AutoInit());

  // Add task entry in store
  async function addToStore(evt) {

    if (evt.key === 'Enter') {

      const textRef = document.getElementById('task');
      const optionRef = document.getElementById('category');

      let task = textRef.value;
      let type = optionRef.options.selectedIndex;

      // No task added
      if (task.length === 0) {
        M.toast({ html: "Task cannot be empty!" });
        return;
      }

      await dispatch({ type: { task, type }, action: "INSERT" })
      M.toast({ html: "Task added!" });
      textRef.value = "";

    }
  }

  return (
    <>

      <ProgressCard title="Professional" progress={context.A.toFixed(2)} color="red" />
      <ProgressCard title="Personal" progress={context.B.toFixed(2)} color="green" />

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
            <input id="task" type="text" onKeyUp={(evt) => addToStore(evt)}
              placeholder="Add description here..." />
          </div>

        </div>
      </div>

    </>
  );
};