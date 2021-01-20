const artistsData = require('../../../data/artist')

exports.seed = knex => knex('artists').del()
  .then(() => knex('artists').insert(artistsData))
