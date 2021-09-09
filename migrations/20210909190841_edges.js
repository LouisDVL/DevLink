exports.up = function (knex) {
  return knex.schema.createTable("edges", (table) => {
    table.increments("id").primary();
    table.integer("source").references("node.id");
    table.integer("target").references("node.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("edges");
};
