const password = '$2a$10$rQEY9CNl4OC.UtiyRgKnZeW0KaWnEANMKAxfIpNDQCgiCybm3G1fy'

const casual = require('casual')

casual.define('artist', () => ({
  id: casual.uuid,
  name: casual.name,
}))

const artistsData = []

for (let i = 0; i < 10; ++i) {
  artistsData.push(casual.artist)
}

// console.log(artistsData)
module.exports = artistsData
