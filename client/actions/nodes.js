import { getAll, postInterest } from '../api/nodes'
import { waitingPending, waitingFinished } from './waiting'
import { getAllNodesSuccess } from './nodesActions'

export function getAllNodes () {
  return (dispatch) => {
    dispatch(waitingPending())
    getAll()
      .then((data) => {
        dispatch(getAllNodesSuccess(data))
        dispatch(waitingFinished())
      })
      .catch((err) => {
        dispatch(waitingFinished())
      })
  }
}

export function sendInterestNode (nodeId, interestLabel) {
  return (dispatch) => {
    dispatch(waitingPending())
    postInterest(nodeId, interestLabel)
      .then(() => {
        dispatch(waitingFinished())
      })
      .catch((err) => {
        dispatch(waitingFinished())
      })
  }
}
