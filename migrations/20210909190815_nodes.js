exports.up = function (knex) {
  return knex.schema.createTable("nodes", (table) => {
    table.increments("id").primary();
    table.string("label");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("node");
};
