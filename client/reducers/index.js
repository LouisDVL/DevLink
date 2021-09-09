import { combineReducers } from "redux";

import words from "./words";
import waiting from "./waiting";
import nodes from "./nodes";

export default combineReducers({
  waiting,
  words,
  nodes,
});
