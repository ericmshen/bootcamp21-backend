const data = require('../../../data/usersongs')

exports.seed = knex => knex('usersongs').del()
  .then(() => knex('usersongs').insert(data))
