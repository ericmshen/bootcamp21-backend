const casual = require('casual')
const userData = require('./users')
const songData = require('./song')

casual.define('relation', ({ personId, songId }) => ({
  id: casual.uuid,
  personId,
  songId,
}))

const usersongs = []

// problem: there will be redundant pairs
for (let i = 0; i < 50; ++i) {
  const personId = casual.random_element(userData).id
  const songId = casual.random_element(songData).id

  usersongs.push(casual.relation({ personId, songId }))
}

// console.log(relations)
module.exports = usersongs
