/* eslint-disable no-unused-vars */
const User = require('../../models/User')
const Usersong = require('../../models/Usersong')
const Userartist = require('../../models/Userartist')
const Usergenre = require('../../models/Usergenre')

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
    throw new Error('Failed to user genres')
  }
}

const resolver = {
  Query: {
    allUsers,
    userSongsById,
    userArtistsById,
    userGenresById,
  },

}
module.exports = resolver
