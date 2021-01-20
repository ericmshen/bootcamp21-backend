const songsData = require('../../../data/song')

exports.seed = knex => knex('songs').del()
  .then(() => knex('songs').insert(songsData))
