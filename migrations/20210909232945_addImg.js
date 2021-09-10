exports.up = function (knex) {
  return knex.schema.table("nodes", (table) => {
    table.string("img");
  });
};

exports.down = function (knex) {
  return knex.schema.table("nodes", (table) => {
    table.dropColumn("img");
  });
};
