const merge = require('lodash.merge')
const Welcome = require('./Welcome')
const User = require('./User')

const resolvers = [Welcome, User]

module.exports = merge(...resolvers)
