const { default: knex } = require('knex')
const connection = require('./connections')

module.exports = {
  getNodes,
<<<<<<< HEAD
  addInterestNode
=======
  addInterestNode,
  deleteAnInterest
>>>>>>> 9d640a931e4998e3d7398ce6c5df7ae6406f43c7
}

function getNodes (db = connection) {
  return db('nodes').select()
}

function addInterestNode (interestLabel, db = connection) {
  return db('nodes')
    .where({ label: interestLabel })
    .select()
    .then((rows) => {
      if (rows.length === 0) {
        return db('nodes')
          .insert({ label: interestLabel })
          .then(([id]) => {
            return id
          })
      } else {
        return rows[0].id
      }
    })
<<<<<<< HEAD
=======
}

function deleteAnInterest (nodeId, db = connection) {
  return db('nodes')
    .where({ id: nodeId })
    .del()
>>>>>>> 9d640a931e4998e3d7398ce6c5df7ae6406f43c7
}
