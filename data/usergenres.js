const casual = require('casual')
const userData = require('./users')

casual.define('artistrelation', ({ userId }) => ({
  id: casual.uuid,
  userId,
  genre: casual.safe_color_name,
}))

const usergenres = []

for (let i = 0; i < 50; ++i) {
  const userId = casual.random_element(userData).id

  usergenres.push(casual.artistrelation({ userId }))
}

module.exports = usergenres
