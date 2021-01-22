/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { UserInputError } = require('apollo-server-express')
const User = require('../../models/User')
const Userartist = require('../../models/Userartist')
const Usersong = require('../../models/Usersong')
const Usergenre = require('../../models/Usergenre')
const Song = require('../../models/Song')
const {
  hashPassword, createToken, decodeToken,
} = require('../../lib/auth')

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

const modifyUser = async (_obj, {
  input: {
    token, password, firstName, lastName, birthday,
    phoneNumber, age, bio,
  },
}) => {
  const decoded = decodeToken(token).payload.id
  const passwordHash = await hashPassword(password)

  const update = await User.query().patchAndFetchById(decoded, {
    password: passwordHash,
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

// Same as register, but also adds user's favorite songs
const registerWithData = async (_obj, {
  input: {
    email, password, username, firstName, lastName, birthday,
    phoneNumber, age, bio, followers, imageurl, profileurl, songs,
  },
}) => {
  const emailExists = await User.query().findOne({ email })
  if (emailExists) {
    throw new UserInputError('Email is already in use')
  }
  const passwordHash = await hashPassword(password)
  const user = await User.query().insertAndFetch({
    email,
    password: passwordHash,
    username,
    firstName,
    lastName,
    birthday,
    phoneNumber,
    age,
    bio,
    followers,
    imageurl,
    profileurl,
  })

  const payload = {
    id: user.id,
  }
  const token = createToken(payload)

  console.log('before song loop')
  for (let i = 0; i < songs.length; i++) {
    console.log(songs[i])
  }
  // songs.forEach(({
  //   id, title, artistId, genre,
  // }) => {
  //   console.log('here is song data')
  //   console.log(id, title, artistId, genre)
  //   console.log('that was song data')
  //   const temp = async () => {
  //     const foundSong = await Song.query().where('id', id)
  //     return foundSong
  //   }

  //   const foundSong = temp()

  //   console.log('temp results')
  //   console.log(temp())
  //   console.log(foundSong)

  //   const userId = user.id

  //   if (!foundSong) {
  //     // add to Song database
  //     console.log('adding to DATABASE')
  //     const addedSong = addSong({
  //       id, title, artistId, genre,
  //     })
  //     const newSong = addUserSong({ userId, id })
  //   } else {
  //     const songId = foundSong.id
  //     const newSong = addUserSong({ userId, songId })
  //   }
  // })

  return { user, token }
}

const resolver = {
  Mutation: {
    registerWithData,
    modifyUser,
    addUserArtist,
    addUserSong,
    addUserGenre,
  },
}

module.exports = resolver

