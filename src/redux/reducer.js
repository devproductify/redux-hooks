// Stub (initial state)
import data from './init.js';

/**
 * Default reducer for redux store
 * @param {{ timestamp:number, task:string, done:boolean, type:string }[]}:any state 
 * @param { object }:any evt 
 * @returns { object }:any
 */
function reducer(state = data, evt) {

  // console.log(evt.type, evt.action);
  switch (evt.action) {

    case "INSERT":
      let timestamp = Date.now();
      let { task, type } = evt.type;
      type = (type === 0) ? 'A' : 'B';
      return [...state, { task, done: false, timestamp, type }];

    case "DELETE":
      return state.filter(data => {
        return data.timestamp !== evt.type.uid;
      });

    case "UPDATE":
      for (let i = 0; i < state.length; i++) {
        if (state[i].timestamp === evt.type.uid) {
          state[i] = { ...state[i], done: !state[i].done };
          break;
        }
      }
      break;

    default:
      console.log("Invalid operation!");

  }

  // console.log(state);
  return state;
};

export default reducer;