const User = require('../../models/User')
const Userartist = require('../../models/Userartist')
const Usersong = require('../../models/Usersong')
const Usergenre = require('../../models/Usergenre')
// const Song = require('../../models/Song')



const modifyUser = async (_obj, {
  input: {
    id, password, firstName, lastName, birthday,
    phoneNumber, age, bio,
  },
}) => {
  const update = await User.query().patchAndFetchById(id, {
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

// I believe this serves the same function as register in Auth.js
const addUser = async (_obj, {
  input: {
    email, password, username, firstName, lastName, birthday,
    phoneNumber, age, bio, followers, imageurl, profileurl,
  },
}) => {
  const add = await User.query().insertAndFetch({
    email,
    password,
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
  }).returning('*')

  // call usersongs/userartists mutations
  // did not add to song database
  // songs.forEach(element => {
  //   const temp = Song.query().where('id', element.songId)
  //   if (temp){
  //     // already exists --> just add usersong relation
  //   } else{
  //     // add to Song database AND create relation
  //   }
  //   const newSong = addUserSong(add.id, element.songId)
  // })


  // artists.forEach(element => {
  //   const newSong = addUserSong(add.id, element.songId)
  // })


  // genres.forEach(element => {
  //   const newSong = addUserSong(add.id, element.songId)
  // })
  

  return add
}


const resolver = {
  Mutation: {
    addUser,
    modifyUser,
    addUserArtist,
    addUserSong,
    addUserGenre,
  },
}

module.exports = resolver
