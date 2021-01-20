const casual = require('casual')
const artistsData = require('./artist')

casual.define('song', artistId => ({
  id: casual.uuid,
  artistId,
  title: casual.word,
}))

const songsData = []

for (let i = 0; i < 20; ++i) {
  const artistId = casual.random_element(artistsData).id
  // console.log(artistId)
  songsData.push(casual.song(artistId))
}

// console.log(songsData)
module.exports = songsData
