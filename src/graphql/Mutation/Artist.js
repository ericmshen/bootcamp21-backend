const Artist = require('../../models/Artist')

const addArtist = async (_obj, {
  input: {
    name,
  },
}) => {
  const add = await Artist.query().insertAndFetch({
    name,
  }).returning('*')
  return add
}

const resolver = {
  Mutation: {
    addArtist,
  },
}

module.exports = resolver
