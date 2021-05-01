// Environment dependencies
import React from 'react';

const styles = {
  card: {
    borderRadius: '1em',
    margin: '2em'
  }
};

/**
 * Progress card component (right)
 * @returns JSX.Element
 */
export default function ListItem({ title, progress, color }) {

  return (
    <div className="card" style={styles.card}>
      <div className="card-content">

        <span className={`card-title ${color}-text`}>{title}</span>
        <br />

        Completed : <strong>{progress}%</strong>
        <div className="progress">
          <div className="determinate" style={{ "width": `${progress}%`, 'backgroundColor': `${color}` }}></div>
        </div>

      </div>
    </div>
  );
};