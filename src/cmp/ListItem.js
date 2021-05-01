// Environment dependencies
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

// Style configuration
const styles = {
  card: {
    borderRadius: '0.5em',
    margin: '2em',
    marginRight: '2em',
    marginTop: '2em'
  },
  between: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};

/**
 * List item component (left)
 * @returns JSX.Element
 */
export default function ListItem({ type, data, completed, uid, dispatch }) {

  return (
    <div key={uid} className="card" style={styles.card}>
      <div className="card-content" style={styles.between}>

        <p>
          <label>
            <input type="checkbox" defaultChecked={completed} onClick={() => dispatch({ type: { uid }, action: 'UPDATE' })} />
            <span> {data} <br />
              {
                (type === 'A') ?
                  (<small className="red-text"> Professional </small>) :
                  (<small className="green-text"> Personal </small>)
              }
            </span>
          </label>
        </p>

        <CloseIcon onClick={() => dispatch({ type: { uid }, action: "DELETE" })} />

      </div>
    </div>
  );
}
