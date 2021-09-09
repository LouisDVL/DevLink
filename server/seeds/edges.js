exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("edges")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("edges").insert([
        { id: 1, source: 1, target: 8 },
        { id: 2, source: 1, target: 7 },
        { id: 3, source: 2, target: 6 },
        { id: 4, source: 2, target: 7 },
        { id: 5, source: 2, target: 8 },
        { id: 6, source: 3, target: 5 },
        { id: 7, source: 3, target: 7 },
        { id: 8, source: 3, target: 9 },
        { id: 9, source: 4, target: 5 },
        { id: 10, source: 4, target: 7 },
        { id: 11, source: 4, target: 9 },
      ]);
    });
};
