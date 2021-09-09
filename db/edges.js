const connection = require('./connections')

module.exports = {
  getEdges
}

function getEdges (db = connection) {
  return db('edges').select()
}
