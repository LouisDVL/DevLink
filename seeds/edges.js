exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('edges')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('edges').insert([
        { id: 1001, source: 1, target: 8 },
        { id: 1002, source: 1, target: 7 },
        { id: 1003, source: 2, target: 6 },
        { id: 1004, source: 2, target: 7 },
        { id: 1005, source: 2, target: 8 },
        { id: 1006, source: 3, target: 5 },
        { id: 1007, source: 3, target: 7 },
        { id: 1008, source: 3, target: 9 },
        { id: 1009, source: 4, target: 5 },
        { id: 1010, source: 4, target: 7 },
        { id: 1011, source: 4, target: 9 }
      ])
    })
}
