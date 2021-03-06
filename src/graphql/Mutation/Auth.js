const { UserInputError } = require('apollo-server-express')
const User = require('../../models/User')
const {
  hashPassword, comparePassword, createToken,
} = require('../../lib/auth')

const login = async (_obj, { email, password }) => {
  const user = await User.query().findOne({
    email,
  })
  if (!user) {
    throw new UserInputError('Could not find email')
  }
  const validPassword = await comparePassword(password, user.password)
  if (!validPassword) {
  // if (password !== user.password) {
  // for testing seed data^
    throw new UserInputError('Invalid email or password')
  }

  // If successful login, set authentication information
  const payload = {
    id: user.id,
  }
  const token = createToken({ payload })

  return { user, token }
}

const register = async (_obj, {
  input: {
    email, password, username, firstName, lastName, birthday,
    phoneNumber, age, bio, followers, imageurl, profileurl,
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

  // If successful registration, set authentication information
  const payload = {
    id: user.id,
  }
  const token = createToken(payload)

  return { user, token }
}

const resolver = {
  Mutation: { login, register },
}

module.exports = resolver
