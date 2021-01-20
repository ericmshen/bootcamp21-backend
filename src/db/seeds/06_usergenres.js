const data = require('../../../data/usergenres')

exports.seed = knex => knex('usergenres').del()
  .then(() => knex('usergenres').insert(data))
