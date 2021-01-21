/* eslint-disable no-unused-vars */
const User = require('../../models/User')
const Usersong = require('../../models/Usersong')
const Userartist = require('../../models/Userartist')
const Usergenre = require('../../models/Usergenre')
const Match = require('../../models/Match')

// query to display all users
const allUsers = async () => {
  try {
    const allusers = await User.query()
    return allusers
  } catch (err) {
    // console.log(err)
    throw new Error('Failed to get all users')
  }
}

const userById = async (_obj, { id }, context) => {
  try {
    const user = await User.query().findOne('id', id)
    return user
  } catch (err) {
    throw new Error('Could not find user')
  }
}

// query to get a list of songs liked by users
const userSongsById = async (_obj, { id }, context) => {
  try {
    // const person = await User.query().findOne('id', id)
    const personSongs = await Usersong.query().where('userId', id)

    return personSongs
  } catch (err) {
    // console.log(err)
    throw new Error('Failed to get user songs')
  }
}

// query to get a list of artists liked by users
const userArtistsById = async (_obj, { id }, context) => {
  try {
    // const person = await User.query().findOne('id', id)
    const personArtists = await Userartist.query().where('userId', id)

    return personArtists
  } catch (err) {
    // console.log(err)
    throw new Error('Failed to get user artists')
  }
}

// query to get the genres that the user likes
const userGenresById = async (_obj, { id }, context) => {
  try {
    const personGenres = await Usergenre.query().where('userId', id)
    return personGenres
  } catch (err) {
    // console.log(err)
    throw new Error('Failed to get user genres')
  }
}

const userMatches = async (_obj, { id }, context) => {
  try {
    const matching = await Match.query().where('user1Id', id)
    const matched = await Match.query().where('user2Id', id)
    return matching + matched
  } catch (err) {
    throw new Error('Could not get matches')
  }
}

// These are alternate implementations of the above functions
// Probably won't need to use them
const songs = async ({ id }, params, context) => {
  const s = await Usersong.query().where('userId', id)
  return s
}

const artists = async ({ id }, params, context) => {
  const a = await Userartist.query().where('userId', id)
  return a
}

const genres = async ({ id }, params, context) => {
  const g = await Usergenre.query().where('userId', id)
  return g
}

const resolver = {
  Query: {
    allUsers,
    userById,
    userSongsById,
    userArtistsById,
    userGenresById,
    userMatches,
  },
  User: {
    songs,
    artists,
    genres,
  },
}
module.exports = resolver
