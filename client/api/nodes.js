import request from 'superagent'

export function getAll () {
  return request
    .get('http://localhost:3000/api/v1/index/getAll')
    .then((data) => {
      return data.body
    })
    .then((data) => {
      let nodeList = []
      const newProcessEdges = data.edges.map((elem) => {
        return {
          ...elem,
          id: '' + 1001 + elem.id,
          source: '' + elem.source,
          target: '' + elem.target
        }
      })
      nodeList = [...data.nodes, ...newProcessEdges]
      return nodeList
    })
}

export function postInterest (nodeId, interestLabel) {
  return request.post('http://localhost:3000/api/v1/index/newInterest').send({
    nodeId,
    interestLabel
  })
<<<<<<< HEAD
=======
}

export function deleteInterest (nodeId) {
  return request.del('http://localhost:3000/api/v1/index/deleteInterest').send({
    id: nodeId
  })
>>>>>>> 9d640a931e4998e3d7398ce6c5df7ae6406f43c7
}
