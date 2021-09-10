const express = require('express')
const { getEdges, addEdges } = require('../../db/edges')
const { getNodes, addInterestNode } = require('../../db/nodes')

const router = express.Router()

module.exports = router

router.get('/getAll', (req, res) => {
  getEdges()
    .then((data) => {
      let dataToSend = { edges: data }
      getNodes().then((nodeData) => {
        dataToSend = { ...dataToSend, nodes: nodeData }
        res.send(dataToSend)
      })
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send('Internal error')
    })
})

router.post('/newInterest', (req, res) => {
  const { nodeId, interestLabel } = req.body
  addInterestNode(interestLabel)
    .then((id) => {
      addEdges(nodeId, id).then(() => {
        res.status(201).send()
      })
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send('Internal Server Error')
    })
})
