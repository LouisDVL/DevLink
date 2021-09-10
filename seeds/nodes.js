exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('nodes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('nodes').insert([
        { id: 1, label: 'Ahmad', img: 'https://ca.slack-edge.com/T02SQPVAC-U01TLETH2P3-f3ee7cdf16b2-72' },
        { id: 2, label: 'Alan', img: 'https://ca.slack-edge.com/T02SQPVAC-U0252NVB682-0135dd5e230a-72' },
        { id: 3, label: 'Alex', img: 'https://ca.slack-edge.com/T02SQPVAC-U0241119553-14d8131564d2-72' },
        { id: 4, label: 'Ali', img: 'https://ca.slack-edge.com/T02SQPVAC-U023P86PY3B-976e2618adec-72' },
        { id: 5, label: 'Austin', img: 'https://ca.slack-edge.com/T02SQPVAC-U023G15NWDQ-a637f5d2b8db-72' },
        { id: 6, label: 'Caleb', img: 'https://ca.slack-edge.com/T02SQPVAC-U025J318J4D-09649ac91924-72' },
        { id: 7, label: 'Chris', img: 'https://ca.slack-edge.com/T02SQPVAC-U0246PYBTLG-f46f6fa1b082-72' },
        { id: 8, label: 'Dave', img: 'https://ca.slack-edge.com/T02SQPVAC-U01THMGCFHD-af1da43ed094-72' },
        { id: 9, label: 'Dianne', img: 'https://ca.slack-edge.com/T02SQPVAC-U0248M1LTJA-ec0413a5236e-72' },
        { id: 10, label: 'Don', img: 'https://ca.slack-edge.com/T02SQPVAC-U0A30NRSB-gc6de6ae33d7-72' },
        { id: 11, label: 'Eleanor', img: 'https://ca.slack-edge.com/T02SQPVAC-U01U4G23G4U-c365c2fa9db0-72' },
        { id: 12, label: 'James', img: 'https://ca.slack-edge.com/T02SQPVAC-U021E9017MF-5a91e80d0288-72' },
        { id: 13, label: 'Jared', img: 'https://ca.slack-edge.com/T02SQPVAC-U01KHB6BVHU-f7d6ded39c48-72' },
        { id: 14, label: 'Jesse', img: 'https://ca.slack-edge.com/T02SQPVAC-U0253SX7Y3G-420753a96a09-72' },
        { id: 15, label: 'JV', img: 'https://ca.slack-edge.com/T02SQPVAC-U01V6ABTZ0E-d687e64f8b03-72' },
        { id: 16, label: 'Kieran', img: 'https://avatars.githubusercontent.com/u/72641947?s=96&v=4' },
        { id: 17, label: 'Louis', img: 'https://avatars.githubusercontent.com/u/62978181?s=96&v=4' },
        { id: 18, label: 'Prabhnoor', img: 'https://ca.slack-edge.com/T02SQPVAC-U02548MA8BG-6727d8a9b7de-72' },
        { id: 19, label: 'Prue', img: 'https://ca.slack-edge.com/T02SQPVAC-U016XGX1W1M-677cc16cd78e-72' },
        { id: 20, label: 'Siyang', img: 'https://ca.slack-edge.com/T02SQPVAC-U02341HDJSJ-c2ccf5d6c109-72' },
        { id: 21, label: 'Sophia', img: 'https://avatars.githubusercontent.com/u/85972272?s=96&v=4' },
        { id: 22, label: 'Tadhg', img: 'https://ca.slack-edge.com/T02SQPVAC-U024WQDA402-ed31e585c1a4-72' },
        { id: 23, label: 'Zahira', img: 'https://ca.slack-edge.com/T02SQPVAC-U0257ETHPB7-a2f4c4aca33f-72' },
        { id: 24, label: 'Fishing' },
        { id: 25, label: 'Swimming' },
        { id: 26, label: 'Gigs' },
        { id: 27, label: 'Cheese' },
        { id: 28, label: 'Sports' },
        { id: 29, label: 'Anime' },
        { id: 30, label: 'Figma' },
        { id: 31, label: 'Wine' },
        { id: 32, label: 'Video Games' },
        { id: 33, label: 'Music' },
        { id: 34, label: 'Boxing' },
        { id: 35, label: 'Vegan' },
        { id: 36, label: 'Coding' }
      ])
    })
}
