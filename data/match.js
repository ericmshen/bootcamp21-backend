const casual = require('casual')
const userData = require('./users')

casual.define('match', ({ user1Id, user2Id }) => ({
  id: casual.uuid,
  user1Id,
  user2Id,
}))

const matches = []

for (let i = 0; i < 20; ++i) {
  const user1Id = casual.random_element(userData).id
  let user2Id = null

  do {
    user2Id = casual.random_element(userData).id
  } while (user1Id === user2Id)

  matches.push(casual.match({ user1Id, user2Id }))
}

// console.log(matches)
module.exports = matches
