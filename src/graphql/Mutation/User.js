const User = require('../../models/User')
const Userartist = require('../../models/Userartist')
const Usersong = require('../../models/Usersong')
const Usergenre = require('../../models/Usergenre')
const Song = require('../../models/Song')
const { decodeToken } = require('../../lib/auth')

// adding song
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

/// /

const modifyUser = async (_obj, {
  input: {
    token, password, firstName, lastName, birthday,
    phoneNumber, age, bio,
  },
}) => {
  const decoded = decodeToken(token).payload.id

  const update = await User.query().patchAndFetchById(decoded, {
    password,
    firstName,
    lastName,
    birthday,
    phoneNumber,
    age,
    bio,
  }).returning('*')
  return update
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

const addUserSong = async (_obj,
  userId,
  songId,
) => {
  const add = await Usersong.query().insertAndFetch(
    userId,
    songId,
  ).returning('*')
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

// I believe this serves the same function as register in Auth.js
// const addUser = async (_obj, {
//   input: {
//     email, password, username, firstName, lastName, birthday,
//     phoneNumber, age, bio, followers, imageurl, profileurl, songs,
//   },
// }) => {
//   const add = await User.query().insertAndFetch({
//     email,
//     password,
//     username,
//     firstName,
//     lastName,
//     birthday,
//     phoneNumber,
//     age,
//     bio,
//     followers,
//     imageurl,
//     profileurl,
//   }).returning('*')



//   return add
// }

const resolver = {
  Mutation: {
    modifyUser,
    addUserArtist,
    addUserSong,
    addUserGenre,
  },
}

module.exports = resolver
