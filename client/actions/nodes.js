import { getAll } from "../api/nodes";
import { waitingPending, waitingFinished } from "./waiting";
import { getAllNodesSuccess } from "./nodesActions";

export function getAllNodes() {
  return (dispatch) => {
    dispatch(waitingPending());
    getAll()
      .then((data) => {
        dispatch(getAllNodesSuccess(data));
        dispatch(waitingFinished());
      })
      .catch((err) => {
        dispatch(waitingFinished());
      });
  };
}
