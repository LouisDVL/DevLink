const express = require('express')
const { getEdges } = require('../../db/edges')
const { getNodes } = require('../../db/nodes')

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
