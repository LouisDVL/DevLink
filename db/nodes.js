const connection = require("./connections");

module.exports = { getNodes };

function getNodes(db = connection) {
  return db("nodes").select();
}
