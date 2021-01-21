const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: AddUserInput!): AuthReturn!
    addArtist(input: AddArtistInput!): Artist!
    addSong(input: AddSongInput!): Song!
    # this is redundant, same purpose as register
    addUser(input: AddUserInput!): User!
  }

  type Query {
    # note: some queries return IDs, not the actual types
    welcome: String!

    allUsers: [User!]!
    userById(id: ID!): User!
    userSongsById(id: ID!): [Usersong!]!
    userArtistsById(id: ID!): [Userartist!]!
    userGenresById(id: ID!): [Usergenre!]!
    userMatches(id: ID!): [User!]

    allSongs: [Song!]!
    songById(id: ID!): Song!
    usersLikingSong(id: ID!): [ID!]

    allArtists: [Artist!]!
    artistById(id: ID!): Artist!
    usersLikingArtist(id: ID!): [ID!]
    songsByArtist(id: ID!): [Song!] 
  }

  type User {
    id: ID!
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    birthday: Date
    phoneNumber: String
    age: Int
    bio: String
    songs: [Song!]
    artists: [Artist!]
    genres: [String!]
  }

  input AddUserInput {
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    birthday: Date
    phoneNumber: String!
    age: Int!
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
    genre: ID!
  }

  type Song {
    id: ID!
    title: String!
    artistId: ID!
    artist: Artist
    genre: String
  }

  input AddSongInput {
    title: String!
    artistId: ID!
    genre: String
  }

  type Artist {
    id: ID!
    name: String!
    songs: [Song!]
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
