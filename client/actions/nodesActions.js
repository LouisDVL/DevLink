export const GET_ALL_NODES_SUCCESS = 'GET_ALL_NODES_SUCCESS'

export function getAllNodesSuccess (nodes) {
  return {
    type: GET_ALL_NODES_SUCCESS,
    nodes
  }
}
