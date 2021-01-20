const casual = require('casual')
const userData = require('./users')
const songData = require('./song')

casual.define('songrelation', ({ userId, songId }) => ({
  id: casual.uuid,
  userId,
  songId,
}))

const usersongs = []

// problem: there will be redundant pairs
for (let i = 0; i < 50; ++i) {
  const userId = casual.random_element(userData).id
  const songId = casual.random_element(songData).id

  usersongs.push(casual.songrelation({ userId, songId }))
}

// console.log(relations)
module.exports = usersongs
