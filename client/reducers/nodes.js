import { GET_ALL_NODES_SUCCESS } from "../actions/nodesActions";

function nodes(state = [], action) {
  switch (action.type) {
    case GET_ALL_NODES_SUCCESS:
      return [...action.nodes];
    default:
      return state;
  }
}

export default nodes;
