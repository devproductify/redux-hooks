import data from './init.js';

export default function reducer(state = data, evt) {

  // console.log(evt.type, evt.action);

  // TODO: Replace with actions
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
      for(let i=0; i<state.length; i++) {
        if(state[i].timestamp === evt.type.uid) {
          state[i] = {...state[i], done: !state[i].done};
          break;
        }
      }
      break;

    default:
      console.log("Invalid operation!");

  }

  console.log(state);
  return state;
};