import { ADD_COUNTER, REDUCE_COUNTER } from "./actionTypes";

const initState = {
  counter: 1
};
export function reducer(state = initState, { type, payload }) {
  switch (type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case REDUCE_COUNTER:
      return state.counter > 0
        ? {
            ...state,
            counter: state.counter - payload
          }
        : state;
    default:
      return state;
  }
}
