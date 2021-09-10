<<<<<<< HEAD
import { getAll, postInterest } from '../api/nodes'
=======
import { getAll, postInterest, deleteInterest } from '../api/nodes'
>>>>>>> 9d640a931e4998e3d7398ce6c5df7ae6406f43c7
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

<<<<<<< HEAD
export function sendInterestNode (nodeId, interestLabel) {
=======
export function sendInterestNode (nodeId, interestLabel, history) {
>>>>>>> 9d640a931e4998e3d7398ce6c5df7ae6406f43c7
  return (dispatch) => {
    dispatch(waitingPending())
    postInterest(nodeId, interestLabel)
      .then(() => {
        dispatch(waitingFinished())
<<<<<<< HEAD
=======
        history.push('/')
>>>>>>> 9d640a931e4998e3d7398ce6c5df7ae6406f43c7
      })
      .catch((err) => {
        dispatch(waitingFinished())
      })
  }
<<<<<<< HEAD
=======
}

export function removeInterestNode (nodeId, history) {
  return (dispatch) => {
    dispatch(waitingPending())
    deleteInterest(nodeId)
      .then(() => {
        dispatch(waitingFinished())
        history.push('/')
      })
      .catch((err) => {
        dispatch(waitingFinished())
      })
  }
>>>>>>> 9d640a931e4998e3d7398ce6c5df7ae6406f43c7
}
