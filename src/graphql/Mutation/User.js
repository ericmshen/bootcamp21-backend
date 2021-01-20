const User = require('../../models/User')

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

const resolver = {
  Mutation: { addUser },
}

module.exports = resolver
