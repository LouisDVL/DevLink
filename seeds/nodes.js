exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('nodes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('nodes').insert([
        { id: 1, label: 'Caleb' },
        { id: 2, label: 'Louis' },
        { id: 3, label: 'Zahira' },
        { id: 4, label: 'Kieran' },
        { id: 5, label: 'Wine' },
        { id: 6, label: 'Video Games' },
        { id: 7, label: 'Music' },
        { id: 8, label: 'Boxing' },
        { id: 9, label: 'Vegan' }
      ])
    })
}
