const { gql } = require('apollo-server-express')

module.exports = gql`
  # type Mutation {
  #   login(email: String!, password: String!): AuthReturn!
  #   register(input: RegisterInput!): AuthReturn!
  # }

  type Query {
    welcome: String!
    # user queries
    userSongsById(id:ID!):[Usersong!]!
    userArtistsById(id:ID!):[Userartist!]!
    userGenresById(id: ID!): [Usergenre!]!
    allUsers: [User!]!
    

    # 
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

  type Usersong{
    id: ID!
    userId: ID!
    songId: ID!
  }

  type Userartist{
    id: ID!
    userId: ID!
    artistId: ID!
  }

  type Usergenre{
    id: ID!
    userId: ID!
    genre: ID!
  }


  type Song {
    id: ID!
    title: String!
    artistId: Artist!
    genre: String
  }

  # input AddSongInput {
  #   title: String!
  #   artistId: ID!
  #   genre: String
  # }

  type Artist {
    id: ID!
    name: String!
    # songs: [Song!]
  }

  # input AddArtistInput {
  #   name: String!
  # }

  # type AuthReturn {
  #   token: String!
  #   user: User!
  # }

  # input RegisterInput {
  #   email: String!
  #   password: String!
  # }

  scalar Date
`
