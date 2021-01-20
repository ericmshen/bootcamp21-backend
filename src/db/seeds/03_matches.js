const matches = require('../../../data/match')

exports.seed = knex => knex('matches').del()
  .then(() => knex('matches').insert(matches))
