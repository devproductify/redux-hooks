import data from './init.js';

export default function reducer(state = data, evt) {

  // TODO: Replace with actions
  switch (evt.action) {

    case "INSERT":
      console.log("Insert operation!");
      break;

    case "DELETE":
      console.log("Delete operation!");
      break;

    case "UPDATE":
      console.log("Update operation!");
      break;

    default:
      console.log("Invalid operation!");
      break;

  }

  return state;
};
