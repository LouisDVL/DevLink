const { default: knex } = require('knex')
const connection = require('./connections')

module.exports = {
  getNodes,
  addInterestNode,
  deleteAnInterest
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
}

function deleteAnInterest (nodeId, db = connection) {
  return db('nodes')
    .where({ id: nodeId })
    .del()
}
