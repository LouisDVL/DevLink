const { default: knex } = require("knex");
const connection = require("./connections");

module.exports = {
  getEdges,
  addEdges,
};

function getEdges(db = connection) {
  return db("edges").select();
}

function addEdges(nodeSource, nodeTarget, db = connection) {
  return db("edges").insert({ source: nodeSource, target: nodeTarget });
}
