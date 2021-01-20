const data = require('../../../data/userartists')

exports.seed = knex => knex('userartists').del()
  .then(() => knex('userartists').insert(data))
