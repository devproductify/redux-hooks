import data from './init.js';

export default function reducer(state = data, evt) {

  let timestamp = Date.now();

  // TODO: Replace with actions
  switch (evt.action) {

    case "INSERT":
      let { task, type } = evt.type;
      type = (type === 0) ? 'A' : 'B';
      return [...state, { task, done: false, timestamp, type }];

    case "DELETE":
      console.log("Delete operation!");
      break;

    case "UPDATE":
      console.log("Update operation!");
      break;

    default:
      console.log("Invalid operation!");
      return state;

  }
};