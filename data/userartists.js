const casual = require('casual')
const userData = require('./users')
const artistData = require('./artist')

casual.define('artistrelation', ({ userId, artistId }) => ({
  id: casual.uuid,
  userId,
  artistId,
}))

const userartists = []

for (let i = 0; i < 50; ++i) {
  const userId = casual.random_element(userData).id
  const artistId = casual.random_element(artistData).id

  userartists.push(casual.artistrelation({ userId, artistId }))
}

module.exports = userartists
