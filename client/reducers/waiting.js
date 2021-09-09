import { WAITING_TRUE, WAITING_FALSE } from "../actions/waiting";

function waiting(state = false, action) {
  switch (action.type) {
    case WAITING_TRUE:
      return true;
    case WAITING_FALSE:
      return false;
    default:
      return state;
  }
}

export default waiting;
