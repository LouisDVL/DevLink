exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('nodes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('nodes').insert([
        { id: 1, label: 'Ahmad', img: 'https://avatars.githubusercontent.com/u/7552088?v=4' },
        { id: 2, label: 'Alan', img: 'https://avatars.githubusercontent.com/u/85937572?v=4' },
        { id: 3, label: 'Alex', img: 'https://avatars.githubusercontent.com/u/85384120?v=4' },
        { id: 4, label: 'Ali', img: 'https://avatars.githubusercontent.com/u/26952644?v=4' },
        { id: 5, label: 'Austin', img: 'https://avatars.githubusercontent.com/u/85047232?v=4' },
        { id: 6, label: 'Caleb', img: 'https://avatars.githubusercontent.com/u/86027651?v=4' },
        { id: 7, label: 'Cris', img: 'https://avatars.githubusercontent.com/u/80133173?v=4' },
        { id: 8, label: 'Dave', img: 'https://avatars.githubusercontent.com/u/82419864?v=4' },
        { id: 9, label: 'Dianne', img: 'https://avatars.githubusercontent.com/u/85599717?v=4' },
        { id: 10, label: 'Don', img: 'https://avatars.githubusercontent.com/u/228761?v=4' },
        { id: 11, label: 'Eleanor', img: 'https://avatars.githubusercontent.com/u/58644043?v=4' },
        { id: 12, label: 'James', img: 'https://avatars.githubusercontent.com/u/80490743?v=4' },
        { id: 13, label: 'Jared', img: 'https://avatars.githubusercontent.com/u/77950295?v=4' },
        { id: 14, label: 'Jesse', img: 'https://avatars.githubusercontent.com/u/58745625?v=4' },
        { id: 15, label: 'JV', img: 'https://avatars.githubusercontent.com/u/83190123?v=4' },
        { id: 16, label: 'Kieran', img: 'https://avatars.githubusercontent.com/u/72641947?v=4' },
        { id: 17, label: 'Louis', img: 'https://avatars.githubusercontent.com/u/62978181?s=96&v=4' },
        { id: 18, label: 'Prabhnoor', img: 'https://avatars.githubusercontent.com/u/86031490?v=4' },
        { id: 19, label: 'Prue', img: 'https://avatars.githubusercontent.com/u/6743181?v=4' },
        { id: 20, label: 'Siyang', img: 'https://avatars.githubusercontent.com/u/67619008?v=4' },
        { id: 21, label: 'Sophia', img: 'https://avatars.githubusercontent.com/u/85972272?v=4' },
        { id: 22, label: 'Tadhg', img: 'https://avatars.githubusercontent.com/u/83738717?v=4' },
        { id: 23, label: 'Zahira', img: 'https://avatars.githubusercontent.com/u/86027651?v=4' },
        { id: 24, label: 'Coding' }
        // { id: 25, label: 'Swimming' },
        // { id: 26, label: 'Gigs' },
        // { id: 27, label: 'Cheese' },
        // { id: 28, label: 'Sports' },
        // { id: 29, label: 'Anime' },
        // { id: 30, label: 'Figma' },
        // { id: 31, label: 'Wine' },
        // { id: 32, label: 'Video Games' },
        // { id: 33, label: 'Music' },
        // { id: 34, label: 'Boxing' },
        // { id: 35, label: 'Vegan' },
        // { id: 36, label: 'Coding' }
      ])
    })
}
