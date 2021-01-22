const Artist = require('../../models/Artist')

const addArtist = async (_obj, {
  input: {
    id,
    name,
  },
}) => {
  const add = await Artist.query().insertAndFetch({
    id,
    name,
  }).returning('*')
  return add
}

const resolver = {
  Mutation: { addArtist },
}

module.exports = resolver
