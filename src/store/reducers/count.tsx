import { Action } from "redux";
import { Count, INCREASE, DECREASE } from "../actions/count";

const initialState = 0;

export default function counter(state = initialState, action: Action<Count>) {
  console.log("action", action);

  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
