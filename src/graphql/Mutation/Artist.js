const Artist = require('../../models/Artist')
const Userartist = require('../../models/Userartist')

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

const addUserArtist = async (_obj, {
  userId,
  artistId,
}) => {
  const add = await Userartist.query().insertAndFetch({
    userId,
    artistId,
  }).returning('*')
  return add
}

const resolver = {
  Mutation: {
    addArtist,
    addUserArtist,
  },
}

module.exports = resolver
