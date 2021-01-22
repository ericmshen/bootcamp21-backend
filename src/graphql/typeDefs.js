const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: AddUserInput! ): AuthReturn!
    addArtist(input: AddArtistInput!): Artist!
    addSong(input: AddSongInput!): Song!
    addUserArtist(userId: ID!, artistId: ID!): Userartist!
    addUserSong(userId: ID!, songId: ID!): Usersong!
    addUserGenre(userId: ID!, genre: String!): Usergenre!
    modifyUser(input: ModifyUserInput!): User!

    # Register with songs
    registerWithData(input: AddUserWithDataInput!): AuthReturn!
  }

  type Query {
    # note: some queries return IDs, not the actual types
    welcome: String!

    allUsers: [User!]!
    userById(id: ID!): User!
    userSongsById(id: ID!): [Usersong!]!
    userArtistsById(id: ID!): [Userartist!]!
    userGenresById(id: ID!): [Usergenre!]!
    userMatches(id: ID!): [Match!]
    userLikedSongNames(id: ID!): [Song!]!

    allSongs: [Song!]!
    songById(id: ID!): Song!
    usersLikingSong(id: ID!): [String!]

    allArtists: [Artist!]!
    artistById(id: ID!): Artist!
    usersLikingArtist(id: ID!): [Userartist!]
    songsByArtist(id: ID!): [Song!] 

    usersLikingGenre(genre: String!): [Usergenre!]!

    userByToken(token: String!): User!

  }

  type User {
    id: ID!
    email: String!
    username: String
    password: String
    firstName: String
    lastName: String
    birthday: Date
    phoneNumber: String
    age: Int
    bio: String
    followers: Int
    imageurl: String
    profileurl: String
    songs: [Song!]
    artists: [Artist!]
    genres: [String!]
  }

  type Match {
    id: ID!
    user1Id: ID!
    user2Id: ID!
  }

  input AddUserInput {
    email: String!
    username: String!
    password: String
    firstName: String
    lastName: String
    birthday: Date
    phoneNumber: String
    age: Int
    bio: String
    followers: Int
    imageurl: String
    profileurl: String
  }

  input AddUserWithDataInput {
    email: String!
    username: String!
    password: String
    firstName: String
    lastName: String
    birthday: Date
    phoneNumber: String
    age: Int
    bio: String
    followers: Int
    imageurl: String
    profileurl: String
    songs: [AddSongInput]!
    # artists: [Userartist!]!
    # genres: [Usergenre!]!
  }

  input ModifyUserInput {
    token: String!
    password: String
    firstName: String
    lastName: String
    birthday: Date
    phoneNumber: String
    age: Int
    bio: String
  }

  type Usersong {
    id: ID!
    userId: ID!
    songId: ID!
  }

  type Userartist {
    id: ID!
    userId: ID!
    artistId: ID!
  }

  type Usergenre {
    id: ID!
    userId: ID!
    genre: String!
  }


  type Song {
    id: ID!
    title: String!
    artistId: ID!
    artist: Artist
    genre: String
  }

  input AddSongInput {
    id: ID!
    title: String!
    artistId: ID
    genre: String
  }

  type Artist {
    id: ID!
    name: String!
    songs: [Song!]
  }

  input ArtistInput {
    id: ID!
    name: String!
    songs: [AddSongInput!]
  }

  input AddArtistInput {
    name: String!
  }

  type AuthReturn {
    token: String!
    user: User!
  }

  scalar Date
`
