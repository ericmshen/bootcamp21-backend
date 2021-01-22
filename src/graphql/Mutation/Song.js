const Song = require('../../models/Song')

const addSong = async (_obj, {
  input: {
    id, title, artistId, genre,
  },
}) => {
  const add = await Song.query().insertAndFetch({
    id,
    title,
    artistId,
    genre,
  }).returning('*')
  return add
}

const resolver = {
  Mutation: { addSong },
}

module.exports = resolver
