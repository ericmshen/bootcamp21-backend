const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    # login(email: String!, password: String!): AuthReturn!
    # register(input: RegisterInput!): AuthReturn!
  }

  type Query {
    # welcome: String!
  }

  type User {
    id: ID!
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    birthday: Date
    phoneNumber: String!
    age: Int!
    topGenres: [String!]
    topSongs: [Song!]
    topArtists: [Artist!]
    matches: [User!]
  }

  input AddUserInput {
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    birthday: Date
    phoneNumber: String!
    age: Int!
  }

  type Song {
    id: ID!
    title: String!
    artist: Artist!
    genre: String
  }

  input AddSongInput {
    title: String!
    artist: Artist!
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

  input RegisterInput {
    email: String!
    password: String!
  }
  scalar Date
`
