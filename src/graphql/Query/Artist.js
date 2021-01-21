/* eslint-disable no-unused-vars */
const Artist = require('../../models/Artist')
const Userartist = require('../../models/Userartist')
const Song = require('../../models/Song')

const allArtists = async () => {
  try {
    const allartists = await Artist.query()
    return allartists
  } catch (err) {
    // console.log(err)
    throw new Error('Failed to get all artists')
  }
}

const artistById = async (_obj, { id }, context) => {
  try {
    const artist = await Artist.query().findOne('id', id)
    return artist
  } catch (err) {
    // console.log(err)
    throw new Error('Failed to get artist')
  }
}

const usersLikingArtist = async (_obj, { id }, context) => {
  try {
    const users = await Userartist.query().where('artistId', id)
    return users
  } catch (err) {
    throw new Error('Could not get users')
  }
}

const songsByArtist = async (_obj, { id }, context) => {
  try {
    const songs = await Song.query().where('artistId', id)
    return songs
  } catch (err) {
    throw new Error('Could not get songs')
  }
}

const songs = async ({ id }, params, context) => {
  try {
    const s = await Song.query().where('artistId', id)
    return s
  } catch (err) {
    throw new Error('Could not get songs')
  }
}

const resolver = {
  Query: {
    allArtists,
    artistById,
    usersLikingArtist,
    songsByArtist,
  },
  Artist: {
    songs,
  },
}
module.exports = resolver
