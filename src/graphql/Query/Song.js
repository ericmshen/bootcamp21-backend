/* eslint-disable no-unused-vars */

const Song = require('../../models/Song')
const Artist = require('../../models/Artist')
const Usersong = require('../../models/Usersong')

const allSongs = async () => {
  try {
    const allsongs = await Song.query()
    return allsongs
  } catch (err) {
    // console.log(err)
    throw new Error('Failed to get all songs')
  }
}

const songById = async (_obj, { id }, context) => {
  try {
    const song = await Song.query().findOne('id', id)

    return song
  } catch (err) {
    // console.log(err)
    throw new Error('Failed to get song')
  }
}

const usersLikingSong = async (_obj, { id }, context) => {
  try {
    const usersongs = await Usersong.query().where('songId', id)
    // users is a list of usersongs
    // let temp = []
    // usersongs.forEach(element => {
    //     const songItem = await Song.query().where('id', element.songId)
    //     temp = temp.concat(songItem.titles)
    // })
    return usersongs
  } catch (err) {
    throw new Error('Could not find users')
  }
}

const artist = async ({ artistId }, params, context) => {
  const a = await Artist.query().findOne('id', artistId)
  return a
}

const resolver = {
  Query: {
    allSongs,
    songById,
    usersLikingSong,
  },
  Song: {
    artist,
  },
}
module.exports = resolver
