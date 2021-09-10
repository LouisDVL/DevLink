const express = require('express')
const { getEdges, addEdges } = require('../../db/edges')
<<<<<<< HEAD
const { getNodes, addInterestNode } = require('../../db/nodes')
=======
const { getNodes, addInterestNode, deleteAnInterest } = require('../../db/nodes')
>>>>>>> 9d640a931e4998e3d7398ce6c5df7ae6406f43c7

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
<<<<<<< HEAD
=======
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send('Internal Server Error')
    })
})

router.delete('/deleteInterest', (req, res) => {
  const { id } = req.body
  deleteAnInterest(id)
    .then(() => {
      res.status(200).send()
>>>>>>> 9d640a931e4998e3d7398ce6c5df7ae6406f43c7
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send('Internal Server Error')
    })
})
