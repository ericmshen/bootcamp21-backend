const User = require('../../models/User')
const Userartist = require('../../models/Userartist')
const Usersong = require('../../models/Usersong')
const Usergenre = require('../../models/Usergenre')

// I believe this serves the same function as register in Auth.js
const addUser = async (_obj, {
  input: {
    email, password, firstName, lastName, birthday, phoneNumber, age, bio,
  },
}) => {
  const add = await User.query().insertAndFetch({
    email,
    password,
    firstName,
    lastName,
    birthday,
    phoneNumber,
    age,
    bio,
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

const addUserSong = async (_obj, {
  userId,
  songId,
}) => {
  const add = await Usersong.query().insertAndFetch({
    userId,
    songId,
  }).returning('*')
  return add
}

const addUserGenre = async (_obj, {
  userId,
  genre,
}) => {
  const add = await Usergenre.query().insertAndFetch({
    userId,
    genre,
  }).returning('*')
  return add
}

const resolver = {
  Mutation: {
    addUser,
    addUserArtist,
    addUserSong,
    addUserGenre,
  },
}

module.exports = resolver
